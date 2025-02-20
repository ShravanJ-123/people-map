"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"
import TopBar from "@/components/top-bar"
import Sidebar from "@/components/sidebar"
import AIAssistant from "@/components/ai-assistant"
import StoryMode from "@/components/story-mode"
import ARVRPreview from "@/components/ar-vr-preview"
import AboutFeatures from "@/components/about-features"


const Map = dynamic(() => import("@/components/map"), {
  loading: () => <MapLoader />,
  ssr: false,
})

export default function Dashboard() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [showAIAssistant, setShowAIAssistant] = useState(false)
  const [showStoryMode, setShowStoryMode] = useState(false)
  const [showARVRPreview, setShowARVRPreview] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMapLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="h-screen flex flex-col">
        <TopBar
          onAIAssistantToggle={() => setShowAIAssistant(!showAIAssistant)}
          onStoryModeToggle={() => setShowStoryMode(!showStoryMode)}
          onARVRPreviewToggle={() => setShowARVRPreview(!showARVRPreview)}
        />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 relative">
            {mapLoaded ? <Map /> : <MapLoader />}
            {showAIAssistant && <AIAssistant onClose={() => setShowAIAssistant(false)} />}
            {showStoryMode && <StoryMode onClose={() => setShowStoryMode(false)} />}
            {showARVRPreview && <ARVRPreview onClose={() => setShowARVRPreview(false)} />}
          </main>
        </div>
      </div>
      <AboutFeatures />
    </div>
  )
}

function MapLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background">
      <Loader2 className="w-10 h-10 animate-spin text-primary" />
    </div>
  )
}

