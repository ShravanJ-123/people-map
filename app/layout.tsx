import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import "leaflet/dist/leaflet.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The People's Map of India",
  description: "High-tech GIS dashboard demo",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'