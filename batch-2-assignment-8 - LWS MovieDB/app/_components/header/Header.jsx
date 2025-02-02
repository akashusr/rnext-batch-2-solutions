"use client";
import Logo from "../common/Logo";
import Navbar from "./Navbar";
import { Suspense, useEffect, useState } from "react";
import Cookies from "js-cookie";
import SearchBar from "./SearchBar";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
    const [auth, setAuth] = useState({});
    useEffect(() => {
        const sessionCookes = Cookies.get("session");
        if (sessionCookes) {
            const parsedData = JSON.parse(sessionCookes);
            setAuth(parsedData);
        }
    }, [setAuth]);

    return (
        <nav className='fixed w-full z-50 bg-gradient-to-b from-black to-transparent'>
            <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Logo />
                    <Navbar authUser={auth?.user} />
                </div>
                <div className='flex gap-2 justify-between'>
                    <Suspense fallback='loading...'>
                        <SearchBar />
                    </Suspense>
                    {auth?.user && (
                        <ProfileDropdown userName={auth?.user?.name} />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
