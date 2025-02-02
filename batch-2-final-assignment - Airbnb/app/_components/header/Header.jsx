import { Suspense } from "react";
import ThemeSwitcher from "../common/ThemeSwitcher";
import Logo from "./Logo";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

const Header = ({ lang, dictionary }) => {
    return (
        <nav className=' darkclass grid sticky z-50 top-0 grid-cols-2 md:flex justify-between items-center py-3 bg-gray-50/50 border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20'>
            <div className='flex items-center'>
                <Logo />
            </div>
            <Suspense fallback='Loading...'>
                <SearchBar dictionary={dictionary} />
            </Suspense>

            <div className='flex justify-between items-center gap-2'>
                <Menu dictionary={dictionary} lang={lang} />
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Header;
