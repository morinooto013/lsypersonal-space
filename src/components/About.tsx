import { useState } from 'react'

type SkillDetail = {
  title: string
  desc: string
  result: string
}

const detailGroups: Record<string, SkillDetail> = {
  '创作者运营': {
    title: '创作者分层运营与爆款内容增长策略设计',
    desc: '基于不同阶段创作者的诉求和对平台的价值分层运营，在新模型宣发期间筛选7位核心创作者进行1对1内容制作指导，围绕产品能力设计差异化内容表达（效果展示、对比测评等），提升内容传播潜力。\n通过集中发布策略放大示范内容效应，触发平台自然流量推荐；同步设计投稿激励机制，并联动商业化策略提供年包折扣，提升转化效率。',
    result: '站外曝光提升300%，收入提升200%，日本市场单日收入突破$10k，超过多个主要市场，实现全自然流量驱动的内容增长与商业转化放大。',
  },
  '数据驱动': {
    title: '创作者分层运营与爆款内容增长策略设计',
    desc: '基于不同阶段创作者的诉求和对平台的价值分层运营，在新模型宣发期间筛选7位核心创作者进行1对1内容制作指导，围绕产品能力设计差异化内容表达（效果展示、对比测评等），提升内容传播潜力。\n通过集中发布策略放大示范内容效应，触发平台自然流量推荐；同步设计投稿激励机制，并联动商业化策略提供年包折扣，提升转化效率。',
    result: '站外曝光提升300%，收入提升200%，日本市场单日收入突破$10k，超过多个主要市场，实现全自然流量驱动的内容增长与商业转化放大。',
  },
  '用户需求洞察': {
    title: '基于用户反馈推动AI创作功能上线',
    desc: '在MV创作活动期间，针对主题小众、制作门槛高、创作链路复杂导致早期内容供给不足及自然流量缺失的问题，基于用户反馈推动产品侧上线「一键 MV」能力，降低创作门槛并提升内容可完成性。\n同时通过自制示范MV拆解完整创作步骤，降低创作者理解成本，并定向激励核心创作者参与内容生产，补充早期种子内容供给，形成可复制的创作范式。',
    result: '投稿量快速增长并显著超出预期；「一键 MV」功能海外使用量达到国内的6倍，实现由内容运营驱动的AI功能冷启动与规模化增长。',
  },
  '产品功能落地': {
    title: '基于用户反馈推动AI创作功能上线',
    desc: '在MV创作活动期间，针对主题小众、制作门槛高、创作链路复杂导致早期内容供给不足及自然流量缺失的问题，基于用户反馈推动产品侧上线「一键 MV」能力，降低创作门槛并提升内容可完成性。\n同时通过自制示范MV拆解完整创作步骤，降低创作者理解成本，并定向激励核心创作者参与内容生产，补充早期种子内容供给，形成可复制的创作范式。',
    result: '投稿量快速增长并显著超出预期；「一键 MV」功能海外使用量达到国内的6倍，实现由内容运营驱动的AI功能冷启动与规模化增长。',
  },
  '跨团队协作': {
    title: '基于用户反馈推动AI创作功能上线',
    desc: '在MV创作活动期间，针对主题小众、制作门槛高、创作链路复杂导致早期内容供给不足及自然流量缺失的问题，基于用户反馈推动产品侧上线「一键 MV」能力，降低创作门槛并提升内容可完成性。\n同时通过自制示范MV拆解完整创作步骤，降低创作者理解成本，并定向激励核心创作者参与内容生产，补充早期种子内容供给，形成可复制的创作范式。',
    result: '投稿量快速增长并显著超出预期；「一键 MV」功能海外使用量达到国内的6倍，实现由内容运营驱动的AI功能冷启动与规模化增长。',
  },
  'AI工具提效': {
    title: '海外社媒矩阵与AI驱动内容放大体系设计',
    desc: '围绕提升海外官号内容曝光效率与自然流量转化，搭建社媒矩阵号体系，构建"官号内容放大 + 矩阵号趋势响应 + AI内容生产"的协同机制：官号内容由矩阵号同步扩散放大，同时矩阵号基于账号定位进行热点追踪与爆款视频复刻，提升整体传播覆盖。\n在内容生产侧，结合Claude Code进行视频内容批量生成，并通过优化提示词与Skill结构，提升视频与不同账号的适配度与采纳率，实现规模化内容生产下的质量稳定性提升。',
    result: '实现日均100+条视频内容规模化生产，显著提升内容采纳率与分发效率，提升海外官号内容曝光与传播效果。',
  },
  '内容把控与创作': {
    title: '创作者分层运营与爆款内容增长策略设计',
    desc: '基于不同阶段创作者的诉求和对平台的价值分层运营，在新模型宣发期间筛选7位核心创作者进行1对1内容制作指导，围绕产品能力设计差异化内容表达（效果展示、对比测评等），提升内容传播潜力。\n通过集中发布策略放大示范内容效应，触发平台自然流量推荐；同步设计投稿激励机制，并联动商业化策略提供年包折扣，提升转化效率。',
    result: '站外曝光提升300%，收入提升200%，日本市场单日收入突破$10k，超过多个主要市场，实现全自然流量驱动的内容增长与商业转化放大。',
  },
}

const linkToWork = ['英语/日语']

export default function About() {
  const [activeDetail, setActiveDetail] = useState<SkillDetail | null>(null)

  const skills: { name: string; highlight?: boolean; x: number; y: number }[] = [
    { name: '跨团队协作', highlight: true, x: 43.25, y: 29.35 },
    { name: '用户需求洞察', highlight: true, x: 60.65, y: 35.56 },
    { name: '数据驱动', highlight: true, x: 22.61, y: 39.42 },
    { name: '产品功能落地', highlight: true, x: 38.59, y: 46.13 },
    { name: '活动策划执行', x: 75.86, y: 47.64 },
    { name: '创作者运营', highlight: true, x: 57.75, y: 53.35 },
    { name: 'AI工具提效', highlight: true, x: 20.53, y: 54.40 },
    { name: '英语/日语', x: 41.25, y: 61.39 },
    { name: '内容把控与创作', x: 68.35, y: 67.94 },
    { name: '社媒运营', x: 27.38, y: 70.28 },
  ]

  const handleClick = (name: string) => {
    if (name === '活动策划执行' || name === '社媒运营') {
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
            {/* Tree image with nodes */}
            <div className="relative w-full lg:w-[52%] shrink-0">
              {/* Skill Tree title */}
              <h3
                className="absolute top-3 left-4 z-10 text-foreground/70 text-lg font-normal"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Skill Tree
              </h3>

              <img
                src="/skill-tree-bg.png"
                alt=""
                className="w-full h-auto block rounded-xl select-none"
                draggable={false}
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.85) 35%, black 50%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.85) 35%, black 50%)',
                }}
              />

              {/* Skill nodes - fixed positions from user layout */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  {skills.map((skill) => (
                    <SkillNode
                      key={skill.name}
                      name={skill.name}
                      highlight={skill.highlight}
                      active={activeDetail?.title === detailGroups[skill.name]?.title}
                      onClick={() => handleClick(skill.name)}
                      x={skill.x}
                      y={skill.y}
                    />
                  ))}
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
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3 whitespace-pre-line">
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

              {/* AI Creator Agent card - shows with 用户需求洞察 group */}
              {activeDetail?.title === '基于用户反馈推动AI创作功能上线' && (
                <div className="rounded-xl p-4 mt-4 animate-fade-rise" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h4 className="text-foreground text-sm font-medium mb-2 leading-snug">
                    创作者经验产品化实践：AI Creator Agent
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    将优秀创作者的选题经验与热点判断逻辑沉淀为 AI Agent，帮助不同类型账号评估热点适配度并生成内容策略。
                  </p>
                  <div className="flex justify-end mt-3">
                    <a
                      href="https://claude.ai/share/ea946a5f-c84a-4813-bbb1-14c34b05c898"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300/80 text-xs hover:text-blue-200 transition-colors"
                    >
                      case展示 →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function SkillNode({ name, highlight, active, onClick, x, y }: {
  name: string
  highlight?: boolean
  active?: boolean
  onClick: () => void
  x: number
  y: number
}) {
  return (
    <div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <button
        onClick={onClick}
        className={`rounded-full px-3 py-1 sm:px-4 sm:py-1.5 transition-all duration-300 hover:scale-110 cursor-pointer ${active ? 'scale-110' : ''}`}
        style={highlight ? {
          background: active ? 'rgba(80, 130, 255, 0.45)' : 'rgba(99, 140, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: active ? '2px solid rgba(160, 200, 255, 0.9)' : '1px solid rgba(120, 160, 255, 0.45)',
          boxShadow: active
            ? 'inset 0 1px 0 rgba(200, 220, 255, 0.4), 0 0 32px rgba(80, 130, 255, 0.6), 0 0 12px rgba(80, 130, 255, 0.3), 0 2px 12px rgba(0, 0, 0, 0.2)'
            : 'inset 0 1px 0 rgba(150, 190, 255, 0.15), 0 0 14px rgba(99, 140, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.2)',
        } : {
          background: active ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: active ? '2px solid rgba(255, 255, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: active
            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 20px rgba(255, 255, 255, 0.15), 0 2px 12px rgba(0, 0, 0, 0.2)'
            : 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span className={`text-[10px] sm:text-xs font-medium whitespace-nowrap ${
          active
            ? (highlight ? 'text-white' : 'text-white')
            : (highlight ? 'text-blue-200' : 'text-white/80')
        }`}>
          {name}
        </span>
      </button>
    </div>
  )
}
