const navLinks = [
  { label: 'Home', active: true },
  { label: 'Studio' },
  { label: 'About' },
  { label: 'Journal' },
  { label: 'Reach Us' },
]

export default function Navigation() {
  return (
    <nav className="relative z-10 w-full">
      <div className="flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <span
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-sm transition-colors hover:text-foreground ${
                link.active ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform">
          Begin Journey
        </button>
      </div>
    </nav>
  )
}
