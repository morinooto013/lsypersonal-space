import { useState, useEffect } from 'react'

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
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a5.5 5.5 0 0 0-5.5 5.5c0 1.04.29 2.01.79 2.84C6.1 11.04 5 12.4 5 14c0 1.1.45 2.1 1.18 2.82C5.47 17.4 5 18.45 5 19.5c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5 0-1.05-.47-2.1-1.18-2.68A3.99 3.99 0 0 0 19 14c0-1.6-1.1-2.96-2.29-3.66.5-.83.79-1.8.79-2.84A5.5 5.5 0 0 0 12 2zm-1.5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-1.5 3c-.83 0-1.5.34-1.5.75s.67.75 1.5.75 1.5-.34 1.5-.75S12.83 13 12 13z"/>
      </svg>
    ),
  },
  {
    label: 'morinooto13',
    icon: (
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
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

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

  function handleCopy(label: string) {
    navigator.clipboard.writeText(label).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 1500)
    })
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full nav-glass">
        <div className="flex flex-row justify-between items-center px-6 sm:px-8 py-4 sm:py-5 max-w-7xl mx-auto">
          <span
            className="text-xl sm:text-2xl tracking-tight text-foreground"
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

          <button
            onClick={() => setSidebarOpen(true)}
            className="liquid-glass rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — full width on mobile, 288px on sm+ */}
      <div
        className={`fixed top-0 right-0 h-full z-50 w-full sm:w-72 flex flex-col py-10 px-6 transition-transform duration-300 card-glass ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ borderRadius: 0, borderRight: 'none', borderTop: 'none', borderBottom: 'none' }}
      >
        <div className="flex items-center justify-between mb-8">
          <span
            className="text-foreground text-xl font-normal"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Contact
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="liquid-glass flex items-center gap-3 px-4 py-3.5 rounded-xl text-muted-foreground hover:text-foreground transition-colors group cursor-default"
            >
              <span className="shrink-0 opacity-60">{c.icon}</span>
              <span className="flex-1 text-sm">{c.label}</span>
              <button
                onClick={() => handleCopy(c.label)}
                className="shrink-0 opacity-0 group-hover:opacity-50 hover:!opacity-100 active:opacity-100 transition-opacity p-1"
                title="复制"
              >
                {copied === c.label ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
          ))}
        </div>

        {/* Mobile nav links */}
        <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setActive(link.label); setSidebarOpen(false) }}
              className={`text-sm transition-colors hover:text-foreground py-1 ${
                active === link.label ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
