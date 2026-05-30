import { useState, useRef, useEffect } from 'react'

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

const linkToWork = ['内容质量判断与创作', '英语/日语']

// Default positions (percentage based)
const defaultPositions: Record<string, { x: number; y: number }> = {
  '创作者运营': { x: 42, y: 8 },
  '用户需求洞察': { x: 2, y: 21 },
  '社媒运营': { x: 70, y: 21 },
  '英语/日语': { x: 2, y: 35 },
  '产品功能落地': { x: 35, y: 35 },
  '活动策划执行': { x: 70, y: 35 },
  'AI工具提效': { x: 6, y: 50 },
  '数据驱动': { x: 65, y: 50 },
  '跨团队协作': { x: 2, y: 64 },
  '内容质量判断与创作': { x: 58, y: 64 },
}

export default function About() {
  const [activeDetail, setActiveDetail] = useState<SkillDetail | null>(null)
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>(() => {
    const saved = localStorage.getItem('skill-tree-positions')
    return saved ? JSON.parse(saved) : defaultPositions
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const skills: { name: string; highlight?: boolean }[] = [
    { name: '创作者运营', highlight: true },
    { name: '用户需求洞察', highlight: true },
    { name: '社媒运营' },
    { name: '英语/日语' },
    { name: '产品功能落地', highlight: true },
    { name: '活动策划执行' },
    { name: 'AI工具提效', highlight: true },
    { name: '数据驱动', highlight: true },
    { name: '跨团队协作', highlight: true },
    { name: '内容质量判断与创作' },
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

  // Save positions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('skill-tree-positions', JSON.stringify(positions))
  }, [positions])

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
            {/* Tree image with draggable nodes */}
            <div className="relative w-full lg:w-[52%] shrink-0" ref={containerRef}>
              <img
                src="/skill-tree-bg.png"
                alt=""
                className="w-full h-auto block rounded-xl select-none"
                draggable={false}
              />

              {/* Draggable skill nodes */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  {skills.map((skill) => (
                    <DraggableSkillNode
                      key={skill.name}
                      name={skill.name}
                      highlight={skill.highlight}
                      active={activeDetail?.title === detailGroups[skill.name]?.title}
                      position={positions[skill.name] || { x: 50, y: 50 }}
                      onPositionChange={(pos) => {
                        setPositions(prev => ({ ...prev, [skill.name]: pos }))
                      }}
                      onClick={() => handleClick(skill.name)}
                      containerRef={containerRef}
                    />
                  ))}
                </div>
              </div>

              {/* Dev button to log positions */}
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

function DraggableSkillNode({
  name,
  highlight,
  active,
  position,
  onPositionChange,
  onClick,
  containerRef,
}: {
  name: string
  highlight?: boolean
  active?: boolean
  position: { x: number; y: number }
  onPositionChange: (pos: { x: number; y: number }) => void
  onClick: () => void
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const hasMoved = useRef(false)
  const startPos = useRef({ x: 0, y: 0 })

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    hasMoved.current = false
    startPos.current = { x: e.clientX, y: e.clientY }
    nodeRef.current?.setPointerCapture(e.pointerId)
    e.preventDefault()
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return

    const dx = Math.abs(e.clientX - startPos.current.x)
    const dy = Math.abs(e.clientY - startPos.current.y)
    if (dx > 3 || dy > 3) hasMoved.current = true

    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    // Clamp within bounds
    const clampedX = Math.max(0, Math.min(95, x))
    const clampedY = Math.max(0, Math.min(95, y))

    onPositionChange({ x: clampedX, y: clampedY })
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false
    nodeRef.current?.releasePointerCapture(e.pointerId)
    if (!hasMoved.current) {
      onClick()
    }
  }

  return (
    <div
      ref={nodeRef}
      className="absolute touch-none"
      style={{ left: `${position.x}%`, top: `${position.y}%`, transform: 'translate(-50%, -50%)' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div
        className={`rounded-full px-3 py-1 sm:px-4 sm:py-1.5 transition-shadow duration-300 cursor-grab active:cursor-grabbing select-none ${active ? 'scale-105' : ''}`}
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
      </div>
    </div>
  )
}
