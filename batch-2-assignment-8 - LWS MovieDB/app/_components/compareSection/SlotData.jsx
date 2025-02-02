"use client";
import { getMovieDetailsById } from "@/app/_lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import CompareDataSkeliton from "../loadingSkelitons/CompareDataSkeliton";
import fallbackMovieImage from "@/public/fallbackImage.png";

const SlotData = ({
    data,
    slotId,
    slots,
    onRemove,
    setSlots,
    setShowModal,
}) => {
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(false);

    // retrive movie details data
    useEffect(() => {
        try {
            setLoading(true);
            async function getMovieDetails() {
                const details = await getMovieDetailsById(data.id);
                setMovieDetails(details);
            }
            getMovieDetails();
            setLoading(false);
        } catch (error) {
            throw error;
        }
    }, [data.id]);

    // manage slots on remove action
    function handleRemoveSlotData() {
        if (slots.length === 1) {
            setSlots([
                {
                    id: 1,
                    data: null,
                },
            ]);
            setShowModal(false);
        } else {
            const updatedSlots = slots.filter((slot) => slot.id !== slotId);
            setSlots(updatedSlots);
        }
    }

    return (
        <div className='bg-zinc-900 rounded-lg p-4 flex flex-col'>
            <div className='flex justify-end mb-4'>
                <button
                    onClick={handleRemoveSlotData}
                    className='text-gray-400 hover:text-white'>
                    ✕
                </button>
            </div>
            {loading ? (
                <CompareDataSkeliton />
            ) : (
                <div className='grid grid-cols-5 gap-8'>
                    <div className='col-span-2 h-full'>
                        <Image
                            src={
                                movieDetails?.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`
                                    : fallbackMovieImage
                            }
                            alt={movieDetails?.title}
                            className='w-full rounded-lg mb-4 object-contain max-h-full'
                            width={500}
                            height={600}
                        />
                        <h2 className='text-xl font-bold mb-2 text-center'>
                            {movieDetails?.title}
                        </h2>
                    </div>
                    <div className='w-full space-y-4 col-span-3'>
                        <div className='bg-zinc-800 p-3 rounded'>
                            <span className='text-gray-400'>Rating:</span>
                            <span className='float-right'>
                                {movieDetails?.vote_average?.toFixed(1)}/10
                            </span>
                        </div>
                        <div className='bg-zinc-800 p-3 rounded'>
                            <span className='text-gray-400'>Release Year:</span>
                            <span className='float-right'>
                                {movieDetails?.release_date?.split("-")[0]}
                            </span>
                        </div>
                        <div className='bg-zinc-800 p-3 rounded'>
                            <span className='text-gray-400'>Runtime:</span>
                            <span className='float-right'>
                                {movieDetails?.runtime} min
                            </span>
                        </div>
                        <div className='bg-zinc-800 p-3 rounded'>
                            <span className='text-gray-400'>Budget:</span>
                            <span className='float-right'>
                                ${movieDetails?.budget}
                            </span>
                        </div>
                        <div className='bg-zinc-800 p-3 rounded'>
                            <span className='text-gray-400'>Revenue:</span>
                            <span className='float-right'>
                                ${movieDetails?.revenue}
                            </span>
                        </div>
                        <div className='bg-zinc-800 p-3 rounded'>
                            <span className='text-gray-400'>Genres:</span>
                            <div className='mt-2 flex flex-wrap gap-2'>
                                {movieDetails?.genres?.map((genre) => (
                                    <span
                                        key={genre?.id}
                                        className='bg-zinc-700 px-2 py-1 rounded-full text-sm'>
                                        {genre?.name}{" "}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SlotData;
