import Logo from "./Logo";
import MenuList from "./MenuList";
import NewProjectButton from "./NewProjectButton";

const Sidebar = () => {
  return (
    <aside className='hidden w-64 bg-white shadow-lg text-black dark:text-white dark:bg-gray-800 p-6 lg:block'>
      <Logo />
      <NewProjectButton />
      <MenuList />
    </aside>
  );
};

export default Sidebar;
