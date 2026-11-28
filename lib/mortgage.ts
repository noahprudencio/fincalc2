export type MortgageInputs = {
  loanAmount: number;
  annualInterestRate: number;
  termYears: number;
};

export type MortgagePayment = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
};

export type MortgageResult = {
  monthlyPayment: number;
  totalRepaid: number;
  totalInterest: number;
  schedule: MortgagePayment[];
};

export type MortgageFieldErrors = Partial<Record<keyof MortgageInputs, string>>;

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

export function validateMortgageInputs(
  inputs: MortgageInputs,
): MortgageFieldErrors {
  const errors: MortgageFieldErrors = {};

  if (!Number.isFinite(inputs.loanAmount) || inputs.loanAmount <= 0) {
    errors.loanAmount = "Enter a loan amount greater than $0.";
  }

  if (
    !Number.isFinite(inputs.annualInterestRate) ||
    inputs.annualInterestRate < 0 ||
    inputs.annualInterestRate > 100
  ) {
    errors.annualInterestRate = "Enter an interest rate between 0% and 100%.";
  }

  if (
    !Number.isInteger(inputs.termYears) ||
    inputs.termYears < 1 ||
    inputs.termYears > 50
  ) {
    errors.termYears = "Enter a whole number of years between 1 and 50.";
  }

  return errors;
}

export function calculateMortgage(inputs: MortgageInputs): MortgageResult {
  const monthlyRate = inputs.annualInterestRate / 100 / 12;
  const numberOfPayments = inputs.termYears * 12;
  const monthlyPayment =
    monthlyRate === 0
      ? inputs.loanAmount / numberOfPayments
      : (inputs.loanAmount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

  let balance = inputs.loanAmount;
  let totalRepaid = 0;
  let totalInterest = 0;
  const schedule: MortgagePayment[] = [];

  for (let month = 1; month <= numberOfPayments; month += 1) {
    const interest = balance * monthlyRate;
    const principal = Math.min(monthlyPayment - interest, balance);
    const payment = interest + principal;

    balance = Math.max(0, balance - principal);
    totalRepaid += payment;
    totalInterest += interest;

    schedule.push({
      month,
      payment,
      principal,
      interest,
      balance,
    });
  }

  return {
    monthlyPayment,
    totalRepaid,
    totalInterest,
    schedule,
  };
}
