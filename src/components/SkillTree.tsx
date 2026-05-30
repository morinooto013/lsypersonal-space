export default function SkillTree() {
  const skills = [
    '创作者运营',
    '用户需求洞察',
    '用户反馈驱动',
    '社媒运营',
    '产品功能落地',
    '活动策划执行',
    'AI工具提效',
    '数据分析与应用',
    '跨团队协作推进',
    '内容质量判断能力',
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
        <div className="relative w-full">
          {/* Background image - blend mode makes dark bg transparent */}
          <img
            src="/skill-tree-bg.png"
            alt=""
            className="w-full h-auto block rounded-2xl"
            style={{
              mixBlendMode: 'lighten',
              minHeight: '420px',
              objectFit: 'cover',
            }}
          />

          {/* Skill nodes positioned over the tree canopy */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">

              {/* Row 1 - top center */}
              <SkillNode name={skills[0]} className="absolute top-[10%] left-1/2 -translate-x-1/2" />

              {/* Row 2 - left & right */}
              <SkillNode name={skills[1]} className="absolute top-[22%] left-[10%] sm:left-[14%]" />
              <SkillNode name={skills[2]} className="absolute top-[22%] right-[10%] sm:right-[14%]" />

              {/* Row 3 - left, center, right */}
              <SkillNode name={skills[3]} className="absolute top-[38%] left-[3%] sm:left-[8%]" />
              <SkillNode name={skills[4]} className="absolute top-[38%] left-1/2 -translate-x-1/2" />
              <SkillNode name={skills[5]} className="absolute top-[38%] right-[3%] sm:right-[8%]" />

              {/* Row 4 - left & right */}
              <SkillNode name={skills[6]} className="absolute top-[54%] left-[8%] sm:left-[14%]" />
              <SkillNode name={skills[7]} className="absolute top-[54%] right-[8%] sm:right-[14%]" />

              {/* Row 5 - left & right */}
              <SkillNode name={skills[8]} className="absolute top-[68%] left-[6%] sm:left-[12%]" />
              <SkillNode name={skills[9]} className="absolute top-[68%] right-[6%] sm:right-[12%]" />

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function SkillNode({ name, className }: { name: string; className?: string }) {
  return (
    <div className={className}>
      <div className="card-glass rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 transition-all duration-300 hover:scale-105">
        <span className="text-xs sm:text-sm text-foreground/90 font-medium whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  )
}
