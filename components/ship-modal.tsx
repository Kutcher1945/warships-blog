'use client'

import { X, Calendar, Users, Anchor, Gauge, Shield, Cuboid, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ShipModalProps {
  isOpen: boolean
  onClose: () => void
  ship: {
    name: string
    class: string
    nation: string
    image: string
    year: string
    crew: string
    displacement?: string
    speed?: string
    armament?: string
    description: string
    history?: string
    model3dUrl?: string
  }
}

export function ShipModal({ isOpen, onClose, ship }: ShipModalProps) {
  const [show3D, setShow3D] = useState(false)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-premium border-2 border-border animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 rounded-full glass"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        {/* 3D Toggle button (only show if 3D model exists) */}
        {ship.model3dUrl && (
          <div className="absolute top-4 right-16 z-10 flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-full glass ${!show3D ? 'bg-primary/20' : ''}`}
              onClick={() => setShow3D(false)}
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Photo
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-full glass ${show3D ? 'bg-primary/20' : ''}`}
              onClick={() => setShow3D(true)}
            >
              <Cuboid className="w-4 h-4 mr-2" />
              3D Model
            </Button>
          </div>
        )}

        {/* Image/3D Model Header */}
        <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
          {!show3D || !ship.model3dUrl ? (
            <>
              <Image
                src={ship.image}
                alt={ship.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full">
              <iframe
                src={ship.model3dUrl}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                title={`3D model of ${ship.name}`}
              />
            </div>
          )}

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant={ship.class.toLowerCase().includes('battleship') ? 'battleship' : ship.class.toLowerCase().includes('cruiser') ? 'cruiser' : 'destroyer'}>
                {ship.class}
              </Badge>
              <Badge variant="outline">{ship.nation}</Badge>
              {show3D && ship.model3dUrl && (
                <Badge variant="outline" className="glass">
                  <Cuboid className="w-3 h-3 mr-1" />
                  Interactive 3D
                </Badge>
              )}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white drop-shadow-lg">
              {ship.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass p-4 rounded-xl">
              <Calendar className="w-5 h-5 text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Launched</div>
              <div className="font-bold text-lg">{ship.year}</div>
            </div>
            <div className="glass p-4 rounded-xl">
              <Users className="w-5 h-5 text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Crew</div>
              <div className="font-bold text-lg">{ship.crew}</div>
            </div>
            {ship.displacement && (
              <div className="glass p-4 rounded-xl">
                <Anchor className="w-5 h-5 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Displacement</div>
                <div className="font-bold text-lg">{ship.displacement}</div>
              </div>
            )}
            {ship.speed && (
              <div className="glass p-4 rounded-xl">
                <Gauge className="w-5 h-5 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Max Speed</div>
                <div className="font-bold text-lg">{ship.speed}</div>
              </div>
            )}
          </div>

          {/* Armament */}
          {ship.armament && (
            <div className="mb-6 glass p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">Armament</h3>
              </div>
              <p className="text-muted-foreground">{ship.armament}</p>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3 font-serif">Overview</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {ship.description}
            </p>
          </div>

          {/* History */}
          {ship.history && (
            <div>
              <h3 className="text-2xl font-bold mb-3 font-serif">Service History</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {ship.history}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
