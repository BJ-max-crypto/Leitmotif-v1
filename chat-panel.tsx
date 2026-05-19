"use client"

import { useState } from "react"
import { RotateCcw, Copy, ThumbsUp, ThumbsDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I&apos;m your study assistant. I can help you understand the document you&apos;re reading, answer questions, create summaries, or explain complex concepts. How can I help you today?"
  },
  {
    id: "2",
    role: "user",
    content: "Can you explain backpropagation in simpler terms?"
  },
  {
    id: "3",
    role: "assistant",
    content: "Of course! Think of backpropagation like learning from mistakes.\n\nImagine you're learning to throw darts:\n\n1. **Forward pass**: You throw a dart (make a prediction)\n\n2. **Calculate error**: You see how far from the bullseye you landed (measure the mistake)\n\n3. **Backward pass**: You figure out what went wrong — maybe your arm angle, the force, or your grip\n\n4. **Adjust**: You tweak your technique based on what you learned\n\nIn neural networks, backpropagation does exactly this — it traces back through the network, layer by layer, figuring out which connections (weights) contributed most to the error, then adjusts them slightly to improve next time."
  }
]

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    }

    setMessages([...messages, newMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I understand you're asking about this topic. Let me analyze the document and provide a helpful response based on the content you're studying."
      }
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  return (
    <div className="h-full flex flex-col bg-chat-bg grainy">
      {/* Header */}
      <div className="relative z-10 flex items-center justify-end px-4 py-3 border-b border-border">
        <button className="p-1.5 rounded-xl hover:bg-accent/50 transition-colors">
          <RotateCcw className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      {/* Messages */}
      <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "group",
              message.role === "user" ? "flex justify-end" : "flex justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-3 text-sm text-grain",
                message.role === "user"
                  ? "bg-primary text-primary-foreground border border-border"
                  : "bg-transparent"
              )}
            >
              <div className="whitespace-pre-wrap leading-relaxed">
                {message.content.replace(/&apos;/g, "'")}
              </div>
              {message.role === "assistant" && (
                <div className="flex items-center gap-1 mt-3 pt-2 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 rounded-xl hover:bg-accent/50 transition-colors">
                    <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                  <button className="p-1 rounded-xl hover:bg-accent/50 transition-colors">
                    <ThumbsUp className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                  <button className="p-1 rounded-xl hover:bg-accent/50 transition-colors">
                    <ThumbsDown className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="relative z-10 px-4 pb-2">
        <div className="flex flex-wrap gap-2">
          {["Summarize this", "Explain further", "Key takeaways"].map((action) => (
            <button
              key={action}
              className="text-xs px-3 py-1.5 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-colors text-muted-foreground text-grain"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="relative z-10 p-4 border-t border-border">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the document..."
            className="w-full px-4 py-3 pr-12 text-sm bg-card border border-border rounded-2xl focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground text-grain"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
            disabled={!input.trim()}
          >
            <svg 
              className="h-4 w-4" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M4 20V4l18 8-18 8z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
