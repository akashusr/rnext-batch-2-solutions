import { getDictionary } from "@/app/(frontend)/[lang]/_dictionaries/dictionaries";
import HotelCreateEditForm from "@/app/_components/createPageInputs/form/HotelCreateEditForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function UpdatePage({ params: { hotelId, lang } }) {
    const session = await auth();
    const response = await fetch(
        `${process.env.API_BASE_URL}/hotels/${hotelId}`,
        {
            method: "GET",
            next: { revalidate: 0 },
        }
    );
    const data = await response.json();
    if (!response?.data?.user?._id?.toString() === session?.user?.id) {
        redirect("/");
    }

    if (response?.ok) {
        const payload = {
            hotelId: data?.data?._id?.toString(),
            name: data?.data?.name,
            location: data?.data?.location,
            description: data?.data?.description,
            rate: data?.data?.rate,
            rooms: data?.data?.rooms,
            thumbnail: data?.data?.thumbnail,
            gallery: data?.data?.gallery,
            guest_capacity: data?.data?.guest_capacity,
            bedrooms: data?.data?.bedrooms,
            beds: data?.data?.beds,
            cleaning_fee: data?.data?.cleaning_fee,
            amenities: data?.data?.amenities,
        };
        const { createUpdate } = await getDictionary(lang);

        return (
            <HotelCreateEditForm
                dictionary={createUpdate}
                editableData={payload}
            />
        );
    } else {
        return redirect("/");
    }
}
