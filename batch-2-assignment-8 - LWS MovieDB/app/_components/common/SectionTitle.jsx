import cn from "@/utils/cn";
import React from "react";

const SectionTitle = ({ title, className }) => {
    return (
        <h2 className={cn(`text-2xl font-bold mb-4`, className)}>{title}</h2>
    );
};

export default SectionTitle;
