"use client"

import { useState, useEffect } from "react"
import { X, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StoryModeProps {
  onClose: () => void
}

const stories = [
  {
    title: "How Monsoons Affect Crop Yields",
    content: "India's agricultural sector is heavily dependent on the monsoon season...",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Urban Migration Patterns",
    content: "Over the past decade, India has seen a significant shift in population distribution...",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "The Impact of Climate Change on Coastal Regions",
    content: "Rising sea levels pose a significant threat to India's extensive coastline...",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function StoryMode({ onClose }: StoryModeProps) {
  const [currentStory, setCurrentStory] = useState(0)

  useEffect(() => {
    // Simulate map animation for each story
    console.log(`Animating map for story: ${stories[currentStory].title}`)
  }, [currentStory])

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="glassmorphism w-2/3 max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="font-heading text-lg">Story Mode: {stories[currentStory].title}</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover-glow">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <img
            src={stories[currentStory].image || "/placeholder.svg"}
            alt={stories[currentStory].title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-sm mb-4">{stories[currentStory].content}</p>
        </div>
        <div className="flex justify-between p-4 border-t border-gray-700">
          <Button
            variant="outline"
            onClick={() => setCurrentStory((prev) => (prev > 0 ? prev - 1 : stories.length - 1))}
            className="hover-glow"
          >
            <ChevronLeft className="h-4 w-4 mr-2" /> Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentStory((prev) => (prev < stories.length - 1 ? prev + 1 : 0))}
            className="hover-glow"
          >
            Next <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

