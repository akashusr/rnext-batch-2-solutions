import { getDictionary } from "@/app/(frontend)/[lang]/_dictionaries/dictionaries";
import BookingSection from "@/app/_components/bookings/BookingSection";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { FaChevronLeft } from "react-icons/fa6";
export default async function BookingPage({
    searchParams,
    params: { hotelId, lang },
}) {
    if (!searchParams?.checkin || !searchParams?.checkout) {
        redirect(`/hotel/${hotelId}`);
    }
    const dictionary = await getDictionary(lang);

    return (
        <div className=' dark:text-gray-300 max-w-7xl mx-auto px-6 py-8'>
            {/* Back Button */}
            <div className='mb-8'>
                <Link
                    href={`/hotel/${hotelId}`}
                    className='text-zinc-800 dark:text-gray-300 flex justify-start gap-2 items-center hover:underline'>
                    <FaChevronLeft />
                    {dictionary?.checkout?.requestToBook}
                </Link>
            </div>

            {/* Main Content Grid */}
            <Suspense fallback='Loading...'>
                <BookingSection dictionary={dictionary} hotelId={hotelId} />
            </Suspense>
        </div>
    );
}
