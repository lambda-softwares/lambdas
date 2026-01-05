import { type NextRequest } from "next/server"
import { Client } from "@langchain/langgraph-sdk"

// Use environment variables - NEVER hardcode secrets
const LANGGRAPH_API_URL = process.env.LANGGRAPH_API_URL
const LANGSMITH_API_KEY = process.env.LANGSMITH_API_KEY

if (!LANGGRAPH_API_URL || !LANGSMITH_API_KEY) {
  throw new Error("Missing required environment variables: LANGGRAPH_API_URL and LANGSMITH_API_KEY")
}

const client = new Client({
  apiUrl: LANGGRAPH_API_URL,
  apiKey: LANGSMITH_API_KEY,
})

async function getAssistantByName(name: string) {
  try {
    const assistants = await client.assistants.search({
      metadata: null,
      offset: 0,
      limit: 100,
    })
    
    // Try to find by name first
    let assistant = assistants.find((assistant) => assistant.name === name)
    
    // If not found by name, try by assistant_id
    if (!assistant) {
      assistant = assistants.find((assistant) => assistant.assistant_id === name)
    }
    
    // If still not found and we have assistants, return the first one (fallback)
    if (!assistant && assistants.length > 0) {
      assistant = assistants[0]
    }
    
    return assistant
  } catch (error) {
    console.error("Error fetching assistant:", error)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const { threadId, assistantId, message, messages } = await request.json()

    if (!threadId || !assistantId || !message) {
      return new Response(JSON.stringify({ error: "Missing required parameters" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Create a readable stream for Server-Sent Events
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Only send user messages to LangGraph - filter out assistant messages
          // LangGraph maintains its own thread history, so we only need user messages
          const userMessages = (messages || [])
            .filter((msg: { role: string; content: string }) => msg.role === "user")
            .map((msg: { role: string; content: string }) => ({
              role: msg.role,
              content: msg.content,
            }))
          
          // Add the current message
          const inputMessages = [
            ...userMessages,
            { role: "user", content: message },
          ]

          console.log("Streaming with threadId:", threadId, "assistantId:", assistantId)
          console.log("Input messages count (user only):", inputMessages.length)

          // Use "messages" streamMode for token-by-token streaming
          // This is the proper way to get incremental token deltas
          // Try "messages-tuple" if "messages" doesn't work - it returns [message, metadata] tuples
          const streamResponse = client.runs.stream(threadId, assistantId, {
            input: { messages: inputMessages },
            streamMode: "messages", // Token-by-token streaming mode
          })
          
          console.log("Started streaming with streamMode: messages")

          let accumulatedContent = ""
          
          for await (const chunk of streamResponse) {
            // Handle tuple format [message, metadata] if streamMode returns tuples
            let data = chunk.data as any
            const event = chunk.event
            
            // Check if chunk is a tuple [message, metadata]
            if (Array.isArray(chunk) && chunk.length >= 1) {
              data = chunk[0] // First element is the message
              console.log("Received tuple format, using first element as message")
            }
            
            // Log the full chunk structure to debug
            console.log("=== LangGraph Chunk ===")
            console.log("Event:", event)
            console.log("Chunk type:", Array.isArray(chunk) ? "tuple" : "object")
            console.log("Full data:", JSON.stringify(data, null, 2))
            
            // With streamMode: "messages", chunks contain message objects
            // The message object typically has: { role, content, ... }
            if (data) {
              let tokenDelta = ""
              let messageRole = ""
              
              // Method 1: Check if data is a message object directly (most common with streamMode: "messages")
              if (data.role !== undefined && data.content !== undefined) {
                messageRole = data.role
                if (typeof data.content === 'string') {
                  tokenDelta = data.content
                } else if (Array.isArray(data.content)) {
                  tokenDelta = data.content
                    .map((item: any) => {
                      if (typeof item === 'string') return item
                      if (item?.text) return item.text
                      if (item?.content) return typeof item.content === 'string' ? item.content : String(item.content)
                      return ""
                    })
                    .filter(Boolean)
                    .join('')
                } else if (data.content?.text) {
                  tokenDelta = typeof data.content.text === 'string' ? data.content.text : String(data.content.text)
                }
              }
              // Method 2: Check if message is nested in chunk
              else if (data.chunk) {
                if (data.chunk.role !== undefined && data.chunk.content !== undefined) {
                  messageRole = data.chunk.role
                  if (typeof data.chunk.content === 'string') {
                    tokenDelta = data.chunk.content
                  } else if (Array.isArray(data.chunk.content)) {
                    tokenDelta = data.chunk.content
                      .map((item: any) => {
                        if (typeof item === 'string') return item
                        if (item?.text) return item.text
                        if (item?.content) return typeof item.content === 'string' ? item.content : String(item.content)
                        return ""
                      })
                      .filter(Boolean)
                      .join('')
                  } else if (data.chunk.content?.text) {
                    tokenDelta = typeof data.chunk.content.text === 'string' ? data.chunk.content.text : String(data.chunk.content.text)
                  }
                }
                // Fallback: direct chunk content
                else if (typeof data.chunk === 'string') {
                  tokenDelta = data.chunk
                } else if (data.chunk.content !== undefined) {
                  if (typeof data.chunk.content === 'string') {
                    tokenDelta = data.chunk.content
                  } else if (Array.isArray(data.chunk.content)) {
                    tokenDelta = data.chunk.content.join('')
                  } else if (data.chunk.content?.text) {
                    tokenDelta = typeof data.chunk.content.text === 'string' ? data.chunk.content.text : String(data.chunk.content.text)
                  }
                } else if (data.chunk.text) {
                  tokenDelta = typeof data.chunk.text === 'string' ? data.chunk.text : String(data.chunk.text)
                }
              }
              // Method 3: Check for direct content field (without role)
              else if (data.content !== undefined) {
                if (typeof data.content === 'string') {
                  tokenDelta = data.content
                } else if (Array.isArray(data.content)) {
                  tokenDelta = data.content
                    .map((item: any) => {
                      if (typeof item === 'string') return item
                      if (item?.text) return item.text
                      return ""
                    })
                    .filter(Boolean)
                    .join('')
                } else if (data.content?.text) {
                  tokenDelta = typeof data.content.text === 'string' ? data.content.text : String(data.content.text)
                }
                messageRole = data.role || ""
              }
              // Method 4: Check if data itself is a string
              else if (typeof data === 'string') {
                tokenDelta = data
              }
              // Method 5: Check for text field
              else if (data.text) {
                tokenDelta = typeof data.text === 'string' ? data.text : String(data.text)
                messageRole = data.role || ""
              }
              
              console.log("Extracted tokenDelta:", JSON.stringify(tokenDelta), "Role:", messageRole)
              
              // Process token delta - be more permissive, accept any non-empty string
              // Even single characters/spaces might be valid tokens
              if (tokenDelta && typeof tokenDelta === 'string' && tokenDelta.length > 0) {
                // Skip if it's a user message
                if (messageRole !== "user" && messageRole !== "human") {
                  // Append the token delta for token-by-token streaming
                  accumulatedContent += tokenDelta
                  console.log("✅ Sending SSE - Content length:", accumulatedContent.length, "Delta:", JSON.stringify(tokenDelta))
                  const sseData = `data: ${JSON.stringify({ content: accumulatedContent, event: event })}\n\n`
                  controller.enqueue(encoder.encode(sseData))
                } else {
                  console.log("⏭️ Skipping user message, role:", messageRole)
                }
              } else {
                // Log detailed info when we can't extract
                console.log("⚠️ No token delta extracted")
                console.log("  - tokenDelta:", JSON.stringify(tokenDelta))
                console.log("  - tokenDelta type:", typeof tokenDelta)
                console.log("  - tokenDelta length:", tokenDelta?.length)
                console.log("  - messageRole:", messageRole)
                console.log("  - event:", event)
                console.log("  - data keys:", Object.keys(data || {}))
                if (data) {
                  console.log("  - data structure (first 2000 chars):", JSON.stringify(data, null, 2).substring(0, 2000))
                }
              }
            }
          }

          // Send final content if we have any accumulated
          if (accumulatedContent.length > 0) {
            console.log("Sending final accumulated content:", accumulatedContent.length)
            const finalSseData = `data: ${JSON.stringify({ content: accumulatedContent, event: 'final' })}\n\n`
            controller.enqueue(encoder.encode(finalSseData))
          }
          
          // Send completion event
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`))
          controller.close()
        } catch (error) {
          console.error("Streaming error:", error)
          const errorData = `data: ${JSON.stringify({ error: "Streaming failed", message: error instanceof Error ? error.message : String(error) })}\n\n`
          controller.enqueue(encoder.encode(errorData))
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    })
  } catch (error) {
    console.error("API route error:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Initialize assistant and thread
    const assistant = await getAssistantByName("chatbot")
    if (!assistant) {
      return new Response(JSON.stringify({ error: "Assistant not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    const thread = await client.threads.create()

    return new Response(JSON.stringify({
      assistantId: assistant.assistant_id,
      threadId: thread.thread_id,
    }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Initialization error:", error)
    return new Response(JSON.stringify({ error: "Failed to initialize" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

