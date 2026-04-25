export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-screen"
    >
      {/* Line 1 - big */}
      <div className="animate-fade-rise mb-2">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-normal leading-tight"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-2px' }}
        >
          Hi, 我是<span style={{ color: 'rgba(255,255,255,0.95)' }}>林思懿</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Hi, I'm Lin Siyi.
        </p>
      </div>

      {/* Line 2 - description */}
      <div className="animate-fade-rise-delay mt-8 max-w-xl space-y-1">
        <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
          有 AI 产品内容和运营背景。通过 AI，让内容生产和实现变得更简单、更高效。
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I work in AI product content and operations.<br />
          Using AI to make things simpler and more efficient — from content to execution.
        </p>
      </div>

      {/* Exploring */}
      <p className="animate-fade-rise-delay-2 mt-8 text-muted-foreground text-sm tracking-widest">
        探索学习中……
      </p>

      <a
        href="#about"
        className="liquid-glass rounded-full px-12 py-4 text-sm text-foreground mt-12 hover:scale-[1.03] transition-transform cursor-pointer animate-fade-rise-delay-2"
      >
        了解更多
      </a>
    </section>
  )
}
