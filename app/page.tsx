import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wwi-battleship-at-sea-black-and-white-historical-p.jpg"
            alt="WWI Battleship"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="text-6xl md:text-8xl font-bold text-primary font-serif tracking-tight">Captain's Log</h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive archive of World War I naval vessels. Explore the mighty dreadnoughts, cruisers, and
            destroyers that shaped the Great War at sea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Explore Fleet
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Ships Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Warships</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the most influential naval vessels of the First World War
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group cursor-pointer transition-all hover:scale-105">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/hms-dreadnought-battleship-wwi.jpg"
                  alt="HMS Dreadnought"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">⚓ Battleship</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">HMS Dreadnought</h3>
                <p className="text-muted-foreground">
                  Revolutionary battleship that gave its name to an entire class of warships
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer transition-all hover:scale-105">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/sms-emden-german-cruiser-wwi.jpg"
                  alt="SMS Emden"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">⚓ Light Cruiser</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">SMS Emden</h3>
                <p className="text-muted-foreground">
                  German light cruiser famous for its commerce raiding in the Indian Ocean
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer transition-all hover:scale-105">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/hms-hood-battlecruiser-wwi.jpg"
                  alt="HMS Hood"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">⚓ Battlecruiser</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">HMS Hood</h3>
                <p className="text-muted-foreground">The largest battlecruiser ever built, pride of the Royal Navy</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">250+</div>
              <div className="text-lg text-muted-foreground">Warships Documented</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">12</div>
              <div className="text-lg text-muted-foreground">Naval Powers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">1914-1918</div>
              <div className="text-lg text-muted-foreground">Years of Conflict</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>Captain's Log - A Historical Archive of WWI Naval Vessels</p>
        </div>
      </footer>
    </div>
  )
}
