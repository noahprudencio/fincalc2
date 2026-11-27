import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Test | FinCalc",
  description: "An example card for the FinCalc test page.",
};

export default function TestPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <article className="relative w-full max-w-md overflow-hidden rounded-3xl border border-pink-200 bg-pink-50 p-8 shadow-sm dark:border-pink-800 dark:bg-pink-950">
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
              <path d="M4 19V5" />
              <path d="M4 19h16" />
              <path d="M7 16c2.5 0 3-7 5.5-7s3 4 5.5 4" />
            </svg>
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Example
          </span>
        </div>

        <h1 className="mt-6 text-2xl font-bold">Example card</h1>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          A simple card layout you can use as a starting point for new FinCalc
          pages.
        </p>

        <div className="mt-6 rounded-2xl bg-pink-100 p-5 dark:bg-pink-900/60">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Example value
          </p>
          <p className="mt-1 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
            $12,500
          </p>
        </div>

        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          Back home
        </Link>
      </article>
    </main>
  );
}
