import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const expenseCategories = [
  "Education",
  "Food",
  "Health",
  "Bill",
  "Insurance",
  "Tax",
  "Transport",
  "Telephone",
];

export const incomeCategories = [
  "Salary",
  "Outsourcing",
  "Bond",
  "Stock",
  "Dividend",
];
