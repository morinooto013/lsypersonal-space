export default function About() {
  return (
    <section id="about" className="relative z-10 min-h-screen flex items-center py-32 px-6">
      <div className="max-w-5xl mx-auto w-full">

        <h2
          className="text-4xl sm:text-5xl font-normal mb-12 text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          About
        </h2>

        <div className="flex flex-col sm:flex-row gap-8 items-stretch">

          {/* Avatar column */}
          <div className="shrink-0 flex flex-col items-center sm:items-center gap-3 sm:w-44">
            <div
              className="relative rounded-2xl overflow-hidden w-full"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 24px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src="/avatar.jpg"
                alt="林思懿"
                className="w-full object-cover block"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>

          {/* Cards column */}
          <div className="flex-1 flex flex-col gap-5">

            {/* Education */}
            <div className="card-glass rounded-2xl p-6">
              <h3 className="text-foreground text-lg font-normal mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>教育背景</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <p className="text-foreground text-sm">北京大学 · 日语笔译 · 全日制硕士</p>
                    <p className="text-muted-foreground text-xs mt-1">GPA：3.83/4.0 · 已出版译著 2 部 · 获 2024-2025 学年度研究生"科学实践创新"奖及奖学金</p>
                  </div>
                  <span className="text-muted-foreground text-xs whitespace-nowrap">2023.09 – 2025.06</span>
                </div>
                <div className="border-t border-white/10" />
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="text-muted-foreground text-sm">浙江农林大学 · 城市管理 · 全日制本科</p>
                  <span className="text-muted-foreground text-xs whitespace-nowrap">2019.09 – 2023.06</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="card-glass rounded-2xl p-6">
              <h3 className="text-foreground text-lg font-normal mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>个人技能</h3>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground">
                <div>
                  <p className="text-foreground/90 text-xs mb-1.5">AI 与技术工具</p>
                  <p className="leading-relaxed">熟练使用 Claude Code、OpenClaw 等 AI Agent，具备基础 Vibe Coding 能力。</p>
                </div>
                <div>
                  <p className="text-foreground/90 text-xs mb-1.5">内容与创作</p>
                  <p className="leading-relaxed">擅长文案策划与视频制作（AI 生图生视频、剪映、PS、Canva）；<br />熟悉二次元、短剧与 AI 内容生态。</p>
                </div>
                <div>
                  <p className="text-foreground/90 text-xs mb-1.5">数据分析能力</p>
                  <p className="leading-relaxed">全国计算机二级，具备良好的数据敏感度，能基于内容数据与用户行为进行分析与策略优化。</p>
                </div>
                <div>
                  <p className="text-foreground/90 text-xs mb-1.5">语言能力</p>
                  <p className="leading-relaxed">英语 CET-6 / 日语 N1（可作为工作语言）</p>
                </div>
              </div>
            </div>

            {/* Profile */}
            <div className="card-glass rounded-2xl p-6 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
              <p>・具备 AI 产品理解与内容运营的复合背景，能够快速拆解产品逻辑，并转化为清晰易懂的内容表达。</p>
              <p>・具备创作者生态与内容增长经验，擅长基于用户行为与数据反馈迭代内容策略，并实现站外曝光向业务转化的有效承接。</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
