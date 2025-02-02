"use client";

import Image from "next/image";
import { useState } from "react";
import avatarImage from "@/public/assets/avatar.svg";
import LogOutIcon from "../svg/LogOutIcon";
import { logout } from "@/app/_lib/AuthActions";
import { useRouter } from "next/navigation";

export default function ProfileDropdown({ userName }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    };

    return (
        <div className='relative inline-block text-left'>
            <div className='flex gap-2 justify-end items-center'>
                <h4>{userName}</h4>
                <button
                    onClick={toggleDropdown}
                    className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                    <Image
                        src={avatarImage}
                        alt='User Avatar'
                        className='w-full h-full rounded-full'
                    />
                </button>
            </div>

            {isOpen && (
                <div className='absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-white/70 text-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                        <button
                            onClick={handleLogout}
                            className=' flex gap-3 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-white/50 hover:text-gray-900'>
                            <LogOutIcon />
                            Log Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
