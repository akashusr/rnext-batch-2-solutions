import React from "react";
import SectionTitle from "../common/SectionTitle";

const CompareSectionHeading = ({ children }) => {
    return (
        <div className='flex justify-between items-center mb-8'>
            <SectionTitle title='Compare Movies' />
            {children}
        </div>
    );
};

export default CompareSectionHeading;
