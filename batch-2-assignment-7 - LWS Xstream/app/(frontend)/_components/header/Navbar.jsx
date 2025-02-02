import Link from "next/link";
import { getDictionary } from "../../[lang]/_dictionaries/dictionaries";

const Navbar = async ({ lang }) => {
    const dictionary = await getDictionary(lang || "en");

    return (
        <nav className=' hidden md:flex space-x-6'>
            <button className=' uppercase  font-semibold text-gray-400 hover:text-white [&:nth-child(1)]:text-color-purple [&:nth-child(1)]:font-semibold'>
                {dictionary.topStreaming}
            </button>
            <button className=' uppercase  font-semibold text-gray-400 hover:text-white [&:nth-child(1)]:text-color-purple [&:nth-child(1)]:font-semibold'>
                {dictionary.games}
            </button>
            <button className=' uppercase  font-semibold text-gray-400 hover:text-white [&:nth-child(1)]:text-color-purple [&:nth-child(1)]:font-semibold'>
                {dictionary.teams}
            </button>
        </nav>
    );
};

export default Navbar;
