import Link from "next/link";
import { ArrowRight, Calculator, House, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Mortgage Repayments Calculator",
    description:
      "Estimate monthly payments, understand total interest, and see how loan terms affect your mortgage.",
    href: "/mortgage-calculator",
    icon: House,
    points: [
      "Monthly repayment estimates",
      "Principal and interest breakdown",
      "Compare loan terms quickly",
    ],
  },
  {
    title: "Compound Interest Calculator",
    description:
      "Project how your savings or investments can grow over time with compounding returns.",
    href: "/compound-interest-calculator",
    icon: TrendingUp,
    points: [
      "Growth projections over time",
      "Contribution and rate scenarios",
      "Clear long-term outcome view",
    ],
  },
] as const;

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background">
      <section className="border-b bg-muted/30">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-20 sm:py-24 lg:px-8">
          <Badge variant="secondary" className="w-fit">
            Financial planning made simple
          </Badge>
          <div className="flex max-w-3xl flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Make confident money decisions with FinCalc
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              Explore practical calculators built to help you plan major
              financial moves—from buying a home to growing long-term savings.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#features">
                Explore features
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/mortgage-calculator">
                <Calculator data-icon="inline-start" />
                Try mortgage calculator
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8"
      >
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Calculators built for clarity
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Focused tools that turn complex financial formulas into clear,
            actionable numbers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href={feature.href}>
                      Open calculator
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
