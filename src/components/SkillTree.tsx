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
        <div className="relative w-full rounded-2xl overflow-hidden">
          {/* Background image */}
          <img
            src="/skill-tree-bg.png"
            alt=""
            className="w-full h-auto block"
            style={{ minHeight: '500px', objectFit: 'cover' }}
          />

          {/* Overlay to darken slightly for readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Skill nodes positioned over the tree */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl mx-auto">

              {/* Row 1 - top center */}
              <SkillNode name={skills[0]} className="absolute top-[8%] left-1/2 -translate-x-1/2" />

              {/* Row 2 - left & right */}
              <SkillNode name={skills[1]} className="absolute top-[24%] left-[8%] sm:left-[12%]" />
              <SkillNode name={skills[2]} className="absolute top-[24%] right-[8%] sm:right-[12%]" />

              {/* Row 3 - left, center, right */}
              <SkillNode name={skills[3]} className="absolute top-[42%] left-[2%] sm:left-[6%]" />
              <SkillNode name={skills[4]} className="absolute top-[42%] left-1/2 -translate-x-1/2" />
              <SkillNode name={skills[5]} className="absolute top-[42%] right-[2%] sm:right-[6%]" />

              {/* Row 4 - left & right */}
              <SkillNode name={skills[6]} className="absolute top-[60%] left-[6%] sm:left-[10%]" />
              <SkillNode name={skills[7]} className="absolute top-[60%] right-[6%] sm:right-[10%]" />

              {/* Row 5 - left & right */}
              <SkillNode name={skills[8]} className="absolute top-[78%] left-[4%] sm:left-[8%]" />
              <SkillNode name={skills[9]} className="absolute top-[78%] right-[4%] sm:right-[8%]" />

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
      <div className="card-glass rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 transition-all duration-300 hover:scale-105">
        <span className="text-xs sm:text-sm text-foreground/90 font-medium whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  )
}
