"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, useMapEvents, CircleMarker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function MapEvents() {
  const [position, setPosition] = useState({ lat: 20.5937, lng: 78.9629 })
  const map = useMapEvents({
    move() {
      const center = map.getCenter()
      setPosition({ lat: center.lat, lng: center.lng })
    },
  })

  return (
    <div className="absolute bottom-4 left-4 glassmorphism p-2 rounded-md text-sm">
      Latitude: {position.lat.toFixed(4)} | Longitude: {position.lng.toFixed(4)} | Zoom: {map.getZoom()}
    </div>
  )
}

function DataPoints() {
  const cities = [
    { name: "Mumbai", lat: 19.076, lon: 72.8777 },
    { name: "Delhi", lat: 28.6139, lon: 77.209 },
    { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
    { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
    { name: "Chennai", lat: 13.0827, lon: 80.2707 },
  ]

  return (
    <>
      {cities.map((city, index) => (
        <CircleMarker
          key={index}
          center={[city.lat, city.lon]}
          radius={10}
          pathOptions={{ color: "hsl(var(--primary))", fillColor: "hsl(var(--primary))", fillOpacity: 0.7 }}
          className="pulse"
        >
          <Popup className="glassmorphism">
            <h3 className="font-heading text-lg">{city.name}</h3>
            <p>
              Lat: {city.lat}, Lon: {city.lon}
            </p>
          </Popup>
        </CircleMarker>
      ))}
    </>
  )
}

export default function Map() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }} className="z-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />
      <DataPoints />
    </MapContainer>
  )
}

