import { useReservation } from "@/hooks/useReservation";
import HomeAvatar from "@/public/home.png";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Rating from "../reviews/Rating";

const PreviewSection = ({ hotelId, dictionary }) => {
    const { data } = useSession();
    const router = useRouter();
    const { reservationData, setReservationData } = useReservation();
    const hotelRate = parseFloat(reservationData?.hotelInfo?.rate) || 0;
    const totalDays = parseFloat(reservationData?.totalDays) || 0;
    const cleaningFee =
        parseFloat(reservationData?.hotelInfo?.cleaning_fee) || 0;
    const serviceCharge =
        parseFloat(process.env.NEXT_PUBLIC_HOTEL_SERVICE_CHARGE) || 0;

    const totalPrice = hotelRate * totalDays + cleaningFee + serviceCharge;

    useEffect(() => {
        async function getHotelDetails() {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/hotels/${hotelId}`
            );
            const hotelDetails = await res.json();

            if (res) {
                setReservationData((data) => ({
                    ...data,
                    hotelInfo: hotelDetails?.data,
                }));
            }
        }
        getHotelDetails();
    }, [data?.user?.id, hotelId, router, setReservationData]);

    return (
        <div>
            {/* Price Details Card */}
            <div className=' darkclass bg-white p-6 rounded-lg shadow-sm mb-8 sticky top-0'>
                <div className='flex items-start gap-4 mb-6'>
                    <Image
                        width={200}
                        height={200}
                        src={
                            reservationData?.hotelInfo?.thumbnail || HomeAvatar
                        }
                        alt='Property'
                        className='w-20 h-20 rounded-lg object-cover'
                    />
                    <div>
                        <h4 className='text-md'>
                            {reservationData?.hotelInfo?.name}
                        </h4>
                        <p className='text-sm text-clip line-clamp-2'>
                            {reservationData?.hotelInfo?.description}
                        </p>
                        <div className='flex'>
                            <div className=' flex items-center gap-1 justify-center text-xs mt-1 text-zinc-500'>
                                <Rating
                                    ratings={
                                        reservationData?.hotelInfo?.reviews
                                    }
                                />
                                <span className=''>
                                    (
                                    {
                                        reservationData?.hotelInfo?.reviews
                                            ?.length
                                    }{" "}
                                    {dictionary?.hotel?.reviews})
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t pt-4'>
                    <h3 className='font-semibold mb-4'>
                        {" "}
                        {dictionary?.checkout?.priceDetails}
                    </h3>
                    <div className='space-y-3'>
                        <div className='flex justify-between'>
                            <span>
                                ${hotelRate} x {totalDays}{" "}
                                {dictionary?.checkout?.nights}
                            </span>
                            <span>${hotelRate * totalDays}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span> {dictionary?.checkout?.cleaningFee}</span>
                            <span>${cleaningFee}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>
                                {process.env.NEXT_PUBLIC_SITE_NAME}{" "}
                                {dictionary?.checkout?.serviceFee}
                            </span>
                            <span>${serviceCharge}</span>
                        </div>
                        <div className='flex justify-between font-semibold pt-3 border-t'>
                            <span> {dictionary?.checkout?.total} (USD)</span>
                            <span>${totalPrice} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewSection;
