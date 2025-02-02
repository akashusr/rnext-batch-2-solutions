"use client";
import { createReview, updateReview } from "@/app/_actions/reviewActions";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import LoadingSpinner from "../common/LoadingSpinner";

export const ReviewForm = ({
    user,
    onClose,
    hotelInfo,
    reviewData,
    dictionary,
}) => {
    const [error, setError] = useState(null);
    const [rating, setRating] = useState(reviewData?.rating || 0);
    const [review, setReview] = useState(reviewData?.review || "");
    const [hover, setHover] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleRating = (value) => {
        setRating(value);
    };

    // handle submit review
    async function submitReview() {
        setLoading(true);
        const payload = {
            hotel: hotelInfo?._id?.toString(),
            user,
            rating,
            review,
            reviewId: reviewData?._id?.toString(),
        };

        try {
            if (!reviewData) {
                // submit in create mode
                const response = await createReview(payload);
                if (response?.success) {
                    toast.success(dictionary?.toast?.reviewAdded);
                    onClose();
                } else {
                    throw response;
                }
            } else {
                // submit in update mode
                const response = await updateReview(payload);
                if (response?.success) {
                    toast.success(dictionary?.toast?.ReviewUpdated);
                    onClose();
                } else {
                    throw response;
                }
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-end z-50'>
            <div className='bg-white dark:bg-gray-800 dark:text-gray-300 rounded-t-2xl relative shadow-xl max-w-3xl w-full p-8 transform transition-transform duration-300 translate-y-0'>
                <button className='absolute right-8 top-7' onClick={onClose}>
                    <IoClose
                        className='text-gray-500 dark:text-gray-300 hover:text-gray-700'
                        size={25}
                    />
                </button>
                {/* Header */}
                <header className='text-center mb-8'>
                    <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-800'>
                        {dictionary?.reviews?.reviewYourStayAt}{" "}
                        {`"${hotelInfo?.name}"`}
                    </h1>
                    <p className='dark:text-gray-400 text-gray-500 mt-2'>
                        {hotelInfo?.location}
                    </p>
                </header>

                {/* Star Rating Section */}
                <section className='mb-6'>
                    <h2 className='text-lg dark:text-gray-300 font-semibold text-gray-700 mb-4'>
                        {dictionary?.reviews?.howWasYourStay}
                    </h2>
                    <div className='flex justify-center gap-2'>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <FaStar
                                key={value}
                                className={`cursor-pointer text-4xl ${
                                    value <= (hover || rating)
                                        ? "text-yellow-500"
                                        : "text-gray-300"
                                }`}
                                onClick={() => {
                                    setError(null);
                                    handleRating(value);
                                }}
                                onMouseEnter={() => setHover(value)}
                                onMouseLeave={() => setHover(0)}
                            />
                        ))}
                    </div>
                </section>

                {/* Review Form */}
                <section className='mb-6'>
                    <h2 className='text-lg dark:text-gray-300 font-semibold text-gray-700 mb-4'>
                        {dictionary?.reviews?.tellUsYourExperience}
                    </h2>
                    <textarea
                        onChange={(e) => {
                            setError(null);
                            setReview(e.target.value.trim());
                        }}
                        defaultValue={review}
                        rows='8'
                        placeholder={dictionary?.reviews?.shareYourThougts}
                        className=' dark:bg-transparent w-full resize-none p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                </section>
                {error && (
                    <div className='flex items-center justify-between p-4 mb-4 text-sm text-red-800 bg-red-100 border border-red-300 rounded-lg'>
                        <p>{error?.errors?.review || error?.errors?.rating}</p>
                        <IoClose onClick={() => setError(null)} />
                    </div>
                )}

                {/* Submit Button */}
                <div className='text-center'>
                    <button
                        onClick={submitReview}
                        className='bg-teal-600 text-white font-medium text-lg px-6 py-3 rounded-lg hover:bg-teal-700 transition'>
                        {loading ? (
                            <LoadingSpinner />
                        ) : reviewData ? (
                            dictionary?.reviews?.updateReview
                        ) : (
                            dictionary?.reviews?.submitReview
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
