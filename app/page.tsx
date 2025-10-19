'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShipModal } from "@/components/ship-modal"
import { SearchModal } from "@/components/search-modal"
import { AnimatedWaves } from "@/components/animated-waves"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { useCardTilt } from "@/hooks/use-card-tilt"
import { useParallax } from "@/hooks/use-parallax"
import { ships } from "@/data/ships"
import Image from "next/image"
import Link from "next/link"
import { Ship, Award, Users, Calendar, Search, ArrowRight } from "lucide-react"
import { useEffect } from 'react'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function ShipCard({ ship, onClick }: { ship: any; onClick: () => void }) {
  const tilt = useCardTilt(8)

  return (
    <Card
      ref={tilt.ref}
      onMouseMove={tilt.handleMouseMove}
      onMouseLeave={tilt.handleMouseLeave}
      onClick={onClick}
      className="overflow-hidden group cursor-pointer shadow-premium border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
      style={{ transform: tilt.transform, transition: 'transform 0.1s ease-out' }}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={ship.image}
          alt={ship.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant={ship.badgeVariant}>{ship.class}</Badge>
          <Badge variant="outline" className="text-xs">{ship.nation}</Badge>
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {ship.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {ship.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {ship.year}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {ship.crew}
          </span>
        </div>
      </div>
    </Card>
  )
}

function AnimatedCounter({ end, label, description }: { end: number; label: string; description: string }) {
  const { ref, count } = useCounterAnimation(end)

  return (
    <div ref={ref} className="text-center group cursor-pointer">
      <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl naval-gradient group-hover:scale-110 transition-transform duration-300">
        {label === 'Warships Documented' && <Ship className="w-10 h-10 text-white" />}
        {label === 'Naval Powers' && <Award className="w-10 h-10 text-white" />}
        {label === 'Years of Conflict' && <Calendar className="w-10 h-10 text-white" />}
      </div>
      <div className="text-6xl md:text-7xl font-bold text-primary mb-3 font-serif group-hover:scale-105 transition-transform">
        {count}{end > 100 ? '+' : ''}
      </div>
      <div className="text-xl font-medium mb-2">{label}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  )
}

export default function Home() {
  const [selectedShip, setSelectedShip] = useState<any>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const parallaxOffset = useParallax(0.5)

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Get first 3 ships for homepage
  const featuredShips = ships.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Ship Detail Modal */}
      {selectedShip && (
        <ShipModal
          isOpen={!!selectedShip}
          onClose={() => setSelectedShip(null)}
          ship={selectedShip}
        />
      )}

      {/* Search Button (Floating) */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full naval-gradient shadow-premium flex items-center justify-center hover:scale-110 transition-transform group"
        aria-label="Search"
      >
        <Search className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
      </button>
      {/* Hero Section with Parallax */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ transform: `translateY(${parallaxOffset}px)` }}>
          <Image
            src="/prinz_eugen.jpeg"
            alt="WWI Battleship"
            fill
            className="object-cover opacity-60 dark:opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
          <div className="absolute inset-0 naval-gradient opacity-20" />
        </div>

        {/* Animated Waves */}
        <AnimatedWaves />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-8 animate-scale-in">
            <Ship className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent">
              Captain's Log
            </h1>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            A comprehensive archive of naval vessels. Explore the mighty dreadnoughts, cruisers, and
            destroyers that shaped the Great War at sea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Link href="/ships">
              <Button size="lg" className="text-lg naval-gradient border-0 hover:opacity-90">
                <Ship className="w-5 h-5 mr-2" />
                Explore Fleet
              </Button>
            </Link>
            <a href="#about">
              <Button size="lg" variant="outline" className="text-lg glass hover:bg-primary/10">
                Learn More
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Ships Section */}
      <section id="fleet" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
                Featured Collection
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance font-serif">
                Legendary Warships
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the most influential naval vessels of the First World War
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredShips.map((ship, index) => (
              <AnimatedSection key={ship.name} delay={100 * (index + 1)}>
                <ShipCard ship={ship} onClick={() => setSelectedShip(ship)} />
              </AnimatedSection>
            ))}
          </div>

          {/* View All Ships Button */}
          <AnimatedSection delay={400}>
            <div className="text-center mt-12">
              <Link href="/ships">
                <Button size="lg" variant="outline" className="glass hover:bg-primary/10">
                  View All {ships.length} Ships
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section id="battles" className="py-32 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-secondary/30 dark:bg-secondary/10" />
        <div className="absolute inset-0 naval-gradient opacity-5" />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">By the Numbers</h2>
              <p className="text-lg text-muted-foreground">The scale of WWI naval warfare</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            <AnimatedCounter
              end={250}
              label="Warships Documented"
              description="Comprehensive archive of vessels across all classes"
            />
            <AnimatedCounter
              end={12}
              label="Naval Powers"
              description="Major maritime nations of the Great War era"
            />
            <AnimatedCounter
              end={1918}
              label="Years of Conflict"
              description="The war that changed naval warfare forever"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="glass p-12 rounded-3xl shadow-premium border-2 border-primary/10">
              <Ship className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Explore Maritime History
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Dive deep into the stories of courage, innovation, and sacrifice that defined naval warfare
                during the Great War. Every vessel has a story to tell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ships">
                  <Button size="lg" className="naval-gradient border-0 hover:opacity-90">
                    Start Exploring
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="glass hover:bg-primary/10">
                  View Timeline
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
