import { useState } from "react";
import { expenseCategories, incomeCategories } from "../lib/utils";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import IncomeExpenseList from "./IncomeExpenseList";
import TotalBalance from "./TotalBalance";

const ExpenseBoard = () => {
  const [expenses, setExpenses] = useState([]);
  const [dataToUpdate, setDataToUpdate] = useState(null);
  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length++ }]);
  };

  const deleteExpense = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirm) return;
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    setDataToUpdate(null);
  };

  const onUpdateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === updatedExpense.id) {
        return updatedExpense;
      }
      return expense;
    });

    setExpenses(updatedExpenses);
    setDataToUpdate(null);
  };

  // calculate the total income, total expense, and total balance
  const totalIncome = expenses.reduce((acc, curr) => {
    return curr.type === "income" ? acc + Number(curr.amount) : acc;
  }, 0);

  const totalExpense = expenses.reduce((acc, curr) => {
    return curr.type === "expense" ? acc + Number(curr.amount) : acc;
  }, 0);

  const totalBalance = totalIncome - totalExpense;

  // separate the incomes and expenses
  const incomesList = expenses.filter((expense) => expense.type === "income");
  const expensesList = expenses.filter((expense) => expense.type === "expense");

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExpenseTrackerForm
          key={dataToUpdate?.id}
          type={dataToUpdate?.type}
          onAddExpense={addExpense}
          dataToUpdate={dataToUpdate}
          onUpdateExpense={onUpdateExpense}
        />
        <div className="lg:col-span-2">
          <TotalBalance
            income={totalIncome}
            expense={totalExpense}
            balance={totalBalance}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeExpenseList
              filterOptions={incomeCategories}
              type="income"
              data={incomesList}
              onDelete={deleteExpense}
              onEditClick={setDataToUpdate}
            />
            <IncomeExpenseList
              filterOptions={expenseCategories}
              type="expense"
              data={expensesList}
              onDelete={deleteExpense}
              onEditClick={setDataToUpdate}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpenseBoard;
