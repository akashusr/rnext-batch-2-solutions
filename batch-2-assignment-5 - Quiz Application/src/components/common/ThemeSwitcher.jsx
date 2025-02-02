import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

function ThemeSwitcher() {
    const [theme, setTheme] = useState(() => {
        // Load theme from localStorage or detect system preference
        if (localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        // Apply the theme class to the HTML element
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }

        // Persist the theme in localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className='p-2 rounded-full shadow-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300'>
            {theme === "light" ? (
                <Moon className='w-4 h-4 text-gray-800 dark:text-gray-200' />
            ) : (
                <Sun className='w-4 h-4 text-yellow-400' />
            )}
        </button>
    );
}

export default ThemeSwitcher;
