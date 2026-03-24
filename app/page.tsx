import { HeroButtons, CtaSection } from './_components/HeroCta';

const features = [
  { icon: '📊', title: '실시간 투자 정보', desc: '국내외 시장 동향과 종목 분석을 실시간으로 제공합니다.' },
  { icon: '💬', title: '투자자 커뮤니티', desc: '전문 투자자들과 견해를 나누고 인사이트를 공유하세요.' },
  { icon: '📹', title: '투자 영상 콘텐츠', desc: '검증된 전문가의 투자 강의와 시장 분석 영상을 시청하세요.' },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)]">

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#07070f] px-4 py-28 text-center sm:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.18),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_100%,rgba(99,102,241,0.06),transparent)]" />

        <div className="relative max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-medium text-indigo-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
            스마트 투자 정보 플랫폼
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            더 나은 투자 결정을 위한
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              투자 정보의 시작점
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
            실시간 시장 정보, 전문가 분석, 투자자 커뮤니티까지.
            <br />
            Ant Cells에서 더 스마트한 투자를 시작하세요.
          </p>

          <HeroButtons />
        </div>

        {/* Stats */}
        <div className="relative mt-16 flex w-full max-w-lg justify-center gap-12 border-t border-white/5 pt-8">
          {[
            { value: '실시간', label: '시장 데이터' },
            { value: '커뮤니티', label: '투자 토론' },
            { value: '전문가', label: '영상 콘텐츠' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-lg font-bold text-white">{value}</div>
              <div className="mt-0.5 text-xs text-zinc-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-[#f8f9fc] px-4 py-20 dark:bg-[#07070f]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              왜 Ant Cells인가요?
            </h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              투자에 필요한 모든 정보를 한 곳에서
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/5 dark:bg-white/[0.03]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl dark:bg-indigo-500/10">
                  {icon}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
                <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
