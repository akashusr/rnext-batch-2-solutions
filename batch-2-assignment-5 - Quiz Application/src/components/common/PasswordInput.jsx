import { useState } from "react";
import cn from "../../utils/cn";
import { Eye } from "react-feather";
import { EyeOff } from "react-feather";

const PasswordInput = ({
    parentClass,
    inputClass,
    register,
    errors,
    name = "password",
    id = "password",
    validations,
}) => {
    const [show, setShow] = useState(false);
    return (
        <div className={cn(`relative`, parentClass)}>
            <input
                {...register(name, validations)}
                type={show ? "text" : "password"}
                name={name}
                id={id}
                className={cn(
                    `dark:bg-dark-secondary dark:text-dark-textPrimary w-full px-4 py-3 rounded-lg border border-gray-300`,
                    inputClass,
                    errors?.[name] && "border-red-500 focus:outline-red-500"
                )}
                placeholder='Password'
            />
            <span
                title={show ? "Hide password" : "Show password"}
                onClick={() => setShow(!show)}
                className='absolute right-4 top-4 cursor-pointer'>
                {!show ? (
                    <EyeOff className='size-4' />
                ) : (
                    <Eye className='size-4' />
                )}
            </span>
        </div>
    );
};

export default PasswordInput;
