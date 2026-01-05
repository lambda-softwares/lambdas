"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { ChatWindow } from "./chat-window"
import type { Message } from "@/lib/chat-types"

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [assistantId, setAssistantId] = useState<string | null>(null)
  const [threadId, setThreadId] = useState<string | null>(null)
  const streamingRef = useRef<boolean>(false)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Initialize assistant and thread on mount
  useEffect(() => {
    const initialize = async () => {
      try {
        const response = await fetch("/api/chat/stream")
        if (response.ok) {
          const data = await response.json()
          setAssistantId(data.assistantId)
          setThreadId(data.threadId)
        }
      } catch (error) {
        console.error("Failed to initialize LangGraph:", error)
      }
    }
    initialize()
  }, [])

  const handleSendMessage = async (content: string) => {
    if (!assistantId || !threadId || streamingRef.current) {
      return
    }

    // Cancel any existing stream
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)
    streamingRef.current = true

    // Create assistant message placeholder for streaming
    const assistantMessageId = (Date.now() + 1).toString()
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, assistantMessage])

    // Create new abort controller for this stream
    const abortController = new AbortController()
    abortControllerRef.current = abortController

    try {
      const response = await fetch("/api/chat/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          threadId,
          assistantId,
          message: content,
          // Only send user messages to the API - LangGraph maintains its own thread history
          messages: messages
            .filter((msg) => msg.role === "user")
            .map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
        }),
        signal: abortController.signal,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let accumulatedContent = ""
      let buffer = ""

      if (!reader) {
        throw new Error("No response body")
      }

      while (true) {
        const { done, value } = await reader.read()
        
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split("\n")
        buffer = lines.pop() || ""

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6))
              
              console.log("Received SSE data:", data)
              console.log("Content value:", data.content)
              console.log("Content type:", typeof data.content)
              console.log("Content length:", data.content?.length)
              
              if (data.done) {
                console.log("Stream completed")
                break
              }
              
              if (data.error) {
                console.error("Stream error:", data.error)
                throw new Error(data.error)
              }
              
              if (data.content !== undefined) {
                // Server sends accumulated content, so we use it directly
                accumulatedContent = data.content
                console.log("Updating message with content:", accumulatedContent.substring(0, 100))
                console.log("Full content length:", accumulatedContent.length)
                
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantMessageId
                      ? { ...msg, content: accumulatedContent }
                      : msg
                  )
                )
              } else {
                console.warn("SSE data received but no content field:", Object.keys(data))
              }
            } catch (e) {
              // Skip invalid JSON lines
              console.warn("Failed to parse SSE data:", line, e)
            }
          }
        }
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        // Stream was cancelled, don't show error
        return
      }
      
      console.error("Streaming error:", error)
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at hello@lsl.co.ke" }
            : msg
        )
      )
    } finally {
      setIsTyping(false)
      streamingRef.current = false
      abortControllerRef.current = null
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
          style={{ backgroundColor: "#795953" }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#8a6a63"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#795953"}
          aria-label="Open chat"
        >
          {open ? <X className="h-6 w-6" style={{ color: "#F0DCCB" }} /> : <MessageCircle className="h-6 w-6" style={{ color: "#F0DCCB" }} />}
        </Button>
      </DialogTrigger>

      <ChatWindow
        messages={messages}
        isTyping={isTyping}
        onSendMessage={handleSendMessage}
      />
    </Dialog>
  )
}
