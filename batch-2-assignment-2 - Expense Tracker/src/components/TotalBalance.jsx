import { cn } from "../lib/utils";
const TotalBalance = ({ income, expense, balance }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <BalanceCard title="Balance" amount={balance} />
          <BalanceCard title="Total Income" amount={income} />
          <BalanceCard title="Total Expense" amount={expense} />
        </dl>
      </div>
    </div>
  );
};

export default TotalBalance;

const BalanceCard = ({ title, amount }) => {
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
      <dt className="text-base leading-7 text-gray-600">{title}</dt>
      <dd
        className={cn(
          "order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl",
          title === "Balance" && amount < 0 && "text-red-500"
        )}
      >
        BDT {amount}
      </dd>
    </div>
  );
};
