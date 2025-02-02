import logoImage from "@/public/assets/logo.svg";
import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";
import Profile from "./Profile";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

const Header = ({ lang }) => {
    return (
        <header className='flex justify-between items-center mb-8'>
            <div className='flex items-center space-x-8'>
                <Link href={`/${lang}`}>
                    <Logo />
                </Link>
                <Navbar lang={lang} />
            </div>
            <div className='flex items-center space-x-4'>
                <Search lang={lang} />
                <Profile />
                <LanguageSwitcher />
            </div>
        </header>
    );
};

export default Header;
