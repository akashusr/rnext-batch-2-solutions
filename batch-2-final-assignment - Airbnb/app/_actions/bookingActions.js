import { saveAs } from "file-saver";

export async function doReservation(payload) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );

        if (!response.ok) {
            const errorResult = await response.json();
            return {
                success: false,
                message: errorResult?.message || "Failed to create booking",
            };
        }

        const result = await response.json();

        // Fetch the invoice PDF
        const pdfResponse = await fetch(
            `${
                process.env.NEXT_PUBLIC_API_BASE_URL
            }/invoice/${result?.data?.booking?._id?.toString()}`,
            {
                method: "GET",
            }
        );

        if (!pdfResponse.ok) {
            throw new Error("Failed to download the invoice.");
        }

        const arrayBuffer = await pdfResponse.arrayBuffer();
        const pdfBuffer = Buffer.from(arrayBuffer);

        // Send email with the invoice
        const sendMailResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/send-email`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: result?.data?.booking?._id,
                    to: result?.data?.user?.email,
                    guestName: result?.data?.user?.name,
                    hotelName: result?.data?.hotel?.name,
                    checkInDate: result?.data?.booking?.checkin,
                    checkOutDate: result?.data?.booking?.checkout,
                    guestCount: result?.data?.booking?.guests,
                    totalPrice: result?.data?.booking?.total_payable,
                    hotelWebsite: "https://lws-x-airbnb.vercel.app",
                    hotelContact: `devripon.io@gmail.com`,
                    thumbnail: result?.data?.hotel?.thumbnail,
                    attachments: [
                        {
                            filename: `invoice-${result?.data?.booking?._id}.pdf`,
                            content: pdfBuffer.toString("base64"), // Convert to Base64
                            encoding: "base64", // Specify Base64 encoding
                            contentType: "application/pdf",
                        },
                    ],
                }),
            }
        );

        if (!sendMailResponse.ok) {
            const mailError = await sendMailResponse.json();
            throw new Error(
                mailError?.message || "Failed to send email with the invoice."
            );
        }

        return {
            success: true,
            message: "Booking successful. Invoice sent to email.",
            data: result?.data,
        };
    } catch (error) {
        return {
            success: false,
            message:
                error.message ||
                "An error occurred while making the reservation.",
        };
    }
}

export async function downloadReceipt(bookingId) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/invoice/${bookingId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to download the invoice.");
        }

        const blob = await response.blob();
        saveAs(blob, `invoice-${bookingId || "receipt"}.pdf`);
    } catch (error) {
        console.error("Error while downloading the receipt:", error);
    }
}
