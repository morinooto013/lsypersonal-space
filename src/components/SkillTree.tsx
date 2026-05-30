export default function SkillTree() {
  const skills = [
    { name: '创作者运营', icon: '👥' },
    { name: '用户需求洞察', icon: '🔍' },
    { name: '用户反馈驱动', icon: '💬' },
    { name: '社媒运营', icon: '📢' },
    { name: '产品功能落地', icon: '📦' },
    { name: '活动策划执行', icon: '📋' },
    { name: 'AI工具提效', icon: '🤖' },
    { name: '数据分析与应用', icon: '📊' },
    { name: '跨团队协作推进', icon: '🤝' },
    { name: '内容质量判断能力', icon: '✅' },
  ]


  return (
    <section id="skill-tree" className="relative z-10 min-h-screen flex items-center py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">

        <h2
          className="text-4xl sm:text-5xl font-normal mb-16 text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Skill Tree
        </h2>

        {/* Tree visualization */}
        <div className="relative w-full" style={{ minHeight: '700px' }}>

          {/* SVG background tree structure */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="branch-grad" x1="0.5" y1="1" x2="0.5" y2="0">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
              </linearGradient>
              <filter id="branch-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="root-glow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Main trunk */}
            <path
              d="M500 700 C500 650, 500 600, 500 100"
              stroke="url(#branch-grad)"
              strokeWidth="2.5"
              filter="url(#branch-glow)"
              opacity="0.6"
            />

            {/* Row 0: center top */}
            <path d="M500 100 L500 60" stroke="url(#branch-grad)" strokeWidth="2" filter="url(#branch-glow)" opacity="0.5" />

            {/* Row 1: left & right */}
            <path d="M500 200 C450 190, 350 180, 250 170" stroke="url(#branch-grad)" strokeWidth="2" filter="url(#branch-glow)" opacity="0.5" />
            <path d="M500 200 C550 190, 650 180, 750 170" stroke="url(#branch-grad)" strokeWidth="2" filter="url(#branch-glow)" opacity="0.5" />

            {/* Row 2: left, center, right */}
            <path d="M500 340 C450 330, 350 320, 250 310" stroke="url(#branch-grad)" strokeWidth="2" filter="url(#branch-glow)" opacity="0.5" />
            <path d="M500 340 L500 300" stroke="url(#branch-grad)" strokeWidth="1.5" filter="url(#branch-glow)" opacity="0.4" />
            <path d="M500 340 C550 330, 650 320, 750 310" stroke="url(#branch-grad)" strokeWidth="2" filter="url(#branch-glow)" opacity="0.5" />

            {/* Row 3: left & right */}
            <path d="M500 480 C450 470, 350 460, 250 450" stroke="url(#branch-grad)" strokeWidth="2" filter="url(#branch-glow)" opacity="0.5" />
            <path d="M500 480 C550 470, 650 460, 750 450" stroke="url(#branch-grad)" strokeWidth="2" filter="url(#branch-glow)" opacity="0.5" />

            {/* Row 4: left & right */}
            <path d="M500 600 C450 590, 350 580, 250 580" stroke="url(#branch-grad)" strokeWidth="2" filter="url(#branch-glow)" opacity="0.5" />
            <path d="M500 600 C550 590, 650 580, 750 580" stroke="url(#branch-grad)" strokeWidth="2" filter="url(#branch-glow)" opacity="0.5" />

            {/* Decorative leaves */}
            {[
              { x: 350, y: 160, r: -20 }, { x: 650, y: 160, r: 20 },
              { x: 330, y: 300, r: -25 }, { x: 670, y: 300, r: 25 },
              { x: 350, y: 440, r: -15 }, { x: 650, y: 440, r: 15 },
              { x: 340, y: 570, r: -20 }, { x: 660, y: 570, r: 20 },
              { x: 480, y: 130, r: -10 }, { x: 520, y: 130, r: 10 },
            ].map((leaf, i) => (
              <g key={i} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.r})`}>
                <path
                  d="M0 0 C3 -6, 10 -10, 14 -6 C10 -3, 3 0, 0 0"
                  fill="#38bdf8"
                  opacity="0.35"
                  filter="url(#branch-glow)"
                />
              </g>
            ))}

            {/* Root glow */}
            <ellipse cx="500" cy="700" rx="80" ry="20" fill="#6366f1" opacity="0.15" filter="url(#root-glow)" />
            <ellipse cx="500" cy="700" rx="50" ry="12" fill="#38bdf8" opacity="0.2" filter="url(#branch-glow)" />
          </svg>

          {/* Skill nodes */}
          <div className="relative z-10 flex flex-col gap-8 sm:gap-10 py-4">
            {/* Row 0 - top center */}
            <div className="flex justify-center">
              <SkillNode icon={skills[0].icon} name={skills[0].name} delay={0} />
            </div>

            {/* Row 1 - left & right */}
            <div className="flex justify-between px-2 sm:px-8">
              <SkillNode icon={skills[1].icon} name={skills[1].name} delay={1} />
              <SkillNode icon={skills[2].icon} name={skills[2].name} delay={2} />
            </div>

            {/* Row 2 - left, center, right */}
            <div className="flex justify-between items-center px-2 sm:px-8">
              <SkillNode icon={skills[3].icon} name={skills[3].name} delay={3} />
              <SkillNode icon={skills[4].icon} name={skills[4].name} delay={4} />
              <SkillNode icon={skills[5].icon} name={skills[5].name} delay={5} />
            </div>

            {/* Row 3 - left & right */}
            <div className="flex justify-between px-2 sm:px-8">
              <SkillNode icon={skills[6].icon} name={skills[6].name} delay={6} />
              <SkillNode icon={skills[7].icon} name={skills[7].name} delay={7} />
            </div>

            {/* Row 4 - left & right */}
            <div className="flex justify-between px-2 sm:px-8">
              <SkillNode icon={skills[8].icon} name={skills[8].name} delay={8} />
              <SkillNode icon={skills[9].icon} name={skills[9].name} delay={9} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillNode({ icon, name, delay }: { icon: string; name: string; delay: number }) {
  return (
    <div
      className="skill-node animate-fade-rise"
      style={{ animationDelay: `${delay * 0.12}s` }}
    >
      <div
        className="relative px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl cursor-default transition-all duration-300 hover:scale-105 group"
        style={{
          background: 'rgba(15, 23, 60, 0.7)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          boxShadow: `
            inset 0 1px 0 rgba(129, 140, 248, 0.2),
            0 0 20px rgba(99, 102, 241, 0.15),
            0 4px 24px rgba(0, 0, 0, 0.3)
          `,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Corner accents - hexagonal tech feel */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400/50 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/50 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-indigo-400/50 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-indigo-400/50 rounded-br-lg" />

        {/* Content */}
        <div className="flex items-center gap-2.5">
          <span className="text-base sm:text-lg">{icon}</span>
          <span className="text-sm sm:text-base text-white/90 font-medium whitespace-nowrap">
            {name}
          </span>
        </div>

        {/* Hover glow effect */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
            boxShadow: '0 0 30px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(56, 189, 248, 0.05)',
          }}
        />
      </div>
    </div>
  )
}
