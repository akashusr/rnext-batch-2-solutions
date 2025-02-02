import { cn } from "@/utils/cn";

const InputFiled = ({
    placeholder,
    type = "text",
    name,
    id,
    required = false,
    className,
    error,
    register,
}) => {
    return (
        <div className='flex flex-col justify-start items-start'>
            <input
                {...register}
                type={type}
                placeholder={placeholder}
                id={id ?? name}
                className={cn(
                    `w-full dark:bg-transparent border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`,
                    className,
                    error && "border border-red-500"
                )}
                required={required}
                name={name}
            />
            {error && (
                <p className='text-red-500 text-sm p-1'>{error?.message}</p>
            )}
        </div>
    );
};

export default InputFiled;
