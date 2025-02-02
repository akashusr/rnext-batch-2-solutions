import { getDictionary } from "@/app/(frontend)/[lang]/_dictionaries/dictionaries";
import BookingDetailsCard from "@/app/_components/success/BookingDetailsCard";
import DownlaodReceiptButton from "@/app/_components/success/DownlaodReceiptButton";
import NextSteps from "@/app/_components/success/NextSteps";
import SuccessMessage from "@/app/_components/success/SuccessMessage";
import Link from "next/link";
import { redirect } from "next/navigation";
export default async function ReservationSuccessPage({
    searchParams: { bookingId },
    params: { lang },
}) {
    const response = await fetch(
        `${process.env.API_BASE_URL}/bookings/${bookingId}`,
        {
            next: { revalidate: 0 },
        }
    );
    if (!response.ok) {
        return redirect("/");
    }

    const bookingInfo = await response.json();
    const dictionary = await getDictionary(lang);

    return (
        <div className=' dark:bg-gray-950 dark:text-gray-300 bg-gray-50'>
            <div className='max-w-3xl mx-auto p-6'>
                {/* Success Message Section */}
                <SuccessMessage dictionary={dictionary} />
                {/* Booking Details Card */}
                <BookingDetailsCard
                    dictionary={dictionary}
                    bookinginfo={bookingInfo?.data}
                />
                {/* Next Steps */}
                <NextSteps dictionary={dictionary} />
                {/* Action Buttons */}
                {/* <button onClick={createInvoice}>Download Invoice</button> */}
                <DownlaodReceiptButton
                    dictionary={dictionary}
                    bookinginfo={bookingInfo?.data}
                />
                {/* Need Help Section */}
                <div className='mt-12 text-center'>
                    <p className='text-zinc-600'>
                        {dictionary?.success?.needHelp}
                    </p>
                    <Link href='#' className='text-primary hover:underline'>
                        {dictionary?.success?.visitHelpCenter}
                    </Link>
                </div>
            </div>
        </div>
    );
}
