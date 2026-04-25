export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-screen"
    >
      <h1
        className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] font-normal max-w-4xl animate-fade-rise"
        style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-2px' }}
      >
        Hi，我是
        <em className="not-italic text-muted-foreground"> 林思懿</em>
      </h1>

      <p className="text-muted-foreground text-base sm:text-lg max-w-xl mt-8 leading-relaxed animate-fade-rise-delay">
        有 AI 产品内容和运营背景。<br />
        通过 AI，让内容生产和实现变得更简单、更高效。<br />
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
