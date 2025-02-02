import SVGIcon from "../../../ui/Icons";
import { useTask } from "../../hooks/useTask";

const TaskCardHeader = ({ title, count }) => {
  const { onToggleSort, sortOrder } = useTask();

  // Determine if current sortOrder is descending or ascending for the category
  const isDesc = sortOrder[title] === "desc";

  return (
    <div className='mb-2 flex items-center justify-between'>
      <h3 className='text-lg font-semibold capitalize '>
        {title} ({count})
      </h3>
      <button
        disabled={count === 0}
        onClick={() => onToggleSort(title)}
        className='border-0 bg-transparent'>
        <SVGIcon type={isDesc ? "sortIconDown" : "sortIconUp"} />
      </button>
    </div>
  );
};

export default TaskCardHeader;
