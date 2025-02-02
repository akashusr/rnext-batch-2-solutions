import TaskCardContent from "./TaskCardContent";
import TaskCardHeader from "./TaskCardHeader";

const TaskCard = ({ title, taskData, bgColor, textColor }) => {
  return (
    <div className='mb-4 w-full px-2 sm:w-1/2 md:w-1/4'>
      <div className={`rounded-lg ${bgColor} p-4`}>
        <TaskCardHeader title={title} count={taskData?.length} />
        <div>
          {taskData?.length > 0 ? (
            taskData?.map((task) => (
              <TaskCardContent
                key={task.id}
                task={task}
                textColor={textColor}
              />
            ))
          ) : (
            <p className='text-center text-white font-medium border border-gray-500 p-3 rounded'>
              Task List is empty!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
