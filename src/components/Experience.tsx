import React from 'react'

const hi = (text: string) => (
  <span style={{ color: 'rgba(255,255,255,0.88)' }}>{text}</span>
)

const jobs: { company: string; role: string; period: string; bullets: React.ReactNode[] }[] = [
  {
    company: '北京生数科技',
    role: '海外区域运营（日本市场）',
    period: '2025.03 - 至今',
    bullets: [
      'AI产品内容拆解与表达：围绕模型能力与新功能（如视频生成、一键MV等），输出功能解读、玩法说明及案例内容，提升用户理解与使用转化',
      <>创作者内容策略搭建：建立创作者分层机制，拆解头部内容结构并沉淀可复用内容模型，推动站外曝光提升{hi('300%+')}，区域收入增长{hi('200%+')}</>,
      <>社媒与社群运营：负责X平台的运营，包括内容策划、文案与视觉设计；{hi('多条内容曝光达 5 万+')}，并基于数据复盘优化内容策略。</>,
      '活动与内容机制设计：策划并执行多场线上/线下内容活动，通过主题设计与创作引导提升内容质量与用户参与度',
      '数据驱动内容优化：跟踪内容表现与用户行为数据，持续复盘并优化内容结构与表达方式',
    ],
  },
  {
    company: '北京枫叶互动科技有限公司',
    role: '用户增长中心实习生',
    period: '2024.06 - 2024.08',
    bullets: [
      <>基于日本用户偏好输出{hi('20+')}日语推广内容，构建本地化表达体系，总结高转化文案结构与内容</>,
      <>制作{hi('100+')}短视频内容，优化"前3秒吸引+剧情推进"结构，单条视频最高播放量达{hi('10w+')}</>,
    ],
  },
]

const campus = [
  {
    role: '公共日语课教师',
    org: '北京大学语言中心',
    period: '2024.09 - 2025.06',
    desc: '面向70+研究生授课，根据反馈持续优化课程内容与表达方式，提升内容理解效率。',
  },
  {
    role: '内外联络部负责人',
    org: '北京大学外国语学院',
    period: '2023.10 - 2024.10',
    desc: '策划校内学术讲座"圆桌谈"系列，成功邀请多位各语种老师分享学术研究经验。完成从选题、嘉宾邀约到执行的全流程；负责内容宣传与分发，累计阅读量3000+，参与人数200+',
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
