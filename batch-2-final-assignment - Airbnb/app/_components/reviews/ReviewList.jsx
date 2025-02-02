"use client";

import { useState } from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ hotelData, reviews, dictionary }) => {
    const [showAll, setShowAll] = useState(false);
    const allReviews = [...reviews];
    const slicedReviewslist = allReviews.slice(0, 6);

    const slicedReviewComponent = slicedReviewslist?.map((review, index) => (
        <ReviewCard key={review?._id} hotelData={hotelData} review={review} />
    ));
    const allReviewsComponent = reviews?.map((review, index) => (
        <ReviewCard key={review?._id} hotelData={hotelData} review={review} />
    ));

    return reviews?.length > 0 ? (
        <>
            <div className='grid grid-cols-2 gap-8'>
                {!showAll ? slicedReviewComponent : allReviewsComponent}
            </div>
            <div className='flex mt-5 w-full justify-center items-center'>
                {allReviews?.length > 6 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className='bg-gray-600/40 hover:bg-gray-600/70 transition duration-300 border border-gray-400  m-auto rounded-full px-4 py-2'>
                        {!showAll ? "See More Reviews" : "See Less Reviews"}
                    </button>
                )}
            </div>
        </>
    ) : (
        <div className='text-center text-gray-600'>
            {" "}
            {dictionary?.reviews?.noReviews}
        </div>
    );
};

export default ReviewList;
