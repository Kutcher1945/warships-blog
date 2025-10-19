'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ShipModal } from '@/components/ship-modal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCardTilt } from '@/hooks/use-card-tilt'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ships, nations, shipTypes, years, type Ship } from '@/data/ships'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Calendar, Users, Filter, X, Ship as ShipIcon, Anchor } from 'lucide-react'

function ShipCard({ ship, onClick }: { ship: Ship; onClick: () => void }) {
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
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
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

export default function ShipsPage() {
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null)
  const [selectedNation, setSelectedNation] = useState('All Nations')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedYear, setSelectedYear] = useState('All Years')
  const [showFilters, setShowFilters] = useState(false)

  // Filter ships based on selected filters
  const filteredShips = ships.filter(ship => {
    const nationMatch = selectedNation === 'All Nations' || ship.nation === selectedNation
    const typeMatch = selectedType === 'All Types' || ship.class === selectedType

    let yearMatch = true
    if (selectedYear !== 'All Years') {
      const shipYear = parseInt(ship.year)
      const [start, end] = selectedYear.split('-').map(y => parseInt(y))
      yearMatch = shipYear >= start && shipYear <= end
    }

    return nationMatch && typeMatch && yearMatch
  })

  const activeFiltersCount =
    (selectedNation !== 'All Nations' ? 1 : 0) +
    (selectedType !== 'All Types' ? 1 : 0) +
    (selectedYear !== 'All Years' ? 1 : 0)

  const clearFilters = () => {
    setSelectedNation('All Nations')
    setSelectedType('All Types')
    setSelectedYear('All Years')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Ship Detail Modal */}
      {selectedShip && (
        <ShipModal
          isOpen={!!selectedShip}
          onClose={() => setSelectedShip(null)}
          ship={selectedShip}
        />
      )}

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 naval-gradient opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl naval-gradient mb-6">
                <Anchor className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
                Fleet Archive
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive collection of {ships.length} WWI warships. Click any vessel to discover its complete history and specifications.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="glass"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="default" className="ml-2 px-2 py-0">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>

              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear all
                </Button>
              )}
            </div>

            <div className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredShips.length}</span> of {ships.length} ships
            </div>
          </div>

          {/* Filter Pills */}
          {showFilters && (
            <div className="glass p-6 rounded-2xl mb-8 animate-in slide-in-from-top">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Nation Filter */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Nation</label>
                  <div className="flex flex-wrap gap-2">
                    {nations.map(nation => (
                      <button
                        key={nation}
                        onClick={() => setSelectedNation(nation)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedNation === nation
                            ? 'naval-gradient text-white'
                            : 'bg-secondary hover:bg-secondary/80'
                        }`}
                      >
                        {nation}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Ship Type</label>
                  <div className="flex flex-wrap gap-2">
                    {shipTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedType === type
                            ? 'naval-gradient text-white'
                            : 'bg-secondary hover:bg-secondary/80'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Year Filter */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Launch Year</label>
                  <div className="flex flex-wrap gap-2">
                    {years.map(year => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedYear === year
                            ? 'naval-gradient text-white'
                            : 'bg-secondary hover:bg-secondary/80'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Ships Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {filteredShips.length === 0 ? (
            <div className="text-center py-20">
              <ShipIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-2xl font-bold mb-2">No ships found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more results
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredShips.map((ship, index) => (
                <AnimatedSection key={ship.id} delay={index * 50}>
                  <ShipCard ship={ship} onClick={() => setSelectedShip(ship)} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
