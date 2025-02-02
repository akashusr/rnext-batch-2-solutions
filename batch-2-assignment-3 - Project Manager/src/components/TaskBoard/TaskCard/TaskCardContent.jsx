import SVGIcon from "../../../ui/Icons";
import { formatDate } from "../../../utils/utils";
import { useTask } from "../../hooks/useTask";

const TaskCardContent = ({ task, textColor }) => {
  const { onEditTask, onDeleteTask } = useTask();
  return (
    <div className='mb-4 rounded-lg bg-gray-800 p-4'>
      <div className='flex justify-between items-start'>
        <h4 className={`mb-2 flex-1 font-semibold ${textColor}`}>
          {task.title}
        </h4>

        <div onClick={() => onDeleteTask(task)} className='flex gap-2 mt-1'>
          <button className='bg-transparent border-0'>
            <SVGIcon type='deleteIcon' />
          </button>
          <button
            onClick={(e) => onEditTask(e, task)}
            className='bg-transparent border-0'>
            <SVGIcon type='editIcon' />
          </button>
        </div>
      </div>
      <p className='mb-2 text-sm text-zinc-200'>{task.description}</p>

      <p className='mt-6 text-xs text-zinc-400'>{formatDate(task.date)}</p>
    </div>
  );
};

export default TaskCardContent;
