"use client"

import { useState } from "react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { ChatWindow } from "./chat-window"
import type { Message } from "@/lib/chat-types"

// Mock AI responses - replace with actual API call later
const getMockResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "Hello! Welcome to LSL. I'm here to help you learn about our AI consulting services, industry solutions, and innovation labs. How can I assist you today?"
  }

  if (lowerMessage.includes("services") || lowerMessage.includes("what do you do")) {
    return "LSL offers three main service pillars:\n\n1. **AI Consulting & Integration** - We integrate AI into your existing systems\n2. **Enterprise Software & Platforms** - Custom software solutions for businesses\n3. **Innovation Labs** - Consumer-facing AI products\n\nWould you like to know more about any of these?"
  }

  if (lowerMessage.includes("industries") || lowerMessage.includes("solutions")) {
    return "We serve 14+ industries including:\n• AgriTech\n• FinTech\n• LegalTech\n• HealthTech\n• Education\n• Manufacturing\n• Retail\n• And more!\n\nWhich industry interests you?"
  }

  if (
    lowerMessage.includes("book") ||
    lowerMessage.includes("appointment") ||
    lowerMessage.includes("call") ||
    lowerMessage.includes("meeting") ||
    lowerMessage.includes("consultation")
  ) {
    return "I'd be happy to help you book a consultation with our AI Architects! You can either:\n\n1. Visit our contact page directly: /contact\n2. Or tell me your preferred date/time and I'll note it down\n\nWhat works best for you?"
  }

  if (lowerMessage.includes("ai consulting") || lowerMessage.includes("integration")) {
    return "Our AI Consulting & Integration service helps businesses leverage AI in their existing systems. We:\n\n• Assess your current infrastructure\n• Identify AI opportunities\n• Implement AI solutions\n• Provide ongoing support\n\nWould you like to discuss your specific needs?"
  }

  if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
    return "Our pricing varies based on project scope and requirements. I recommend scheduling a free consultation with our AI Architects to discuss your specific needs and get a customized quote.\n\nIf you're considering LLM deployment, you can also use our **LLM Cost Calculator** to compare on-premise vs cloud API costs: /services/ai-consulting/llm-cost-calculator\n\nWould you like to book a call?"
  }

  if (
    lowerMessage.includes("llm") ||
    lowerMessage.includes("deployment") ||
    lowerMessage.includes("on-premise") ||
    lowerMessage.includes("cloud") ||
    lowerMessage.includes("calculator")
  ) {
    return "Great question! We have a specialized **LLM Cost-Benefit Calculator** that helps you determine when on-premise deployment becomes economically viable vs commercial APIs.\n\nYou can:\n• Compare open-source models (Llama, Qwen, GLM) with commercial APIs (GPT-5, Claude-4, Gemini)\n• Calculate break-even points\n• Get deployment recommendations\n\nTry it here: /services/ai-consulting/llm-cost-calculator\n\nWould you like to discuss your deployment strategy with our AI architects?"
  }

  if (lowerMessage.includes("location") || lowerMessage.includes("where")) {
    return "LSL is based in Kenya, serving clients across Africa and globally. We work both on-site and remotely depending on your needs. Would you like to know more about our working model?"
  }

  return "That's a great question! I'm here to help with information about LSL's services, solutions, and booking consultations. Could you please provide more details about what you'd like to know?"
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulate AI response delay (replace with actual API call)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getMockResponse(content),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
          aria-label="Open chat"
        >
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
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
