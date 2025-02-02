import { useState } from "react";
import { cn } from "../lib/utils";
import Filter from "./Filter";
import Sort from "./Sort";
import PenIcon from "./svg/PenIcon";
import TrashIcon from "./svg/TrashIcon";
import Wallet from "./svg/Wallet";
import WalletOff from "./svg/WalletOff";

const IncomeExpenseList = ({
  type,
  data,
  filterOptions,
  onDelete,
  onEditClick,
}) => {
  // 2 options for sorting the list: lowToHigh and highToLow
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState([]);
  const handleSort = (a, b) => {
    if (sort === "lowToHigh") {
      return a.amount - b.amount;
    } else if (sort === "highToLow") {
      return b.amount - a.amount;
    }
    return 1;
  };

  const handleFilter = (expense) => {
    if (filter.length === 0) return true;
    if (filter.includes(expense.category.toLowerCase())) return true;
  };

  return (
    <div className="border rounded-md relative">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-10 w-10  text-white rounded-md text-center object-center place-content-center text-base",
              type === "income" ? "bg-teal-600" : "bg-pink-600"
            )}
          >
            {type === "income" ? <Wallet /> : <WalletOff />}
          </div>

          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              {type === "income" ? "Income" : "Expense"}
            </h3>
          </div>
        </div>
        <div className="space-x-1">
          <Sort onSortChange={setSort} />
          <Filter
            options={filterOptions}
            onFilterChange={setFilter}
            selectedFilter={filter}
          />
        </div>
      </div>

      <div className="p-4 divide-y">
        {[...data]
          .sort(handleSort)
          .filter(handleFilter)
          .map((expense) => (
            <div
              key={expense.id}
              className="flex justify-between items-center py-2 relative group cursor-pointer"
            >
              <div>
                <h3 className="text-base font-medium leading-7 text-gray-600">
                  {expense.category}
                </h3>
                <p className="text-xs text-gray-600">
                  {new Date(expense.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                  BDT {expense.amount}
                </p>

                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                  <button
                    onClick={() => onEditClick(expense)}
                    className="hover:text-teal-600"
                    role="button"
                    title="Edit Button"
                  >
                    <PenIcon />
                  </button>

                  <button
                    onClick={() => onDelete(expense.id)}
                    className="hover:text-red-600"
                    role="button"
                    title="Delete"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IncomeExpenseList;
