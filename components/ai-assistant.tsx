"use client"

import { useState } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AIAssistantProps {
  onClose: () => void
}

export default function AIAssistant({ onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      setInput("")
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I'm analyzing the data. One moment please...", isUser: false }])
      }, 1000)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Based on the current map view, I can tell you that pollution in Delhi correlates 78% with traffic density. Would you like more details on this insight?",
            isUser: false,
          },
        ])
      }, 3000)
    }
  }

  return (
    <div className="absolute bottom-4 right-4 w-80 glassmorphism">
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h3 className="font-heading text-lg">AI Assistant</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="hover-glow">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="h-64 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-2 rounded-lg ${msg.isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700 flex">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 mr-2 bg-secondary text-secondary-foreground"
        />
        <Button onClick={handleSend} className="hover-glow">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

