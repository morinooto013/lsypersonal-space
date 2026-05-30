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

const linkToWork = ['内容质量判断与创作', '社媒运营', '英语/日语']

export default function About() {
  const [activeDetail, setActiveDetail] = useState<SkillDetail | null>(null)

  const skills: { name: string; highlight?: boolean }[] = [
    { name: '创作者运营', highlight: true },       // [0] Row 1: top center
    { name: '用户需求洞察', highlight: true },     // [1] Row 2: left
    { name: '社媒运营' },                          // [2] Row 2: right
    { name: '英语/日语' },                         // [3] Row 3: left
    { name: '产品功能落地', highlight: true },     // [4] Row 3: center
    { name: '活动策划执行' },                      // [5] Row 3: right
    { name: 'AI工具提效', highlight: true },       // [6] Row 4: left
    { name: '数据驱动', highlight: true },         // [7] Row 4: right
    { name: '跨团队协作', highlight: true },       // [8] Row 5: left
    { name: '内容质量判断与创作' },                // [9] Row 5: right
  ]

  const handleClick = (name: string) => {
    if (name === '活动策划执行') {
      document.querySelector('#work-events')?.scrollIntoView({ behavior: 'smooth' })
      setActiveDetail(null)
    } else if (linkToWork.includes(name)) {
      document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
      setActiveDetail(null)
    } else if (detailGroups[name]) {
      setActiveDetail(detailGroups[name])
    }
  }

  return (
    <section id="about" className="relative z-10 min-h-screen flex items-center py-32 px-6">
      <div className="max-w-5xl mx-auto w-full">

        <h2
          className="text-4xl sm:text-5xl font-normal mb-12 text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          About
        </h2>

        {/* Top row: Avatar + Education card, same height */}
        <div className="flex flex-col sm:flex-row gap-6 items-stretch mb-6">

          {/* Avatar */}
          <div className="shrink-0 sm:w-36">
            <div
              className="relative rounded-2xl overflow-hidden w-full h-full"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 24px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src="/avatar.jpg"
                alt="林思懿"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* Education card */}
          <div className="flex-1 card-glass rounded-2xl p-6">
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
        </div>

        {/* Skill Tree section */}
        <div className="card-glass rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            {/* Tree image with nodes - following reference image layout */}
            <div className="relative w-full lg:w-[52%] shrink-0">
              <img
                src="/skill-tree-bg.png"
                alt=""
                className="w-full h-auto block rounded-xl select-none"
                draggable={false}
              />

              {/* Skill nodes - layout matching reference:
                  Row 1: center-right (创作者运营)
                  Row 2: left (用户需求洞察) + right (社媒运营)
                  Row 3: left (产品功能落地) + center-right (活动策划执行)
                  Row 4: left (AI工具提效) + center-right (数据驱动)
                  Row 5: left (跨团队协作) + center-right (内容质量判断与创作)
                  英语/日语 tucked in
              */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  {/* Row 1 - top center-right */}
                  <SkillNode name={skills[0].name} highlight={skills[0].highlight} active={activeDetail?.title === detailGroups[skills[0].name]?.title} onClick={() => handleClick(skills[0].name)} className="absolute top-[8%] left-[42%]" />

                  {/* Row 2 - left & right */}
                  <SkillNode name={skills[1].name} highlight={skills[1].highlight} active={activeDetail?.title === detailGroups[skills[1].name]?.title} onClick={() => handleClick(skills[1].name)} className="absolute top-[21%] left-[2%]" />
                  <SkillNode name={skills[2].name} highlight={skills[2].highlight} active={false} onClick={() => handleClick(skills[2].name)} className="absolute top-[21%] right-[2%]" />

                  {/* Row 3 - THREE across: left + center + right */}
                  <SkillNode name={skills[3].name} highlight={skills[3].highlight} active={false} onClick={() => handleClick(skills[3].name)} className="absolute top-[35%] left-[2%]" />
                  <SkillNode name={skills[4].name} highlight={skills[4].highlight} active={activeDetail?.title === detailGroups[skills[4].name]?.title} onClick={() => handleClick(skills[4].name)} className="absolute top-[35%] left-[35%]" />
                  <SkillNode name={skills[5].name} highlight={skills[5].highlight} active={false} onClick={() => handleClick(skills[5].name)} className="absolute top-[35%] right-[2%]" />

                  {/* Row 4 - left & right */}
                  <SkillNode name={skills[6].name} highlight={skills[6].highlight} active={activeDetail?.title === detailGroups[skills[6].name]?.title} onClick={() => handleClick(skills[6].name)} className="absolute top-[50%] left-[6%]" />
                  <SkillNode name={skills[7].name} highlight={skills[7].highlight} active={activeDetail?.title === detailGroups[skills[7].name]?.title} onClick={() => handleClick(skills[7].name)} className="absolute top-[50%] right-[6%]" />

                  {/* Row 5 - left & right */}
                  <SkillNode name={skills[8].name} highlight={skills[8].highlight} active={activeDetail?.title === detailGroups[skills[8].name]?.title} onClick={() => handleClick(skills[8].name)} className="absolute top-[64%] left-[2%]" />
                  <SkillNode name={skills[9].name} highlight={skills[9].highlight} active={false} onClick={() => handleClick(skills[9].name)} className="absolute top-[64%] right-[2%]" />
                </div>
              </div>
            </div>

            {/* Detail panel - right */}
            <div className="w-full lg:w-[48%]">
              {activeDetail ? (
                <div className="rounded-xl p-4 animate-fade-rise" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 className="text-foreground text-sm font-medium mb-3 leading-snug">
                    {activeDetail.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                    {activeDetail.desc}
                  </p>
                  <div className="border-t border-white/10 pt-2.5">
                    <p className="text-foreground/80 text-xs leading-relaxed">
                      <span className="text-foreground/60 text-[10px] mr-1.5">成果</span>
                      {activeDetail.result}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    具备 AI 产品理解与内容运营的复合背景，能够快速拆解产品逻辑，并转化为清晰易懂的内容表达。
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-3">
                    ・具备创作者生态与内容增长经验，擅长基于用户行为与数据反馈迭代内容策略，并实现站外曝光向业务转化的有效承接。
                  </p>
                </div>
              )}
            </div>
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
        className={`rounded-full px-3 py-1 sm:px-4 sm:py-1.5 transition-all duration-300 hover:scale-110 cursor-pointer ${active ? 'scale-105' : ''}`}
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
        <span className={`text-[10px] sm:text-xs font-medium whitespace-nowrap ${highlight ? 'text-blue-200' : 'text-white/80'}`}>
          {name}
        </span>
      </button>
    </div>
  )
}
