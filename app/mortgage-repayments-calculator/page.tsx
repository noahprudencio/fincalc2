import type { Metadata } from "next";

import { MortgageRepaymentsCalculator } from "./_components/mortgage-repayments-calculator";

export const metadata: Metadata = {
  title: "Mortgage Repayments Calculator | FinCalc",
  description:
    "Estimate monthly mortgage repayments, total interest, and a full monthly amortization schedule.",
};

export default function MortgageRepaymentsCalculatorPage() {
  return (
    <main className="flex flex-1 flex-col bg-background">
      <MortgageRepaymentsCalculator />
    </main>
  );
}
