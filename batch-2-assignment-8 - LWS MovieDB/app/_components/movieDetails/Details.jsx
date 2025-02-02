import { getFormattedDate } from "@/utils";
import React from "react";

const Details = ({ details }) => {
    return (
        <>
            <h1 className='text-4xl font-bold mb-4'>{details?.title}</h1>

            <div className='flex items-center mb-4 space-x-4'>
                <span className='text-green-500'>
                    {" "}
                    {getFormattedDate(details?.release_date)}{" "}
                </span>
                <span>| </span>
                <span>{details?.runtime} min</span>
            </div>

            <p className='text-lg mb-6'>{details?.overview}</p>

            <div className='mb-6'>
                <h3 className='text-gray-400 mb-2'>Genres</h3>
                <div className='flex flex-wrap gap-2'>
                    {details?.genres?.map((genre) => (
                        <span
                            key={genre?.id}
                            className='px-3 py-1 bg-gray-800 rounded-full text-sm'>
                            {genre?.name}{" "}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Details;
