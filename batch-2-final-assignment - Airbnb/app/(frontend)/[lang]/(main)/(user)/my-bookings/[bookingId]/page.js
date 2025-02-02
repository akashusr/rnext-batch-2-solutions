import { getDictionary } from "@/app/(frontend)/[lang]/_dictionaries/dictionaries";
import HotelGallery from "@/app/_components/hotel/HotelGallery";
import Rating from "@/app/_components/reviews/Rating";
import avater from "@/public/avatar.jpg";
import { formatDateRange } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const ReservationDetailsPage = async ({ params: { bookingId, lang } }) => {
    const response = await fetch(
        `${process.env.API_BASE_URL}/bookings/${bookingId}`,
        {
            next: { revalidate: 0 },
        }
    );

    const { data } = await response.json();

    const hotelPromise = await fetch(
        `${process.env.API_BASE_URL}/hotels/${data?.hotel?._id?.toString()}`,
        {
            next: { revalidate: 0 },
        }
    );

    const { data: hotelData } = await hotelPromise.json();
    const { bookingDetails } = await getDictionary(lang);

    return (
        <div className='darkclass min-h-[calc(100vh-270px)] max-w-7xl mx-auto px-4 py-8'>
            <div className='min-h-screen'>
                {/* Header Section */}
                <header className='relative rounded-md'>
                    <HotelGallery images={data?.hotel?.gallery} />

                    <div className='absolute bg-gray-500/50 p-4 rounded-2xl bottom-6 left-8 text-white space-y-3'>
                        <h1 className='text-3xl font-bold'>
                            {bookingDetails?.yourBookingAt} {data?.hotel?.name}
                        </h1>
                        <p className='text-lg'>
                            {formatDateRange(data?.checkin, data?.checkout)}
                        </p>
                    </div>
                </header>

                {/* Reservation Details Card */}
                <section className='mt-10 mx-8'>
                    <div className='bg-gray-100 text-gray-800 p-8 rounded-xl shadow-xl'>
                        <Link href={`/hotel/${data?.hotel?._id.toString()}`}>
                            <h2 className='text-2xl font-bold hover:text-gray-500'>
                                {data?.hotel?.name}
                            </h2>
                        </Link>
                        <p className='text-gray-500 text-lg mt-2'>
                            {data?.hotel?.location}
                        </p>
                        <hr className='my-4' />
                        <div className='mt-6 space-y-4'>
                            <div className='flex justify-between items-center'>
                                <p className='text-lg'>
                                    <span className='font-semibold'>
                                        {bookingDetails?.checkIn}:
                                    </span>{" "}
                                    {data?.checkin}
                                </p>
                                <p className='text-lg'>
                                    <span className='font-semibold'>
                                        {bookingDetails?.checkOut}:
                                    </span>{" "}
                                    {data?.checkout}
                                </p>
                            </div>
                            <p className='text-lg'>
                                <span className='font-semibold'>
                                    {bookingDetails?.guests}:
                                </span>{" "}
                                {data?.guests}
                            </p>
                            <hr className='my-4' />
                            <div className='text-lg'>
                                <div className='flex justify-between'>
                                    <span>{bookingDetails?.nightlyRate}:</span>{" "}
                                    <span>$ {data?.hotel?.rate}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>
                                        {process.env.NEXT_PUBLIC_SITE_NAME}{" "}
                                        {bookingDetails?.serviceFee}:
                                    </span>{" "}
                                    <span>${data?.service_fee}</span>
                                </div>
                                <div className='flex justify-between font-bold text-lg'>
                                    <span>{bookingDetails?.total}:</span>{" "}
                                    <span>${data?.total_payable}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Host Information */}
                <section className='mt-8 mx-8 '>
                    <div className='bg-gray-100 p-6 rounded-xl shadow-xl flex items-center gap-6'>
                        <Image
                            src={hotelData?.host?.image || avater}
                            width={32}
                            height={32}
                            alt={hotelData?.host?.name}
                            className='w-20 h-20 rounded-full object-cover'
                        />
                        <div>
                            <h3 className='text-xl font-bold'>
                                {bookingDetails?.hostedBY}{" "}
                                {hotelData?.host?.name}
                            </h3>
                            <div className='flex items-center mt-2'>
                                <Rating ratings={hotelData?.reviews} />
                                <span className='text-gray-500 text-sm ml-2'>
                                    {`(${data?.hotel?.reviews.length}reviews)`}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReservationDetailsPage;
