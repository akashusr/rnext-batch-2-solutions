"use client";

import { doReservation } from "@/app/_actions/bookingActions";
import usePopup from "@/hooks/usePopup";
import { useReservation } from "@/hooks/useReservation";
import { formatDateRange } from "@/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import BillingSection from "../payment/BillingSection";
import PaymentProcessing from "../payment/PaymentProcessing";
import PreviewSection from "../payment/PreviewSection";
import PricingPreiewCardSkeliton from "../skelitons/PricingPreiewCardSkeliton";
import BillingAddress from "./BillingAddress";
import DateRangePicker from "./DateRangePicker";
import Payment from "./Payment";

const BookingSection = ({ hotelId, dictionary }) => {
    const { data } = useSession();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const ref = useRef(null);
    const { show, setShow, togglePopup } = usePopup(ref);
    const { reservationData, setReservationData } = useReservation();

    const [editGuest, setEditGuest] = useState(false);
    const [showPaymentProceeing, setShowPaymentProcessing] = useState(false);
    const [billingAddress, setBillingAddress] = useState({
        street: "",
        house_number: "",
        city: "",
        state: "",
        zip: "",
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardnumber: "",
        cvv: "",
        expiresIn: "",
    });

    // set reservation data to state
    useEffect(() => {
        setReservationData((data) => ({
            ...data,
            hotelId: hotelId,
            checkin: searchParams.get("checkin"),
            checkout: searchParams.get("checkout"),
            totalDays: searchParams.get("totalDays"),
            guest: searchParams.get("guest"),
            hotelInfo: {},
        }));
    }, [hotelId, searchParams, setReservationData]);

    // persist data to localstorage
    useEffect(() => {
        localStorage.setItem(
            "reservationData",
            JSON.stringify(reservationData)
        );
    }, [reservationData]);

    // GET Hotels data
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
    }, [data?.user, data?.user.id, hotelId, router, setReservationData]);

    // calculate prices
    const hotelRate = parseFloat(reservationData?.hotelInfo?.rate) || 0;
    const totalDays = parseFloat(reservationData?.totalDays) || 0;
    const cleaningFee =
        parseFloat(reservationData?.hotelInfo?.cleaning_fee) || 0;
    const serviceCharge =
        parseFloat(process.env.NEXT_PUBLIC_HOTEL_SERVICE_CHARGE) || 0;
    const totalPrice = hotelRate * totalDays + cleaningFee + serviceCharge;

    // manage forms
    const {
        register,
        formState: { errors },
        handleSubmit,
        clearErrors,
    } = useForm();

    // handle booking submission
    async function handleBookingSubmission(formData) {
        //make payemnt action call
        setShowPaymentProcessing(true);

        // make booking request
        const reservationPayload = {
            hotel: reservationData?.hotelId,
            user: data?.user?.id,
            checkin: reservationData?.checkin,
            checkout: reservationData?.checkout,
            totalDays: totalDays,
            guests: parseInt(reservationData?.guest),
            billing_address: billingAddress,
            cleaning_fee: cleaningFee,
            service_fee: serviceCharge,
            rent: hotelRate,
            total_payable: totalPrice,
            createdAt: reservationData?._id,
        };

        const response = await doReservation(reservationPayload);

        if (response?.success === true) {
            setShowPaymentProcessing(false);
            localStorage.removeItem("reservationData");
            const params = new URLSearchParams(searchParams);
            params.set("bookingId", response?.data?.booking?._id);
            router.replace(`${pathname}/success?${params.toString()}`);
        }
    }

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* Left Column */}
                <BillingSection dictionary={dictionary}>
                    {/* Reservation dates */}
                    <div
                        ref={ref}
                        className='flex dark:text-gray-300 flex-col  mb-4 '>
                        <div>
                            <h3 className='font-medium'>
                                {dictionary?.checkout?.dates}
                            </h3>
                            <div className='flex justify-between w-full'>
                                <p className='text-zinc-600 dark:text-gray-500  text-sm'>
                                    {formatDateRange(
                                        reservationData?.checkin,
                                        reservationData.checkout
                                    )}
                                </p>
                                {!show ? (
                                    <button
                                        onClick={() => setShow(true)}
                                        className=' items-end text-zinc-800 dark:text-gray-300  underline text-sm'>
                                        {dictionary?.checkout?.edit}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setShow(false)}
                                        className='text-zinc-800 dark:text-gray-300  underline text-sm'>
                                        {dictionary?.checkout?.update}
                                    </button>
                                )}
                            </div>
                        </div>
                        {show && (
                            <DateRangePicker
                                border={false}
                                checkin={reservationData?.checkin}
                                checkout={reservationData.checkout}
                                setReservationData={setReservationData}
                                bookedDays={
                                    reservationData?.hotelInfo?.bookings
                                }
                            />
                        )}
                    </div>
                    {/* Guests */}
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className='font-medium'>
                                {dictionary?.hotel?.guests}
                            </h3>
                            {!editGuest ? (
                                <p className='text-zinc-600 dark:text-gray-500  text-sm'>
                                    {reservationData?.guest}{" "}
                                    {dictionary?.hotel?.guests}
                                </p>
                            ) : (
                                <>
                                    <p className='text-sm text-gray-400 dark:text-gray-300 '>
                                        {
                                            dictionary?.hotel
                                                ?.maximumGuestCapacity
                                        }{" "}
                                        {
                                            reservationData?.hotelInfo
                                                ?.guest_capacity
                                        }
                                    </p>
                                    <input
                                        onChange={(e) =>
                                            setReservationData((data) => ({
                                                ...data,
                                                guest: e.target.value,
                                            }))
                                        }
                                        max={
                                            reservationData?.hotelInfo
                                                ?.guest_capacity
                                        }
                                        min={1}
                                        className='border-2 p-2 border-primary rounded min-w-40'
                                        type='number'
                                        value={reservationData?.guest}
                                        placeholder='Update Guest Count'
                                    />
                                </>
                            )}
                        </div>
                        {!editGuest ? (
                            <button
                                onClick={() => setEditGuest(true)}
                                className='text-zinc-800 dark:text-gray-300  underline text-sm'>
                                {dictionary?.checkout?.edit}
                            </button>
                        ) : (
                            <button
                                onClick={() => setEditGuest(false)}
                                className='text-zinc-800 dark:text-gray-300  underline text-sm'>
                                {dictionary?.checkout?.update}
                            </button>
                        )}
                    </div>

                    <form onSubmit={handleSubmit(handleBookingSubmission)}>
                        <Payment
                            dictionary={dictionary}
                            paymentInfo={paymentInfo}
                            setPaymentInfo={setPaymentInfo}
                            register={register}
                            errors={errors}
                            clearErrors={clearErrors}
                        />
                        <BillingAddress
                            dictionary={dictionary}
                            billingAddress={billingAddress}
                            setBillingAddress={setBillingAddress}
                            register={register}
                            errors={errors}
                            clearErrors={clearErrors}
                        />
                        {/* Book Button */}
                        {!data?.user && (
                            <Link href='/login'>
                                <div className='bg-yellow-800 gap-2 flex justify-center items-center text-white p-3 rounded w-full '>
                                    {dictionary?.checkout?.needToLoginText}{" "}
                                    <span className='underline space-x-3 text-teal-500'>
                                        {dictionary?.headers?.login}
                                    </span>
                                </div>
                            </Link>
                        )}

                        {!showPaymentProceeing && (
                            <button
                                disabled={!data?.user}
                                type='submit'
                                className='w-full block text-center bg-primary text-white py-3 rounded-lg mt-6 hover:brightness-90'>
                                {dictionary?.checkout?.requestToBook}
                            </button>
                        )}
                    </form>
                </BillingSection>
                {/* Right Column */}
                <Suspense fallback={<PricingPreiewCardSkeliton />}>
                    <PreviewSection dictionary={dictionary} hotelId={hotelId} />
                </Suspense>

                {showPaymentProceeing &&
                    createPortal(<PaymentProcessing />, document.body)}
            </div>
        </>
    );
};

export default BookingSection;
