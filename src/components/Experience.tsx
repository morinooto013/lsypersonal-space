import React from 'react'

const hi = (text: string) => (
  <span style={{ color: 'rgba(255,255,255,0.88)' }}>{text}</span>
)

type Project = { title: React.ReactNode; desc: React.ReactNode }
type Job = {
  company: string
  role: string
  period: string
  bullets: React.ReactNode[]
  projects?: Project[]
}

const jobs: Job[] = [
  {
    company: '北京生数科技',
    role: '海外产品运营（日本市场，实习转正 · 获双月 bonus）',
    period: '2025.03 - 至今',
    bullets: [
      '独立负责日本市场创作者生态从 0 到 1 搭建与分层运营，提升站外内容质量与数量',
      '设计内容与商业化联动策略，推动用户付费转化及区域收入增长',
      <>运营社媒账号，策划线上线下活动，{hi('多条内容单条曝光超 5 万')}，有效提升功能渗透率与用户参与度</>,
    ],
    projects: [
      {
        title: <>小预算撬动内容爆发与收入跃升，{hi('单日收入超过 $10k')}</>,
        desc: (
          <>
            基于半年运营铺垫，筛选 7 位核心创作者 1 对 1 指导，产出约 20 条覆盖产品多维优势的视频内容；宣发日集中发布，示范内容触发平台自然流量推荐；同步策划投稿激励活动，并与商业化联动提供年包折扣。
            <br />
            成果：站外曝光 {hi('+300%')}、收入 {hi('+200%')}，日本地区单日收入超过 {hi('$10k')}，超越多个主要市场（全自然流量）。
          </>
        ),
      },
      {
        title: <>AIMV 活动：推动产品功能上线 + 内容营销，{hi('海外使用量达国内 6 倍')}</>,
        desc: (
          <>
            挑战：主题小众、制作门槛高，前期投稿极少，无有效投流流量。行动：根据用户反馈推动产品上线「一键 MV」功能；自制示范 MV 发帖展示步骤；激励核心创作者增加投稿。
            <br />
            成果：投稿量爆发式增长至远超预期；「一键 MV」海外使用量达国内 {hi('6 倍')}，由个人运营独立驱动。
          </>
        ),
      },
      {
        title: <>创建矩阵号，批量内容自动化生产，{hi('日均产出视频 100+ 条')}</>,
        desc: (
          <>
            搭建海外社媒矩阵号体系，利用 Claude Code 自动化生成展现产品性能的视频内容，多账号持续分发；调试 Skill 以满足不同社媒平台的视频格式与亮点展示要求，优化提示词，显著提升可采用视频率。
            <br />
            成果：日均产出视频内容 {hi('100 条以上')}，带动产品功能自然搜索量提升 {hi('30%')}。
          </>
        ),
      },
    ],
  },
  {
    company: '北京枫叶互动科技有限公司',
    role: '用户增长中心实习生',
    period: '2024.06 - 2024.08',
    bullets: [
      <>负责内容本地化运营：撰写 {hi('20+')} 推广文案，基于用户偏好迭代「前 3 秒 + 剧情切片」结构；自主搭建网络小说术语库，统一本地化表达风格</>,
      <>制作 {hi('100+')} 推广短视频，测试不同开篇与节奏，沉淀剪辑 SOP；单条视频最高播放量达 {hi('10w+')}</>,
      <>产品 ReelShort 进入区域下载榜 {hi('Top 10')}，形成可复用的高转化内容模板</>,
    ],
  },
  {
    company: '北京大学语言中心',
    role: '公共日语课教师',
    period: '2024.09 - 2025.06',
    bullets: [
      <>负责北大研究生二外日语课程教学，累计覆盖 {hi('70+')} 名研究生，基于学生反馈动态优化教学内容</>,
    ],
  },
]

const campus = [
  {
    role: '内外联络部负责人',
    org: '北京大学外国语学院',
    period: '2023.10 - 2024.10',
    desc: '策划校内学术讲座"圆桌谈"系列，成功邀请多位各语种老师分享学术研究经验。完成从选题、嘉宾邀约到执行的全流程；负责内容宣传与分发，累计阅读量 3000+，参与人数 200+。',
  },
  {
    role: '奖助办、培养办学生助理',
    org: '北京大学研究生院',
    period: '2024.09 - 2025.01',
    desc: '参与流程优化项目，输出流程指南与调研报告，提升信息传达与结构化表达能力。',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 min-h-screen flex items-center py-32 px-6">
      <div className="max-w-5xl mx-auto w-full">

        <h2
          className="text-4xl sm:text-5xl font-normal mb-16 text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Experience
        </h2>

        {/* Work */}
        <div className="space-y-6 mb-12">
          {jobs.map((job) => (
            <div key={job.company} className="card-glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-5">
                <div>
                  <p className="text-foreground text-sm font-medium">{job.company}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{job.role}</p>
                </div>
                <span className="text-muted-foreground text-xs whitespace-nowrap">{job.period}</span>
              </div>
              <ul className="space-y-2.5">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                    · {b}
                  </li>
                ))}
              </ul>
              {job.projects && (
                <div className="mt-5 space-y-3">
                  <p className="text-foreground/90 text-xs">重点项目</p>
                  {job.projects.map((p, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <p className="text-foreground/90 text-sm mb-1.5">{p.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Campus */}
        <h3
          className="text-2xl font-normal mb-8 text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          校内实践
        </h3>
        <div className="space-y-4">
          {campus.map((item) => (
            <div key={item.role} className="card-glass rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                <div>
                  <p className="text-foreground text-sm font-medium">{item.org} · {item.role}</p>
                </div>
                <span className="text-muted-foreground text-xs whitespace-nowrap">{item.period}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
