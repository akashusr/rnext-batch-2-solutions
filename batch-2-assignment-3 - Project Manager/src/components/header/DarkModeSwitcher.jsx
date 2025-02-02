"use client";
import SVGIcon from "../../ui/Icons";
import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <span className='cursor-pointer' onClick={toggleDarkMode}>
        {darkMode ? (
          <SVGIcon
            type='sun'
            className='w-6 h-6  duration-200 hover:text-white mr-4'
          />
        ) : (
          <SVGIcon
            type='moon'
            className='w-6 h-6 duration-200 hover:text-slate-600 mr-4'
          />
        )}
      </span>
    </div>
  );
};

export default DarkModeSwitcher;
