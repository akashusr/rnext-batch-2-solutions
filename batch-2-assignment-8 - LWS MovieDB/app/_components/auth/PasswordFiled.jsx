"use client";
import cn from "@/utils/cn";
import React, { useState } from "react";
import eyeOpen from "@/public/assets/icons/eye-open.svg";
import eyeClose from "@/public/assets/icons/eye-closed.svg";
import Image from "next/image";

const PasswordFiled = ({
    placeholder,
    name,
    id,
    required,
    className,
    onChange,
    error,
    onBlur,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='relative flex flex-col justify-start items-start'>
            <input
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                id={id ?? name}
                className={cn(
                    `w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red`,
                    className,
                    error && "border border-red-500"
                )}
                required={required}
                name={name}
            />
            <button
                className='absolute right-3 top-0 p-3'
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowPassword(!showPassword);
                }}>
                <Image
                    className='size-5'
                    src={showPassword ? eyeOpen : eyeClose}
                    alt='eyeButton'
                />
            </button>
            {error && <p className='text-red-500 text-sm p-1'>{error}</p>}
        </div>
    );
};

export default PasswordFiled;
