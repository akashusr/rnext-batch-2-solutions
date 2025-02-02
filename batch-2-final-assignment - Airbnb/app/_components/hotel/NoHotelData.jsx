import NoHotemIMage from "@/public/nodata.svg";
import Image from "next/image";

const NoHotelData = ({ children }) => {
    return (
        <div
            id='empty-state'
            className='text-center py-12 flex flex-col gap-y-3'>
            <Image
                src={NoHotemIMage}
                alt='No Hotels Found'
                className='mx-auto mb-4 w-32 h-32'
            />
            {children}
        </div>
    );
};

export default NoHotelData;
