import HotelList from "@/app/_components/hotel/HotelList";
import HotelListSkeliton from "@/app/_components/skelitons/HotelListSkeliton";
import { Suspense } from "react";

export default async function HomePage({
    searchParams: { page, query },
    params: { lang },
}) {
    return (
        <>
            <section className='px-6'>
                <Suspense fallback={<HotelListSkeliton />}>
                    <HotelList
                        lang={lang}
                        query={query ?? ""}
                        page={page ?? 1}
                    />
                </Suspense>
            </section>
        </>
    );
}
