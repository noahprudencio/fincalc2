"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import {
  calculateMortgage,
  formatCurrency,
  validateMortgageInputs,
} from "@/lib/mortgage";
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
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const defaultValues = {
  loanAmount: "400000",
  annualInterestRate: "6.5",
  termYears: "30",
};

export function MortgageRepaymentsCalculator() {
  const [loanAmount, setLoanAmount] = useState(defaultValues.loanAmount);
  const [annualInterestRate, setAnnualInterestRate] = useState(
    defaultValues.annualInterestRate,
  );
  const [termYears, setTermYears] = useState(defaultValues.termYears);

  const inputs = useMemo(
    () => ({
      loanAmount: Number(loanAmount),
      annualInterestRate: Number(annualInterestRate),
      termYears: Number(termYears),
    }),
    [annualInterestRate, loanAmount, termYears],
  );

  const errors = useMemo(() => validateMortgageInputs(inputs), [inputs]);
  const result = useMemo(
    () => (Object.keys(errors).length === 0 ? calculateMortgage(inputs) : null),
    [errors, inputs],
  );

  const summaryItems = result
    ? [
        {
          label: "Monthly repayment",
          description: "Level principal and interest payment",
          value: result.monthlyPayment,
          badge: "Per month",
        },
        {
          label: "Total repaid",
          description: "All payments across the full term",
          value: result.totalRepaid,
          badge: `${inputs.termYears} years`,
        },
        {
          label: "Total interest",
          description: "Interest paid on top of the loan",
          value: result.totalInterest,
          badge: "Loan cost",
        },
      ]
    : [];

  function resetCalculator() {
    setLoanAmount(defaultValues.loanAmount);
    setAnnualInterestRate(defaultValues.annualInterestRate);
    setTermYears(defaultValues.termYears);
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 lg:px-8">
      <div className="flex flex-col gap-4">
        <Button asChild variant="ghost" size="sm" className="w-fit">
          <Link href="/">
            <ArrowLeft data-icon="inline-start" />
            Back to FinCalc
          </Link>
        </Button>
        <div className="flex max-w-3xl flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Mortgage repayments calculator
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Estimate your monthly repayment, see the total cost of borrowing,
            and follow every monthly payment through to payoff.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Loan details</CardTitle>
            <CardDescription>
              Adjust the figures to update your results instantly.
            </CardDescription>
          </CardHeader>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <CardContent>
              <FieldGroup>
                <Field data-invalid={Boolean(errors.loanAmount)}>
                  <FieldLabel htmlFor="loan-amount">Loan amount</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="loan-amount"
                      type="number"
                      inputMode="decimal"
                      min="1"
                      step="1000"
                      value={loanAmount}
                      onChange={(event) => setLoanAmount(event.target.value)}
                      aria-invalid={Boolean(errors.loanAmount)}
                    />
                    <InputGroupAddon align="inline-start">
                      <InputGroupText>$</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {errors.loanAmount ? (
                    <FieldError>{errors.loanAmount}</FieldError>
                  ) : (
                    <FieldDescription>
                      The amount you plan to borrow.
                    </FieldDescription>
                  )}
                </Field>

                <Field data-invalid={Boolean(errors.annualInterestRate)}>
                  <FieldLabel htmlFor="interest-rate">
                    Annual interest rate
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="interest-rate"
                      type="number"
                      inputMode="decimal"
                      min="0"
                      max="100"
                      step="0.01"
                      value={annualInterestRate}
                      onChange={(event) =>
                        setAnnualInterestRate(event.target.value)
                      }
                      aria-invalid={Boolean(errors.annualInterestRate)}
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>%</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {errors.annualInterestRate ? (
                    <FieldError>{errors.annualInterestRate}</FieldError>
                  ) : (
                    <FieldDescription>
                      The fixed yearly rate for your mortgage.
                    </FieldDescription>
                  )}
                </Field>

                <Field data-invalid={Boolean(errors.termYears)}>
                  <FieldLabel htmlFor="term-years">Term</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="term-years"
                      type="number"
                      inputMode="numeric"
                      min="1"
                      max="50"
                      step="1"
                      value={termYears}
                      onChange={(event) => setTermYears(event.target.value)}
                      aria-invalid={Boolean(errors.termYears)}
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>years</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {errors.termYears ? (
                    <FieldError>{errors.termYears}</FieldError>
                  ) : (
                    <FieldDescription>
                      The length of time you will repay the loan.
                    </FieldDescription>
                  )}
                </Field>
              </FieldGroup>
            </CardContent>
            <CardFooter>
              <Button type="button" variant="outline" onClick={resetCalculator}>
                Reset to example
              </Button>
            </CardFooter>
          </form>
        </Card>

        {result ? (
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Repayment summary</CardTitle>
                <CardDescription>
                  Based on {formatCurrency(inputs.loanAmount)} over{" "}
                  {inputs.termYears} years at {inputs.annualInterestRate}%.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {summaryItems.map((item) => (
                    <Card key={item.label}>
                      <CardHeader>
                        <CardTitle>{item.label}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>{formatCurrency(item.value)}</CardContent>
                      <CardFooter>
                        <Badge variant="secondary">{item.badge}</Badge>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Badge variant="outline">Updates as you type</Badge>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Amortization schedule</CardTitle>
                <CardDescription>
                  How each monthly payment is split between principal and
                  interest.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>
                    Every monthly payment from the first month to payoff.
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead className="text-right">Payment</TableHead>
                      <TableHead className="text-right">Principal</TableHead>
                      <TableHead className="text-right">Interest</TableHead>
                      <TableHead className="text-right">
                        Remaining balance
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {result.schedule.map((payment) => (
                      <TableRow key={payment.month}>
                        <TableCell className="font-medium">
                          {payment.month}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(payment.payment)}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(payment.principal)}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(payment.interest)}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(payment.balance)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell>Total</TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(result.totalRepaid)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(inputs.loanAmount)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(result.totalInterest)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(0)}
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </CardContent>
              <CardFooter>
                <Badge variant="secondary">
                  {result.schedule.length} monthly payments
                </Badge>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Results unavailable</CardTitle>
              <CardDescription>
                Enter valid loan details to see your repayment summary and
                schedule.
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
}
