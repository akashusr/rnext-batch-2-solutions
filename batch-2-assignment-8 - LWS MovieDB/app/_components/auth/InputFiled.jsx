import cn from "@/utils/cn";
import React from "react";

const InputFiled = ({
    placeholder,
    type = "text",
    name,
    id,
    required,
    className,
    error,
    onChange,
    onBlur,
}) => {
    return (
        <div className='flex flex-col justify-start items-start'>
            <input
                type={type}
                placeholder={placeholder}
                id={id ?? name}
                onChange={onChange}
                onBlur={onBlur}
                className={cn(
                    `w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red`,
                    className,
                    error && "border border-red-500"
                )}
                required={required}
                name={name}
            />
            {error && <p className='text-red-500 text-sm p-1'>{error}</p>}
        </div>
    );
};

export default InputFiled;
