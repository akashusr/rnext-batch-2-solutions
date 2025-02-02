import React from "react";
import EmptyBucket from "../svg/EmptyBucket";
import Link from "next/link";

const EmptyStatus = () => {
    return (
        <div className='container mx-auto pt-24 pb-8 flex justify-center items-center'>
            <div id='emptyState' className=' text-center py-16'>
                <EmptyBucket />
                <h2 className='text-2xl font-bold text-light mb-2'>
                    Your Watch Later list is empty
                </h2>
                <p className='text-light/70 mb-6'>
                    Explore movies and add them to your list to watch later
                </p>
                <Link
                    href='/'
                    className='bg-primary text-dark px-6 py-2 rounded-full hover:bg-primary/80 transition'>
                    Explore Movies
                </Link>
            </div>
        </div>
    );
};

export default EmptyStatus;
