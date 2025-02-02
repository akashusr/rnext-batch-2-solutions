"use client";
import Link from "next/link";
import React from "react";

const AuthLinks = ({ loggedInUser }) => {
    return (
        <>
            {loggedInUser ? (
                <Link
                    href='/watch-later'
                    className='text-white hover:text-gray-300'>
                    Watch Later
                </Link>
            ) : (
                <Link
                    href='/login'
                    className=' bg-red-800/70 px-2 py-2 rounded text-white hover:text-gray-300'>
                    Login | Registration
                </Link>
            )}
        </>
    );
};

export default AuthLinks;
