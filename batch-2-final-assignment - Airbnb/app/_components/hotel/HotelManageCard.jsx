import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import Rating from "../reviews/Rating";
import HotelDeleteButton from "./HotelDeleteButton";
const HotelManageCard = ({ hotel, dictionary }) => {
    return (
        <div className='overflow-hidden darkclass rounded-b-md cursor-pointer'>
            <div className='relative'>
                <Image
                    src={hotel?.thumbnail}
                    alt={hotel?.name}
                    width={300}
                    height={300}
                    className='w-full h-48 object-cover rounded-md transition-all hover:scale-105'
                />
                <div className='absolute top-4 dark:bg-gray-800 dark:text-gray-200 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold'>
                    <Rating ratings={hotel?.reviews} />
                </div>
            </div>
            <div className='p-4'>
                <h2 className='text-lg font-semibold dark:text-gray-300 text-zinc-800 mb-2'>
                    {hotel?.name}
                </h2>
                <div className='flex justify-between items-center'>
                    <span className='text-zinc-600'>
                        {hotel?.rooms} Rooms Available
                    </span>
                    <span className='text-rose-600 font-semibold'>
                        ${hotel?.rate}/{dictionary?.perNight}
                    </span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-zinc-500'>{hotel?.location}</span>
                    <div className='space-x-2 flex gap-1'>
                        <Link
                            href={`/manage-hotels/edit/${hotel?._id.toString()}`}
                            className='text-blue-500 hover:text-blue-600'>
                            <FaEdit />
                        </Link>
                        <HotelDeleteButton hotelId={hotel?._id.toString()} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelManageCard;
