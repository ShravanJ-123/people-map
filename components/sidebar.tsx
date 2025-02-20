"use client"

import { useState } from "react"
import { Layers, Map, CloudRain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export default function Sidebar() {
  const [liveMode, setLiveMode] = useState(false)
  const [futureProjection, setFutureProjection] = useState(false)

  return (
    <aside className="glassmorphism w-64 p-4 space-y-6 overflow-y-auto">
      <div>
        <h2 className="text-lg font-heading mb-2">Layers</h2>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start hover-glow">
            <Layers className="mr-2 h-4 w-4" /> Topographic
          </Button>
          <Button variant="outline" className="w-full justify-start hover-glow">
            <Map className="mr-2 h-4 w-4" /> Satellite
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-heading mb-2">Data Streams</h2>
        <div className="flex items-center justify-between">
          <span>Live Mode</span>
          <Switch checked={liveMode} onCheckedChange={setLiveMode} />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-heading mb-2">Scenario Modeling</h2>
        <div className="flex items-center justify-between">
          <span>Future Projection</span>
          <Switch checked={futureProjection} onCheckedChange={setFutureProjection} />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-heading mb-2">Climate Impact</h2>
        <Slider defaultValue={[2030]} max={2100} min={2023} step={1} />
      </div>
      <div>
        <h2 className="text-lg font-heading mb-2">Active Alerts</h2>
        <div className="bg-red-900 bg-opacity-50 text-red-100 p-2 rounded-md flex items-center">
          <CloudRain className="mr-2 h-4 w-4" />
          <span className="text-sm">Heavy rainfall expected in Kerala</span>
        </div>
      </div>
    </aside>
  )
}

