export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-screen"
    >
      <div className="animate-fade-rise mb-2">
        <h1
          className="text-3xl sm:text-4xl font-normal leading-tight"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-0.5px' }}
        >
          <span style={{ color: 'rgba(255,255,255,0.78)' }}>Hi, 我是</span><span style={{ color: 'rgba(255,255,255,1)' }}>林思懿</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mt-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Hi, I'm Morinooto.
        </p>
      </div>

      <div className="animate-fade-rise-delay mt-8 max-w-2xl w-full space-y-1">
        <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
          有 AI 产品内容和运营背景。关注如何用 AI 提高内容生产与执行效率
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          I work in AI product content and operations, focusing on using AI to improve efficiency in content creation and execution.
        </p>
      </div>

      <p className="animate-fade-rise-delay-2 mt-8 text-muted-foreground text-xs tracking-widest">
        探索学习中……
      </p>

      <a
        href="#about"
        className="liquid-glass rounded-full px-10 py-3.5 text-sm text-foreground mt-10 hover:scale-[1.03] transition-transform cursor-pointer animate-fade-rise-delay-2"
      >
        了解更多
      </a>
    </section>
  )
}
