import noBookingImage from "@/public/nobookings.svg";
import Image from "next/image";
import Link from "next/link";

const NoBookingFound = () => {
    return (
        <div id='empty-state' className='text-center py-12'>
            <Image
                src={noBookingImage}
                alt='No Bookings'
                className='mx-auto mb-4 w-32 h-32 rounded'
            />
            <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                No Bookings Found
            </h2>
            <p className='text-zinc-500 text-sm mb-4'>
                You haven&apos;t made any bookings. Start exploring amazing
                stays!
            </p>
            <Link
                href='/'
                className='bg-gray-400 w-40  text-white px-4 py-2 rounded-lg hover:brightness-90 transition-colors '>
                All properties
            </Link>
        </div>
    );
};

export default NoBookingFound;
