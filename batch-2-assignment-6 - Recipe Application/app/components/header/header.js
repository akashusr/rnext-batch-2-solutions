import Searchbar from "./searchbar";
import Logo from "../common/logo";
import Navbar from "./navbar";

const Header = () => {
    return (
        <header className='container w-screen mx-auto px-4 py-4 shadow-lg fixed top-0 left-0 right-0 m-auto  bg-white z-50'>
            <nav className='flex justify-between items-center'>
                <Logo />
                <Navbar />
                <Searchbar />
            </nav>
        </header>
    );
};

export default Header;
