import Link from "next/link";
import Pagination from "../pagination/Pagination";
import HotelCard from "./HotelCard";
import NoHotelData from "./NoHotelData";

const HotelList = async ({ page, query, lang }) => {
    const res = await fetch(
        `${process.env.API_BASE_URL}/hotels?query=${query}&page=${page}`,
        {
            next: { revalidate: 0 },
        }
    ).then((res) => res.json());

    if (res?.success === false && res?.error) {
        throw new Error(res?.error?.message);
    }

    return (
        <>
            {query && (
                <p className='text-center text-teal-800 py-2 font-semibold'>
                    {res?.totalData} Matches found with your query :{query}
                </p>
            )}

            {res?.data?.length === 0 && (
                <div className='min-h-[calc(100vh-270px)] max-w-7xl flex place-content-center justify-center items-center -z-20 mx-auto'>
                    <NoHotelData>
                        <p className='font-bold text-lg text-gray-700'>
                            Sorry ! No Hotels Found
                        </p>
                    </NoHotelData>
                </div>
            )}
            <div className='min-h-[calc(100vh-270px)] max-w-7xl -z-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {res?.data?.length > 0 &&
                    res?.data?.map((hotel) => (
                        <Link
                            key={hotel?._id.toString()}
                            href={`/hotel/${hotel?._id}`}>
                            <HotelCard lang={lang} hotelInfo={hotel} />
                        </Link>
                    ))}
            </div>

            {res?.totalPage > 1 && (
                <Pagination currentPage={page} totalPage={res?.totalPage} />
            )}
        </>
    );
};

export default HotelList;
