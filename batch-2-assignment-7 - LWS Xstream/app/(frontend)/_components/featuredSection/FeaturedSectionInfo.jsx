import React from "react";

const FeaturedSectionInfo = ({ dictionary }) => {
    return (
        <div className='lg:col-span-2'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 leading-tight uppercase'>
                {dictionary?.play}, {dictionary?.compete},
                <br />
                {dictionary?.followPopuler}
                <br />
                {dictionary?.streamers}
            </h1>
            <p className='text-gray-400 mb-8'>{dictionary?.heroTagLine}</p>
        </div>
    );
};

export default FeaturedSectionInfo;
