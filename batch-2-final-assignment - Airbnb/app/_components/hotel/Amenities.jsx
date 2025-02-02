import { getAmenitiesIcon } from "@/lib/amenities";

const Amenities = ({ amenities, dictionary }) => {
    return (
        <div>
            <h3 className='text-xl font-semibold mb-4'>
                {dictionary?.hotel?.offerTextHeader}
            </h3>
            <div className='grid grid-cols-2 gap-4'>
                {amenities.map((amenity, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <div className='flex items-center justify-center gap-2 pt-2'>
                            {getAmenitiesIcon(amenity)}
                            <span>{amenity}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Amenities;
