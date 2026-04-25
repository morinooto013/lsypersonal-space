'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
]

export default function Navigation() {
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const link = navLinks.find((l) => l.href === `#${id}`)
            if (link) setActive(link.label)
          }
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <span
          className="text-2xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          MorinoOto
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-sm transition-colors hover:text-foreground ${
                active === link.label ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:l2714864534@qq.com"
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
