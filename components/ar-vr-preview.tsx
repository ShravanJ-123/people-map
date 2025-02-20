"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

interface ARVRPreviewProps {
  onClose: () => void
}

export default function ARVRPreview({ onClose }: ARVRPreviewProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Set up scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
    mountRef.current.appendChild(renderer.domElement)

    // Add a simple sphere to represent Earth
    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/earth-texture.jpg"),
      bumpMap: new THREE.TextureLoader().load("/earth-bump.jpg"),
      bumpScale: 0.05,
      specularMap: new THREE.TextureLoader().load("/earth-specular.jpg"),
      specular: new THREE.Color("grey"),
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(5, 3, 5)
    scene.add(directionalLight)

    camera.position.z = 3

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      sphere.rotation.y += 0.005
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="glassmorphism w-2/3 h-2/3">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="font-heading text-lg">AR/VR Preview</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover-glow">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div ref={mountRef} className="w-full h-full relative">
          <div className="absolute top-0 left-0 bg-yellow-400 text-black px-2 py-1 text-sm font-bold">Demo Mode</div>
        </div>
      </div>
    </div>
  )
}

