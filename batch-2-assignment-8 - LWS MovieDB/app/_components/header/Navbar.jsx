"use client";

import { menuLinks } from "@/app/_lib/menuLinks";
import Link from "next/link";
const Navbar = ({ authUser }) => {
    const navItems = menuLinks;
    const navlink = navItems.map((item) => {
        return (
            <Link
                key={item?.id}
                href={item?.href}
                className='text-white hover:text-gray-300'>
                {item?.title}
            </Link>
        );
    });

    return (
        <div className='ml-8 space-x-4'>
            {navlink}
            {authUser && (
                <Link
                    href='/watch-later'
                    className=' text-white hover:text-gray-300'>
                    Watch Later
                </Link>
            )}
            {!authUser && (
                <Link
                    href='/login'
                    className=' bg-red-800/70 px-2 py-2 rounded text-white hover:text-gray-300'>
                    Login | Registration
                </Link>
            )}
        </div>
    );
};

export default Navbar;
