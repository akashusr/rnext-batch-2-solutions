"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const PasswordFiled = ({
    placeholder,
    name,
    id,
    required,
    className,
    error,
    register,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='relative flex flex-col justify-start items-start'>
            <input
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                {...register}
                id={id ?? name}
                className={cn(
                    `w-full border dark:bg-transparent border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`,
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
                {showPassword ? (
                    <VscEye size={24} />
                ) : (
                    <VscEyeClosed size={24} />
                )}
            </button>
            {error && (
                <p className='text-red-500 text-sm p-1'>{error?.message}</p>
            )}
        </div>
    );
};

export default PasswordFiled;
