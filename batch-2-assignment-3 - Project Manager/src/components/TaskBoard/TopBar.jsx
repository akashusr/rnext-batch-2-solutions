import SVGIcon from "../../ui/Icons";
import { useTask } from "../hooks/useTask";

const TopBar = () => {
  const { toggleModal } = useTask();
  return (
    <div className='mb-6 flex items-center justify-between'>
      <h2 className='text-2xl font-bold text-black dark:text-white'>
        Projectify
      </h2>
      <div className='flex space-x-2'>
        <button
          onClick={() => toggleModal(true)}
          className='flex items-center rounded-md bg-white shadow text-gray-700 dark:bg-gray-700 px-4 py-2 dark:text-white'>
          <SVGIcon type='plusIcon' />
          Add
        </button>
      </div>
    </div>
  );
};

export default TopBar;
