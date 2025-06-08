import { Github, Linkedin, Twitter } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-divider-gray bg-bg-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
          {/* Left side - Copyright and Made with love */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-sm text-text-secondary">
              © {currentYear} Pranjul Saxena. All rights reserved.
            </p>
            <p className="text-sm text-text-secondary">
              Made with ❤️ in India
            </p>
          </div>

          {/* Center - Legal Links */}
          <div className="flex items-center gap-8">
            <a 
              href="/privacy" 
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              Terms of Service
            </a>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Pranjul-Saxena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-divider-gray bg-bg-card text-text-secondary transition-all duration-200 hover:border-accent-green hover:text-accent-green"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pranjul-saxena-070a051b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-divider-gray bg-bg-card text-text-secondary transition-all duration-200 hover:border-accent-purple hover:text-accent-purple"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/_PranjulSaxena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-divider-gray bg-bg-card text-text-secondary transition-all duration-200 hover:border-accent-yellow hover:text-accent-yellow"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}