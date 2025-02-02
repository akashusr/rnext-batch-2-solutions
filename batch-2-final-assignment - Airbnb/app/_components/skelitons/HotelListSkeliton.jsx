import HotelCardSkeliton from "./HotelCardSkeliton";

const HotelListSkeliton = () => {
    return (
        <div className=' darkclass max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            <HotelCardSkeliton />
            <HotelCardSkeliton />
            <HotelCardSkeliton />
            <HotelCardSkeliton />
            <HotelCardSkeliton />
            <HotelCardSkeliton />
            <HotelCardSkeliton />
            <HotelCardSkeliton />
        </div>
    );
};

export default HotelListSkeliton;
