import { useState } from 'react'

type SkillDetail = {
  title: string
  desc: string
  result: string
}

const detailGroups: Record<string, SkillDetail> = {
  '创作者运营': {
    title: '小预算撬动内容爆发与收入跃升，单日收入超过 $10k',
    desc: '基于半年运营铺垫，筛选 7 位核心创作者 1 对 1 指导，产出约 20 条覆盖产品多维优势的视频内容；宣发日集中发布，示范内容触发平台自然流量推荐；同步策划投稿激励活动，并与商业化联动提供年包折扣。',
    result: '站外曝光 +300%、收入 +200%，日本地区单日收入超过 $10k，超越多个主要市场（全自然流量）。',
  },
  '数据驱动': {
    title: '小预算撬动内容爆发与收入跃升，单日收入超过 $10k',
    desc: '基于半年运营铺垫，筛选 7 位核心创作者 1 对 1 指导，产出约 20 条覆盖产品多维优势的视频内容；宣发日集中发布，示范内容触发平台自然流量推荐；同步策划投稿激励活动，并与商业化联动提供年包折扣。',
    result: '站外曝光 +300%、收入 +200%，日本地区单日收入超过 $10k，超越多个主要市场（全自然流量）。',
  },
  '用户需求洞察': {
    title: 'AIMV 活动：推动产品功能上线 + 内容营销，海外使用量达国内 6 倍',
    desc: '挑战：主题小众、制作门槛高，前期投稿极少，无有效投流流量。行动：根据用户反馈推动产品上线「一键 MV」功能；自制示范 MV 发帖展示步骤；激励核心创作者增加投稿。',
    result: '投稿量爆发式增长至远超预期；「一键 MV」海外使用量达国内 6 倍，由个人运营独立驱动。',
  },
  '产品功能落地': {
    title: 'AIMV 活动：推动产品功能上线 + 内容营销，海外使用量达国内 6 倍',
    desc: '挑战：主题小众、制作门槛高，前期投稿极少，无有效投流流量。行动：根据用户反馈推动产品上线「一键 MV」功能；自制示范 MV 发帖展示步骤；激励核心创作者增加投稿。',
    result: '投稿量爆发式增长至远超预期；「一键 MV」海外使用量达国内 6 倍，由个人运营独立驱动。',
  },
  '跨团队协作': {
    title: 'AIMV 活动：推动产品功能上线 + 内容营销，海外使用量达国内 6 倍',
    desc: '挑战：主题小众、制作门槛高，前期投稿极少，无有效投流流量。行动：根据用户反馈推动产品上线「一键 MV」功能；自制示范 MV 发帖展示步骤；激励核心创作者增加投稿。',
    result: '投稿量爆发式增长至远超预期；「一键 MV」海外使用量达国内 6 倍，由个人运营独立驱动。',
  },
  'AI工具提效': {
    title: '创建矩阵号，批量内容自动化生产，日均产出视频 100+ 条',
    desc: '搭建海外社媒矩阵号体系，利用 Claude Code 自动化生成展现产品性能的视频内容，多账号持续分发；调试 Skill 以满足不同社媒平台的视频格式与亮点展示要求，优化提示词，显著提升可采用视频率。',
    result: '日均产出视频内容 100 条以上，带动产品功能自然搜索量提升 30%。',
  },
}

const linkToWork = ['内容质量判断与创作', '社媒运营', '活动策划执行', '英语/日语']

export default function SkillTree() {
  const [activeDetail, setActiveDetail] = useState<SkillDetail | null>(null)

  const skills: { name: string; highlight?: boolean }[] = [
    { name: '创作者运营', highlight: true },
    { name: '用户需求洞察', highlight: true },
    { name: '社媒运营' },
    { name: '产品功能落地', highlight: true },
    { name: '活动策划执行' },
    { name: 'AI工具提效', highlight: true },
    { name: '数据驱动', highlight: true },
    { name: '跨团队协作', highlight: true },
    { name: '内容质量判断与创作' },
    { name: '英语/日语' },
  ]

  const handleClick = (name: string) => {
    if (linkToWork.includes(name)) {
      document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
      setActiveDetail(null)
    } else if (detailGroups[name]) {
      setActiveDetail(detailGroups[name])
    }
  }

  return (
    <section id="skill-tree" className="relative z-10 min-h-screen flex items-center py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">

        <h2
          className="text-4xl sm:text-5xl font-normal mb-12 text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Skill Tree
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Tree - shifted left */}
          <div className="relative w-full lg:w-[55%] shrink-0">
            <img
              src="/skill-tree-bg.png"
              alt=""
              className="w-full h-auto block rounded-2xl select-none"
              draggable={false}
            />

            {/* Skill nodes packed tightly across the tree */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full">

                {/* Row 1 */}
                <SkillNode {...skills[0]} highlight={skills[0].highlight} active={activeDetail?.title === detailGroups[skills[0].name]?.title} onClick={() => handleClick(skills[0].name)} className="absolute top-[13%] left-[42%]" />

                {/* Row 2 */}
                <SkillNode {...skills[1]} highlight={skills[1].highlight} active={activeDetail?.title === detailGroups[skills[1].name]?.title} onClick={() => handleClick(skills[1].name)} className="absolute top-[25%] left-[12%]" />
                <SkillNode {...skills[2]} highlight={skills[2].highlight} active={false} onClick={() => handleClick(skills[2].name)} className="absolute top-[24%] right-[10%]" />

                {/* Row 3 */}
                <SkillNode {...skills[3]} highlight={skills[3].highlight} active={activeDetail?.title === detailGroups[skills[3].name]?.title} onClick={() => handleClick(skills[3].name)} className="absolute top-[37%] left-[30%]" />
                <SkillNode {...skills[4]} highlight={skills[4].highlight} active={false} onClick={() => handleClick(skills[4].name)} className="absolute top-[36%] right-[8%]" />

                {/* Row 4 */}
                <SkillNode {...skills[5]} highlight={skills[5].highlight} active={activeDetail?.title === detailGroups[skills[5].name]?.title} onClick={() => handleClick(skills[5].name)} className="absolute top-[49%] left-[8%]" />
                <SkillNode {...skills[6]} highlight={skills[6].highlight} active={activeDetail?.title === detailGroups[skills[6].name]?.title} onClick={() => handleClick(skills[6].name)} className="absolute top-[50%] right-[14%]" />

                {/* Row 5 */}
                <SkillNode {...skills[7]} highlight={skills[7].highlight} active={activeDetail?.title === detailGroups[skills[7].name]?.title} onClick={() => handleClick(skills[7].name)} className="absolute top-[62%] left-[18%]" />
                <SkillNode {...skills[8]} highlight={skills[8].highlight} active={false} onClick={() => handleClick(skills[8].name)} className="absolute top-[61%] right-[10%]" />

                {/* Row 6 */}
                <SkillNode {...skills[9]} highlight={skills[9].highlight} active={false} onClick={() => handleClick(skills[9].name)} className="absolute top-[73%] left-[35%]" />

              </div>
            </div>
          </div>

          {/* Detail panel - right side */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
            {activeDetail ? (
              <div className="card-glass rounded-2xl p-6 sm:p-8 animate-fade-rise">
                <h3 className="text-foreground text-sm sm:text-base font-medium mb-4 leading-snug">
                  {activeDetail.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {activeDetail.desc}
                </p>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    <span className="text-foreground/60 text-xs mr-2">成果</span>
                    {activeDetail.result}
                  </p>
                </div>
              </div>
            ) : (
              <div className="card-glass rounded-2xl p-6 sm:p-8 opacity-60">
                <p className="text-muted-foreground text-sm">点击左侧能力标签查看详情</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

function SkillNode({ name, highlight, active, onClick, className }: {
  name: string
  highlight?: boolean
  active?: boolean
  onClick: () => void
  className?: string
}) {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className={`rounded-full px-4 py-2 sm:px-5 sm:py-2.5 transition-all duration-300 hover:scale-110 cursor-pointer ${active ? 'scale-105' : ''}`}
        style={highlight ? {
          background: active ? 'rgba(99, 140, 255, 0.3)' : 'rgba(99, 140, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: active ? '1.5px solid rgba(140, 180, 255, 0.7)' : '1px solid rgba(120, 160, 255, 0.45)',
          boxShadow: active
            ? 'inset 0 1px 0 rgba(180, 210, 255, 0.3), 0 0 24px rgba(99, 140, 255, 0.4), 0 2px 12px rgba(0, 0, 0, 0.2)'
            : 'inset 0 1px 0 rgba(150, 190, 255, 0.15), 0 0 14px rgba(99, 140, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.2)',
        } : {
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span className={`text-sm sm:text-base font-medium whitespace-nowrap ${highlight ? 'text-blue-200' : 'text-white/80'}`}>
          {name}
        </span>
      </button>
    </div>
  )
}
