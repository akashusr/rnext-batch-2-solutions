import { cn } from "../lib/utils";
const Tab = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          type="button"
          className={cn(
            "cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 capitalize",
            activeTab.toLowerCase() === tab.toLowerCase() && "active"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
