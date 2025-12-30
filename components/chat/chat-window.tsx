"use client"

import { useEffect, useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"
import { TypingIndicator } from "./typing-indicator"
import type { Message } from "@/lib/chat-types"

interface ChatWindowProps {
  messages: Message[]
  isTyping: boolean
  onSendMessage: (message: string) => void
}

export function ChatWindow({ messages, isTyping, onSendMessage }: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  return (
    <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col p-0 gap-0">
      <DialogHeader className="px-6 py-4 border-b">
        <DialogTitle className="text-[1.25rem] leading-[1.25] tracking-[-0.01em] font-semibold">LSL AI Assistant</DialogTitle>
        <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground">
          Ask me anything about our services, solutions, or book a consultation
        </p>
      </DialogHeader>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div className="max-w-sm flex flex-col gap-3">
              <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                👋 Hi! I'm your LSL AI Assistant. I can help you with:
              </p>
              <ul className="text-[0.9375rem] leading-[1.33] text-muted-foreground flex flex-col gap-2">
                <li>• Learn about our AI consulting services</li>
                <li>• Explore industry-specific solutions</li>
                <li>• Book a consultation with our AI Architects</li>
                <li>• Get information about our innovation labs</li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
          </>
        )}
      </div>

      <ChatInput onSendMessage={onSendMessage} disabled={isTyping} />
    </DialogContent>
  )
}
