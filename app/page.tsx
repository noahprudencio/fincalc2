import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinCalc | Clear financial calculations",
  description:
    "Explore simple, focused tools for mortgage repayments and compound interest.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/85">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-6 sm:px-8"
        >
          <a href="#top" className="flex items-center gap-3 rounded-lg">
            <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm shadow-emerald-600/30">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="size-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19V9" />
                <path d="M10 19V5" />
                <path d="M16 19v-7" />
                <path d="M22 19H2" />
              </svg>
            </span>
            <span className="text-lg font-bold tracking-tight">
              Fin<span className="text-emerald-600 dark:text-emerald-400">Calc</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
            <a className="transition-colors hover:text-slate-950 dark:hover:text-white" href="#calculators">
              Calculators
            </a>
            <a className="transition-colors hover:text-slate-950 dark:hover:text-white" href="#why-fincalc">
              Why FinCalc
            </a>
            <a className="transition-colors hover:text-slate-950 dark:hover:text-white" href="#how-it-works">
              How it works
            </a>
          </div>

          <a
            href="#calculators"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
          >
            Explore tools
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <main id="top" className="flex-1">
        <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-500/10" />
            <div className="absolute top-48 -right-40 size-[28rem] rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                <span className="size-2 rounded-full bg-emerald-500" />
                Two focused calculators, coming soon
              </span>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Financial decisions,
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-300">
                  made clearer.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 text-pretty sm:text-xl dark:text-slate-300">
                FinCalc brings the numbers that matter into focus. Explore what a
                home loan will cost, or see how your savings can grow over time,
                with tools designed to be simple and easy to understand.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#calculators"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-700 sm:w-auto"
                >
                  See the calculators
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  How it works
                </a>
              </div>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Focused calculators</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Clear</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Breakdowns you can follow</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Simple</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">No confusing setup</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="calculators"
          aria-labelledby="calculators-heading"
          className="scroll-mt-24 border-y border-slate-200 bg-white px-6 py-24 dark:border-slate-800 dark:bg-slate-900/40 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                The calculators
              </p>
              <h2
                id="calculators-heading"
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Two tools for two common money questions.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Each calculator is being built to give you a straightforward
                answer, without the jargon.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400"
                />
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 11.5 12 4l9 7.5" />
                      <path d="M5 10.5V20h14v-9.5" />
                      <path d="M9 20v-5h6v5" />
                    </svg>
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    Coming soon
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold">Mortgage repayment calculator</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Understand what borrowing for a home really looks like before
                  you commit, and see how small changes affect the bigger picture.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Estimate monthly repayments
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Explore the effect of rate and term changes
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    See the total cost of the loan over time
                  </li>
                </ul>
              </article>

              <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 to-sky-400"
                />
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19V5" />
                      <path d="M4 19h16" />
                      <path d="M7 16c2.5 0 3-7 5.5-7s3 4 5.5 4" />
                    </svg>
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    Coming soon
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold">Compound interest calculator</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Find out what patience and regular contributions could do for
                  your savings, with a clear view of how growth builds year by year.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500" />
                    Project the future value of savings
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500" />
                    Factor in regular deposits and time
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500" />
                    See how interest compounds over the long term
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          id="why-fincalc"
          aria-labelledby="why-heading"
          className="scroll-mt-24 px-6 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  Why FinCalc
                </p>
                <h2 id="why-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Built to answer questions, not create more.
                </h2>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  Financial tools should make you feel more certain. FinCalc is
                  being built around a simple idea: give people the numbers they
                  need in a form they can actually use.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-bold">Time-saving</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Get from question to estimate without wading through spreadsheets.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6h16" />
                      <path d="M4 12h10" />
                      <path d="M4 18h7" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-bold">Easy to read</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Clear inputs and plain-English results keep the focus on the answer.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3 5 6v6c0 4.2 2.9 7.5 7 9 4.1-1.5 7-4.8 7-9V6l-7-3Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-bold">Confidence-building</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    See the details behind each result so you know where the numbers come from.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="3" />
                      <path d="M9 9h6" />
                      <path d="M9 13h6" />
                      <path d="M9 17h3" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-bold">One place for both</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Borrowing and saving questions both have a home on FinCalc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          aria-labelledby="how-heading"
          className="scroll-mt-24 border-y border-slate-200 bg-white px-6 py-24 dark:border-slate-800 dark:bg-slate-900/40 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                How it works
              </p>
              <h2 id="how-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Three steps to a clearer answer.
              </h2>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900">
                <span className="flex size-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  1
                </span>
                <h3 className="mt-5 text-lg font-bold">Choose your question</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  Start with a home loan or a savings goal.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900">
                <span className="flex size-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  2
                </span>
                <h3 className="mt-5 text-lg font-bold">Add your numbers</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  Enter the details that matter to your situation.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900">
                <span className="flex size-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  3
                </span>
                <h3 className="mt-5 text-lg font-bold">Review the breakdown</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  Walk away with an estimate you can understand.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8" aria-labelledby="get-ready-heading">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-4xl bg-slate-950 px-8 py-16 text-center shadow-2xl shadow-slate-950/20 sm:px-16 dark:bg-emerald-950/60">
              <div aria-hidden="true" className="absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="relative">
                <h2 id="get-ready-heading" className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
                  Ready to make your money make sense?
                </h2>
                <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-300">
                  The mortgage repayment and compound interest calculators are
                  on the way. Take a look at what&apos;s coming.
                </p>
                <a
                  href="#calculators"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
                >
                  Explore the calculators
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-10 dark:border-slate-800 dark:bg-slate-950 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-bold tracking-tight">
            <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19V9" />
                <path d="M10 19V5" />
                <path d="M16 19v-7" />
                <path d="M22 19H2" />
              </svg>
            </span>
            FinCalc
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Simple tools for more confident financial decisions.
          </p>
        </div>
      </footer>
    </div>
  );
}
