export default function Work() {
  return (
    <section id="work" className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto w-full">

        <h2
          className="text-4xl sm:text-5xl font-normal mb-16 text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Work
        </h2>

        {/* ── 内容制作 ── */}
        <div className="mb-20">
          <h3 className="text-foreground text-xl sm:text-2xl font-normal mb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            内容制作
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            具备一定的设计审美与内容制作能力，能够将产品功能转化为通俗易懂的表达形式，同时支持活动海报等视觉内容的产出。
          </p>

          {/* 漫画三图 */}
          <div className="card-glass rounded-2xl p-6 mb-5">
            <div className="flex gap-3 overflow-x-auto pb-1 mb-5" style={{ scrollSnapType: 'x mandatory' }}>
              <div className="rounded-xl overflow-y-auto bg-white/5 flex-none w-[30%] min-w-[120px]" style={{ maxHeight: '420px', scrollSnapAlign: 'start' }}>
                <img src="/work/manga1.png" alt="参考生图漫画1" className="w-full object-cover object-top" />
              </div>
              <div className="rounded-xl overflow-y-auto bg-white/5 flex-none w-[30%] min-w-[120px]" style={{ maxHeight: '420px', scrollSnapAlign: 'start' }}>
                <img src="/work/manga2.png" alt="参考生图漫画2" className="w-full object-cover object-top" />
              </div>
              <div className="rounded-xl overflow-y-auto bg-white/5 flex-none w-[30%] min-w-[120px]" style={{ maxHeight: '420px', scrollSnapAlign: 'start' }}>
                <img src="/work/manga3.png" alt="参考生图漫画3" className="w-full object-cover object-top" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              在宣推产品「参考生图」功能时，运用 AI 生成图片，独立制作漫画形式的功能说明，通过视觉化表达降低用户理解门槛，并直观呈现功能效果。在账号粉丝约 500 的情况下，该内容获得约 6 万曝光。
            </p>
          </div>

          {/* 海报三图 */}
          <div className="card-glass rounded-2xl p-6">
            <div className="flex gap-3 overflow-x-auto pb-1 mb-5" style={{ scrollSnapType: 'x mandatory' }}>
              <div className="rounded-xl overflow-y-auto bg-white/5 flex-none w-[30%] min-w-[120px]" style={{ maxHeight: '420px', scrollSnapAlign: 'start' }}>
                <img src="/work/poster1.png" alt="VGS海报" className="w-full object-cover object-top" />
              </div>
              <div className="rounded-xl overflow-y-auto bg-white/5 flex-none w-[30%] min-w-[120px]" style={{ maxHeight: '420px', scrollSnapAlign: 'start' }}>
                <img src="/work/poster2.png" alt="YokaiParade海报" className="w-full object-cover object-top" />
              </div>
              <div className="rounded-xl overflow-y-auto bg-white/5 flex-none w-[30%] min-w-[120px]" style={{ maxHeight: '420px', scrollSnapAlign: 'start' }}>
                <img src="/work/poster3.png" alt="ポスター" className="w-full object-cover object-top" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              同时承担活动海报等相关视觉物料的设计与制作工作。
            </p>
          </div>
        </div>

        {/* ── 活动运营 ── */}
        <div>
          <h3 className="text-foreground text-xl sm:text-2xl font-normal mb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            活动运营
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            独立运营 X 账号，策划并执行 3 场以上活动，有效提升站内工具渗透率与站外曝光。
          </p>

          {/* 两张可点击活动图 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <a href="https://tokyomidnight.tokiwavalley.com/" target="_blank" rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <img src="/work/tokyomidnight.png" alt="Tokyo Midnight" className="w-full object-cover" />
            </a>
            <a href="https://the-remake.tokiwavalley.com/" target="_blank" rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <img src="/work/theremake.jpg" alt="The Remake" className="w-full object-cover" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 text-center">
            线上社媒活动 + 线下创作者交流活动
          </p>

          {/* 三张活动现场图 */}
          <div className="card-glass rounded-2xl p-6">
            <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollSnapType: 'x mandatory' }}>
              <div className="rounded-xl overflow-hidden bg-white/5 flex-none w-[30%] min-w-[100px]" style={{ scrollSnapAlign: 'start' }}>
                <img src="/work/event1.png" alt="活动现场1" className="w-full object-cover aspect-square" />
              </div>
              <div className="rounded-xl overflow-hidden bg-white/5 flex-none w-[30%] min-w-[100px]" style={{ scrollSnapAlign: 'start' }}>
                <img src="/work/event2.png" alt="活动现场2" className="w-full object-cover aspect-square" />
              </div>
              <div className="rounded-xl overflow-hidden bg-white/5 flex-none w-[30%] min-w-[100px]" style={{ scrollSnapAlign: 'start' }}>
                <img src="/work/event3.png" alt="活动现场3" className="w-full object-cover aspect-square" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
