import { useState } from "react";
import { expenseCategories, incomeCategories } from "../lib/utils";
import Tab from "./Tab";

// Create a list of options for the select element. Doing it here to make the code cleaner.
const expenseCategoriesList = expenseCategories.map((category) => (
  <option key={category}>{category}</option>
));

// Create a list of options for the select element. Doing it here to make the code cleaner.
const incomeCategoriesList = incomeCategories.map((category) => (
  <option key={category}>{category}</option>
));

const ExpenseTrackerForm = ({
  type,
  onAddExpense,
  dataToUpdate,
  onUpdateExpense,
}) => {
  const [expenseType, setExpenseType] = useState(type ?? "expense");
  const [expense, setExpense] = useState(
    dataToUpdate ?? {
      category: "",
      amount: "",
      date: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...expense,
      category: expense.category
        ? expense.category
        : expenseType === "expense"
        ? expenseCategories[0]
        : incomeCategories[0],
      type: expenseType,
    };
    if (dataToUpdate) {
      onUpdateExpense({ ...payload, id: dataToUpdate.id });
    } else {
      onAddExpense(payload);
    }
    setExpense({
      category: "",
      amount: "",
      date: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value,
    });
  };

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>

      <form onSubmit={handleSubmit}>
        <Tab
          tabs={["expense", "income"]}
          setActiveTab={setExpenseType}
          activeTab={expenseType}
        />

        <div className="mt-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              required
              id="category"
              name="category"
              autoComplete="category-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              value={expense.category}
              onChange={handleChange}
            >
              {expenseType === "expense"
                ? expenseCategoriesList
                : incomeCategoriesList}
            </select>
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="mt-2">
            <input
              required
              type="number"
              name="amount"
              id="amount"
              autoComplete="off"
              placeholder="12931"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              value={expense.amount}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input
              required
              type="date"
              name="date"
              id="date"
              autoComplete="off"
              placeholder="12931"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              value={expense.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ExpenseTrackerForm;
