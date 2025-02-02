"use client";
import { useEffect, useState } from "react";
import { addToWatchList } from "@/app/_lib/watchlistActions";
import { RequestToLoginPopup } from "./RequestToLoginPopup";
import cn from "@/utils/cn";
import Cookies from "js-cookie";

const AddToWatchListButton = ({ movieDetails, addedToList }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [added, setAdded] = useState(false);

    // Client-side effect to set the user
    useEffect(() => {
        const session = Cookies.get("session");
        if (session) {
            const parsedSession = JSON.parse(session);
            setUser(parsedSession?.user || null);
        }
    }, []);

    // Update `added` state when `user` or `addedToList` changes
    useEffect(() => {
        if (user && user.id === addedToList?.user) {
            setAdded(true);
        }
    }, [user, addedToList]);

    const dataForList = {
        title: movieDetails?.title,
        release_date: movieDetails?.release_date,
        poster_path: movieDetails?.poster_path,
        movieId: movieDetails?.id,
        user: user?.id,
    };

    const handleClick = async () => {
        if (!user) {
            setShowPopup(true);
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            await addToWatchList(dataForList);
            setAdded(true);
        } catch (err) {
            console.error("Error adding to watchlist:", err);
            setError("Failed to add movie to watchlist. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='text-center'>
            {added ? (
                <button className='flex cursor-default items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-checks'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M7 12l5 5l10 -10' />
                        <path d='M2 12l5 5m5 -5l5 -5' />
                    </svg>
                    Added to Watch List
                </button>
            ) : (
                <button
                    onClick={handleClick}
                    disabled={isLoading}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg",
                        {
                            "bg-gray-500 cursor-not-allowed": isLoading,
                            "bg-black/40": !isLoading,
                        }
                    )}
                    aria-label='Add to Watch List'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-file-plus'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M14 3v4a1 1 0 0 0 1 1h4' />
                        <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
                        <path d='M12 11l0 6' />
                        <path d='M9 14l6 0' />
                    </svg>
                    {isLoading ? "Adding..." : "Add to Watch List"}
                </button>
            )}

            {error && <p className='text-red-500 mt-2'>{error}</p>}
            {showPopup && (
                <RequestToLoginPopup
                    onCloseClick={() => setShowPopup(false)}
                    message='You need to log in before adding this movie to your Watch List.'
                />
            )}
        </div>
    );
};

export default AddToWatchListButton;
