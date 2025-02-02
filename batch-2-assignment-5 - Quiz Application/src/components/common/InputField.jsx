import React from "react";
import cn from "../../utils/cn";

const InputField = ({
    children,
    htmlFor,
    label,
    error,
    className,
    labelClass,
}) => {
    //dynamicaly get id from children
    function getChildrenId(children) {
        const child = React.Children.only(children);
        if (child?.props?.id) {
            return child.props.id;
        }
    }

    const id = htmlFor || getChildrenId(children);
    return (
        <div className={cn(`${className} mb-4`)}>
            {label && (
                <label htmlFor={id} className={cn(`block mb-2`, labelClass)}>
                    {label}
                </label>
            )}
            {children}
            {error && (
                <p role='alert' className='text-red-500 text-sm'>
                    {error?.message}
                </p>
            )}
        </div>
    );
};

export default InputField;
