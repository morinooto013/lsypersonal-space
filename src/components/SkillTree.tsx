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
          <img
            src="/skill-tree-bg.png"
            alt=""
            className="w-full h-auto block select-none"
            draggable={false}
            style={{
              minHeight: '420px',
              objectFit: 'contain',
              mixBlendMode: 'lighten',
            }}
          />

          {/* Skill nodes scattered across the tree canopy */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">

              {/* Top area */}
              <SkillNode name={skills[0]} className="absolute top-[12%] left-1/2 -translate-x-1/2" />

              {/* Upper-mid */}
              <SkillNode name={skills[1]} className="absolute top-[22%] left-[16%]" />
              <SkillNode name={skills[2]} className="absolute top-[20%] right-[16%]" />

              {/* Mid - widest canopy */}
              <SkillNode name={skills[3]} className="absolute top-[36%] left-[6%]" />
              <SkillNode name={skills[4]} className="absolute top-[34%] left-1/2 -translate-x-1/2" />
              <SkillNode name={skills[5]} className="absolute top-[36%] right-[6%]" />

              {/* Lower-mid */}
              <SkillNode name={skills[6]} className="absolute top-[50%] left-[14%]" />
              <SkillNode name={skills[7]} className="absolute top-[50%] right-[14%]" />

              {/* Lower canopy */}
              <SkillNode name={skills[8]} className="absolute top-[64%] left-[20%]" />
              <SkillNode name={skills[9]} className="absolute top-[64%] right-[18%]" />

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
        className="rounded-full px-4 py-1.5 sm:px-5 sm:py-2 transition-all duration-300 hover:scale-105 cursor-default"
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
