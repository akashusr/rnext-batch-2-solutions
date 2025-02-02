import { useTask } from "../hooks/useTask";

const Search = () => {
  const { searchQuery, onSearch } = useTask();

  return (
    <div className='mx-4 flex-1'>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        placeholder='Search here'
        className='w-full max-w-xl rounded-full bg-white shadow  dark:bg-gray-700 px-4 py-2 dark:text-white dark:border-0 focus::outline-0'
      />
    </div>
  );
};

export default Search;
