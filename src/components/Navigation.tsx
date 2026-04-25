import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
]

const contacts = [
  {
    label: '13396562993',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: '2714864534',
    icon: (
      /* QQ penguin-style icon */
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.37 5.43 3.53 7.16-.1.4-.32 1.37-.37 1.58-.06.27.1.54.37.54.14 0 .27-.06.37-.16l2.1-1.47A10.8 10.8 0 0 0 12 20c5.52 0 10-4.03 10-9S17.52 2 12 2zm-2.5 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </svg>
    ),
  },
  {
    label: 'morinooto13',
    icon: (
      /* WeChat bubble icon */
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.5 4C5.36 4 2 6.91 2 10.5c0 1.98 1.01 3.75 2.6 4.97L4 17.5l2.37-1.18A8.4 8.4 0 0 0 9.5 17c.17 0 .34 0 .5-.01A5.98 5.98 0 0 1 10 15c0-3.31 3.13-6 7-6 .17 0 .34 0 .5.01C16.74 6.63 13.4 4 9.5 4zM7 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 1.5c-3.31 0-6 2.24-6 5s2.69 5 6 5c.9 0 1.75-.19 2.5-.52L22 21.5l-.5-2.1A4.93 4.93 0 0 0 23 16c0-2.76-2.69-5-6-5zm-1.5 5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/>
      </svg>
    ),
  },
  {
    label: 'l2714864534@qq.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
]

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function Navigation() {
  const [active, setActive] = useState('Home')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleCopy(label: string) {
    navigator.clipboard.writeText(label).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 1500)
    })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full nav-glass">
      <div className="flex flex-row justify-between items-center px-8 py-5 max-w-7xl mx-auto">
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

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform flex items-center gap-2"
          >
            Contact
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-60 rounded-2xl overflow-hidden dropdown-glass py-2">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors group"
                >
                  <span className="shrink-0 opacity-70">{c.icon}</span>
                  <span className="flex-1 text-xs">{c.label}</span>
                  <button
                    onClick={() => handleCopy(c.label)}
                    className="shrink-0 opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                    title="复制"
                  >
                    {copied === c.label ? <CheckIcon /> : <CopyIcon />}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
