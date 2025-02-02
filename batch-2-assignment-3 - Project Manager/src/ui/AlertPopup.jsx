import { useTask } from "../components/hooks/useTask";

const DeleteAlertPopup = () => {
  const { onConfirmDeleteTask, setConfirmDelete, confirmDelete } = useTask();
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='fade-in w-[500px] border border-slate-300 rounded-md bg-white shadow-lg text-black text-center flex flex-col p-5'>
        <h4 className='font-medium text-2xl'>
          Are you sure you want to delete the task:{" "}
          <span className='text-red-600 font-semibold'>
            &quot;{confirmDelete.title}
            &quot;
          </span>
          ?
        </h4>
        <div className='flex items-center gap-x-3'>
          <button
            onClick={onConfirmDeleteTask}
            className='mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full'>
            Yes
          </button>
          <button
            onClick={() => setConfirmDelete(null)}
            className='mt-6 rounded-md bg-red-500 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 w-full'>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlertPopup;
