"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

function ThemeSwitcher() {
    const [theme, setTheme] = useState(() => {
        if (
            typeof window !== "undefined" &&
            typeof localStorage !== "undefined"
        ) {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) {
                return storedTheme;
            }
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            return prefersDark ? "dark" : "light";
        }
        return "light"; // Default theme
    });

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            typeof localStorage !== "undefined"
        ) {
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("light");
            } else {
                document.documentElement.classList.add("light");
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem("theme", theme);
        }
    }, [theme]); // Runs when theme changes

    const toggleTheme = () => {
        // Directly toggle theme without waiting for async state update
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className='p-2 rounded-full shadow-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300'>
            {theme === "light" ? (
                <FaMoon className='w-4 h-4 text-gray-800 dark:text-gray-200' />
            ) : (
                <IoSunny className='w-4 h-4 text-yellow-400' />
            )}
        </button>
    );
}

export default ThemeSwitcher;
