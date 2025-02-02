import { getDictionary } from "@/app/(frontend)/[lang]/_dictionaries/dictionaries";
import { Suspense } from "react";
import BookingCard from "../header/BookingCard";
import Rating from "../reviews/Rating";
import HotelDetails from "./HotelDetails";
import HotelGallery from "./HotelGallery";

const HotelInfoDetails = async ({ hotelData, lang }) => {
    const info = hotelData?.data;
    const dictionary = await getDictionary(lang);

    return (
        <div className='dark:text-white max-w-7xl mx-auto px-6 py-8'>
            {/* Property Title and Rating */}
            <div className='mb-6'>
                <h1 className='text-3xl font-bold mb-2'>{info?.name}</h1>
                <div className='flex items-center dark:text-gray-400 text-gray-600'>
                    <Rating ratings={info?.reviews} />
                    <span className='mx-2'>·</span>
                    <span className='ml-2'>
                        {info?.reviews?.length
                            ? `${info?.reviews?.length} ${dictionary?.reviews?.reviews}`
                            : dictionary?.reviews?.noReviews}
                    </span>
                    <span className='mx-2'>·</span>
                    <span className=''>{info?.location}</span>
                </div>
            </div>

            <HotelGallery images={info?.gallery} />

            <div className='grid grid-cols-3 gap-8'>
                <HotelDetails dictionary={dictionary} info={info} />
                <Suspense fallback='Loading...'>
                    <BookingCard dictionary={dictionary} info={info} />
                </Suspense>
            </div>
        </div>
    );
};

export default HotelInfoDetails;
