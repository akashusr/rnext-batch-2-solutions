import { amenitiesList, getAmenitiesIcon } from "@/lib/amenities";

const AmenitiesList = ({ handleAmenityChange, data }) => {
    return (
        <div className='grid grid-cols-2 gap-4' id='amenities'>
            {amenitiesList.map((item) => (
                <label
                    key={item?.id}
                    className='flex items-center gap-2 cursor-pointer'>
                    <input
                        onChange={() => handleAmenityChange(item?.amenity)}
                        checked={data.amenities.includes(item?.amenity)}
                        type='checkbox'
                        className='accent-primary w-4 h-4'
                        name='amenities'
                        value='Beach access'
                    />

                    <span className='flex items-center gap-2'>
                        {" "}
                        {getAmenitiesIcon(item?.amenity)} {item?.amenity}
                    </span>
                </label>
            ))}
        </div>
    );
};

export default AmenitiesList;
