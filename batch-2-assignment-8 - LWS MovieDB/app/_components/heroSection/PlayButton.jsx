"use client";
import React from "react";

const PlayButton = ({ handlePlay }) => {
    return (
        <button
            onClick={handlePlay}
            className='bg-white text-black px-8 py-2 rounded-lg font-bold hover:bg-opacity-80'>
            ▶ Play
        </button>
    );
};

export default PlayButton;
