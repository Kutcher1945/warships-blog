import { Github, Twitter, Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/iron_horizon_white_letters.png"
                alt="Iron Horizon"
                width={260}
                height={60}
                className="h-12 w-auto dark:block hidden"
              />
              <Image
                src="/iron_horizon_black_letters.png"
                alt="Iron Horizon"
                width={260}
                height={60}
                className="h-12 w-auto dark:hidden block"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A comprehensive historical archive documenting the naval vessels of World War I.
              Preserving maritime history for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#fleet"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Browse Fleet
                </a>
              </li>
              <li>
                <a
                  href="#battles"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Major Battles
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Project
                </a>
              </li>
              <li>
                <a
                  href="#contribute"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#timeline"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#glossary"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Naval Glossary
                </a>
              </li>
              <li>
                <a
                  href="#sources"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Sources
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iron Horizon. Historical archive for educational purposes.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
