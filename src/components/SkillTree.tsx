export default function SkillTree() {
  const skills: { name: string; highlight?: boolean }[] = [
    { name: '创作者运营', highlight: true },
    { name: '用户需求洞察', highlight: true },
    { name: '用户反馈驱动', highlight: true },
    { name: '社媒运营' },
    { name: '产品功能落地', highlight: true },
    { name: '活动策划执行' },
    { name: 'AI工具提效', highlight: true },
    { name: '数据驱动', highlight: true },
    { name: '跨团队协作', highlight: true },
    { name: '内容质量判断与创作' },
    { name: '英语/日语' },
  ]

  return (
    <section id="skill-tree" className="relative z-10 min-h-screen flex items-center py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">

        <h2
          className="text-4xl sm:text-5xl font-normal mb-12 text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Skill Tree
        </h2>

        {/* Tree with background image */}
        <div className="relative w-full max-w-3xl mx-auto">
          <img
            src="/skill-tree-bg.png"
            alt=""
            className="w-full h-auto block rounded-2xl select-none"
            draggable={false}
          />

          {/* Skill nodes packed tightly on the tree */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">

              {/* Row 1 - top */}
              <SkillNode {...skills[0]} className="absolute top-[15%] left-1/2 -translate-x-1/2" />

              {/* Row 2 - tight */}
              <SkillNode {...skills[1]} className="absolute top-[24%] left-[14%]" />
              <SkillNode {...skills[2]} className="absolute top-[23%] right-[14%]" />

              {/* Row 3 - widest, three across */}
              <SkillNode {...skills[3]} className="absolute top-[33%] left-[5%]" />
              <SkillNode {...skills[4]} className="absolute top-[34%] left-1/2 -translate-x-1/2" />
              <SkillNode {...skills[5]} className="absolute top-[33%] right-[5%]" />

              {/* Row 4 */}
              <SkillNode {...skills[6]} className="absolute top-[44%] left-[10%]" />
              <SkillNode {...skills[7]} className="absolute top-[44%] right-[10%]" />

              {/* Row 5 */}
              <SkillNode {...skills[8]} className="absolute top-[54%] left-[18%]" />
              <SkillNode {...skills[9]} className="absolute top-[54%] right-[10%]" />

              {/* Row 6 */}
              <SkillNode {...skills[10]} className="absolute top-[64%] left-1/2 -translate-x-1/2" />

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function SkillNode({ name, highlight, className }: { name: string; highlight?: boolean; className?: string }) {
  return (
    <div className={className}>
      <div
        className="rounded-full px-3 py-1 sm:px-4 sm:py-1.5 transition-all duration-300 hover:scale-105 cursor-default"
        style={highlight ? {
          background: 'rgba(99, 140, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(120, 160, 255, 0.5)',
          boxShadow:
            'inset 0 1px 0 rgba(150, 190, 255, 0.2), 0 0 16px rgba(99, 140, 255, 0.25), 0 2px 8px rgba(0, 0, 0, 0.2)',
        } : {
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow:
            'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${highlight ? 'text-blue-200' : 'text-white/80'}`}>
          {name}
        </span>
      </div>
    </div>
  )
}
