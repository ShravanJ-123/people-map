"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronUp, Brain, Clock, Database, Share2, BarChartIcon as ChartBar, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Real-Time Insights",
    description: "Live data streams from across India",
    icon: Clock,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "AI-Powered Analysis",
    description: "Advanced machine learning predictions",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Integration",
    description: "Multiple sources in one platform",
    icon: Database,
    gradient: "from-pink-500 to-orange-500",
  },
]

const timeline = [
  { title: "Select Layer", icon: Map },
  { title: "Choose Timeframe", icon: Clock },
  { title: "Analyze Data", icon: ChartBar },
  { title: "Export Results", icon: Share2 },
]

const partners = [
  {
    name: "Government of India",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-19%2023-09-37-NZkHq8I0MaZYNE6w83DKbLxKv5V4ts.png",
  },
  {
    name: "United Nations",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-19%2023-09-37-NZkHq8I0MaZYNE6w83DKbLxKv5V4ts.png",
  },
  {
    name: "World Bank",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-19%2023-09-37-NZkHq8I0MaZYNE6w83DKbLxKv5V4ts.png",
  },
]

export default function AboutFeatures() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Feature Cards */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-heading mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={cn(
                  "glassmorphism p-6 rounded-xl hover:scale-105 transition-transform duration-300",
                  "border border-transparent hover:border-opacity-50",
                  `hover:border-gradient-${feature.gradient}`,
                )}
                whileHover={{ rotateY: 10, rotateX: 10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-heading mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading mb-12 text-center">How It Works</h2>
          <div className="relative">
            {timeline.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex items-center mb-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  {index < timeline.length - 1 && <div className="absolute top-12 left-1/2 w-px h-8 bg-primary/30" />}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-heading">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading mb-12 text-center">Try It Out</h2>
          <div className="glassmorphism p-6 rounded-xl">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-19%2023-09-37-NZkHq8I0MaZYNE6w83DKbLxKv5V4ts.png"
                alt="Map Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {["Pollution", "Traffic", "Weather"].map((layer) => (
                  <Button
                    key={layer}
                    variant="secondary"
                    className="hover-glow"
                    onClick={() => console.log(`Loading ${layer} layer...`)}
                  >
                    {layer} Layer
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/5 overflow-hidden">
        <h2 className="text-4xl font-heading mb-12 text-center">Our Partners</h2>
        <div className="flex space-x-12 animate-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              style={{ translateX: translateX }}
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "1M+", label: "Data Points" },
              { number: "28", label: "States Covered" },
              { number: "24/7", label: "Real-time Updates" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-8 rounded-xl text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="text-5xl font-heading mb-2 relative z-10"
                  animate={{ textShadow: ["0 0 20px rgba(var(--primary), 0.5)", "0 0 10px rgba(var(--primary), 0.2)"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl text-muted-foreground relative z-10">{stat.label}</div>
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 300 300" className="w-full h-full">
                    <path d="M150 0 L300 150 L150 300 L0 150 Z" fill="currentColor" className="text-primary" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        className={cn(
          "fixed bottom-8 right-8 p-4 rounded-full bg-primary text-primary-foreground shadow-lg",
          "hover:bg-primary/90 transition-all duration-300",
          !showBackToTop && "pointer-events-none opacity-0",
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  )
}

