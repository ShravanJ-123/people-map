import { Mic, Share2, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TopBarProps {
  onAIAssistantToggle: () => void
  onStoryModeToggle: () => void
  onARVRPreviewToggle: () => void
}

export default function TopBar({ onAIAssistantToggle, onStoryModeToggle, onARVRPreviewToggle }: TopBarProps) {
  return (
    <header className="glassmorphism p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-heading text-primary">The People's Map of India</h1>
        <span className="text-sm text-muted-foreground">Data for 1.4 Billion People</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" onClick={onAIAssistantToggle} className="hover-glow">
          AI Assistant
        </Button>
        <Button variant="ghost" size="sm" onClick={onStoryModeToggle} className="hover-glow">
          Story Mode
        </Button>
        <Button variant="ghost" size="sm" onClick={onARVRPreviewToggle} className="hover-glow">
          View in AR
        </Button>
        <Button variant="ghost" size="icon" className="hover-glow">
          <Mic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hover-glow">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hover-glow">
          <BarChart2 className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}

