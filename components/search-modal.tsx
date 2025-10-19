'use client'

import { useEffect, useState } from 'react'
import { Search, X, Ship } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const MOCK_SHIPS = [
  { name: 'HMS Dreadnought', type: 'Battleship', nation: 'Royal Navy', year: '1906' },
  { name: 'SMS Emden', type: 'Light Cruiser', nation: 'Imperial Navy', year: '1908' },
  { name: 'HMS Hood', type: 'Battlecruiser', nation: 'Royal Navy', year: '1918' },
  { name: 'USS Texas', type: 'Battleship', nation: 'US Navy', year: '1912' },
  { name: 'SMS Bayern', type: 'Battleship', nation: 'Imperial Navy', year: '1915' },
  { name: 'HMS Warspite', type: 'Battleship', nation: 'Royal Navy', year: '1913' },
]

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(MOCK_SHIPS)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setQuery('')
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

  useEffect(() => {
    if (query.trim() === '') {
      setResults(MOCK_SHIPS)
    } else {
      const filtered = MOCK_SHIPS.filter(
        (ship) =>
          ship.name.toLowerCase().includes(query.toLowerCase()) ||
          ship.type.toLowerCase().includes(query.toLowerCase()) ||
          ship.nation.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    }
  }, [query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Search Modal */}
      <div className="relative w-full max-w-2xl bg-card rounded-2xl shadow-premium border-2 border-border animate-in zoom-in-95 duration-300">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search warships by name, type, or nation..."
            className="flex-1 bg-transparent border-none outline-none text-lg placeholder:text-muted-foreground"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Ship className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No warships found matching your search</p>
            </div>
          ) : (
            results.map((ship, index) => (
              <button
                key={index}
                className="w-full text-left p-4 rounded-xl hover:bg-secondary/50 transition-colors flex items-center justify-between group"
                onClick={onClose}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg naval-gradient flex items-center justify-center">
                    <Ship className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      {ship.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {ship.type} • {ship.nation}
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {ship.year}
                </Badge>
              </button>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div className="p-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Press ESC to close</span>
          <span>Navigate with ↑↓ arrows</span>
        </div>
      </div>
    </div>
  )
}
