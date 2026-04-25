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

        {/* Main layout: avatar left, cards right */}
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
            <p
              className="text-sm text-foreground/60 tracking-[0.2em]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              林思懿
            </p>
          </div>

          {/* Cards column */}
          <div className="flex-1 flex flex-col gap-5">

            {/* Education */}
            <div className="card-glass rounded-2xl p-6">
              <h3 className="text-foreground/80 text-xs font-medium tracking-widest uppercase mb-4">教育背景</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <p className="text-foreground text-sm">北京大学 · 日语笔译 · 全日制硕士</p>
                    <p className="text-muted-foreground text-xs mt-1">GPA：3.83/4.0 · 获2024-2025学年度研究生"科学实践创新"奖学金</p>
                  </div>
                  <span className="text-muted-foreground text-xs whitespace-nowrap">2023.09 – 2025.06</span>
                </div>
                <div className="border-t border-white/10" />
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="text-foreground text-sm">浙江农林大学 · 城市管理 · 全日制本科</p>
                  <span className="text-muted-foreground text-xs whitespace-nowrap">2019.09 – 2023.06</span>
                </div>
              </div>
            </div>

            {/* Profile */}
            <div className="card-glass rounded-2xl p-6 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
              <p>・具备AI产品理解与内容运营的复合背景，能够快速理解产品逻辑并转化为清晰易懂的内容表达。</p>
              <p>・有创作者生态与内容增长经验，擅长基于用户行为与数据反馈优化内容策略。</p>
              <p>・具备较强的结构化表达能力，能够输出兼顾专业性与可读性的内容（如案例解析、功能解读等）。</p>
            </div>

            {/* Skills */}
            <div className="card-glass rounded-2xl p-6">
              <h3 className="text-foreground/80 text-xs font-medium tracking-widest uppercase mb-4">个人技能</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="text-foreground/70 text-xs mb-1">AI 与技术理解</p>
                  <p>能使用 Claude Code、OpenClaw 等 Agent 提高生产效率，了解 Prompt 设计与基础调用逻辑</p>
                </div>
                <div>
                  <p className="text-foreground/70 text-xs mb-1">内容创作</p>
                  <p>擅长技术内容拆解（案例解析 / 功能解读 / 使用说明）</p>
                </div>
                <div>
                  <p className="text-foreground/70 text-xs mb-1">工具能力</p>
                  <p>PS / 剪映 / 数据分析</p>
                </div>
                <div>
                  <p className="text-foreground/70 text-xs mb-1">语言</p>
                  <p>日语 N1 / 英语六级</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
