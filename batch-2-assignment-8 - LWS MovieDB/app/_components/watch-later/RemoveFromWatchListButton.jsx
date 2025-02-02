"use client";
import { deleteFromWatchlist } from "@/app/_lib/watchlistActions";

const RemoveFromWatchListButton = ({ movieId }) => {
    return (
        <button
            onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                await deleteFromWatchlist(movieId);
            }}
            className='z-50 bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition'>
            Remove
        </button>
    );
};

export default RemoveFromWatchListButton;
