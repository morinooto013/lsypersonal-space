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

        {/* Tree with background image - slightly smaller */}
        <div className="relative w-full max-w-3xl mx-auto">
          <img
            src="/skill-tree-bg.png"
            alt=""
            className="w-full h-auto block rounded-2xl select-none"
            draggable={false}
          />

          {/* Skill nodes tightly packed on the tree canopy */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">

              {/* Row 1 - top */}
              <SkillNode name={skills[0]} className="absolute top-[14%] left-1/2 -translate-x-1/2" />

              {/* Row 2 */}
              <SkillNode name={skills[1]} className="absolute top-[26%] left-[12%]" />
              <SkillNode name={skills[2]} className="absolute top-[26%] right-[12%]" />

              {/* Row 3 - widest */}
              <SkillNode name={skills[3]} className="absolute top-[40%] left-[4%]" />
              <SkillNode name={skills[4]} className="absolute top-[40%] left-1/2 -translate-x-1/2" />
              <SkillNode name={skills[5]} className="absolute top-[40%] right-[4%]" />

              {/* Row 4 */}
              <SkillNode name={skills[6]} className="absolute top-[54%] left-[12%]" />
              <SkillNode name={skills[7]} className="absolute top-[54%] right-[12%]" />

              {/* Row 5 */}
              <SkillNode name={skills[8]} className="absolute top-[66%] left-[16%]" />
              <SkillNode name={skills[9]} className="absolute top-[66%] right-[14%]" />

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
      <div
        className="rounded-full px-3.5 py-1.5 sm:px-4 sm:py-1.5 transition-all duration-300 hover:scale-105 cursor-default"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow:
            'inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 2px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span className="text-xs sm:text-sm text-white/90 font-medium whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  )
}
