import SVGIcon from "../../ui/Icons";
import DarkModeSwitcher from "./DarkModeSwitcher";
import IconButton from "./IconButton";
import Search from "./Search";

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-white shadow-lg text-black dark:bg-gray-800 p-4'>
      <button className='lg:hidden'>
        <SVGIcon type='menuIcon' />
      </button>

      {/* Search */}
      <Search />

      {/* Right-side Icons */}
      <div className='flex items-center '>
        <DarkModeSwitcher />
        <IconButton type='notificationIcon' />
        <IconButton type='envelopIcon' />
      </div>
    </header>
  );
};

export default Header;
