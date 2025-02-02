"use client";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import HotelImagePopup from "./HotelImagePopup";

const HotelGallery = ({ images }) => {
    const [showPopup, setShowPopup] = useState(null);
    const newGallery = [...images];
    newGallery.shift();

    return (
        <div className='grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]'>
            <div className='col-span-2 row-span-2'>
                <Image
                    onClick={() =>
                        setShowPopup(
                            <Image
                                height={700}
                                width={700}
                                src={images[0]}
                                alt='Main Room'
                                className='w-full cursor-pointer h-full object-cover rounded-lg'
                            />
                        )
                    }
                    height={700}
                    width={700}
                    src={images[0]}
                    alt='Main Room'
                    className='w-full cursor-pointer h-full object-cover rounded-lg'
                />
            </div>
            {newGallery.map((image, index) => (
                <div key={index} className='relative'>
                    <Image
                        onClick={() =>
                            setShowPopup(
                                <Image
                                    height={700}
                                    width={700}
                                    src={image}
                                    alt='Others Room'
                                    className='w-full cursor-pointer h-full object-cover rounded-lg'
                                />
                            )
                        }
                        width={500}
                        height={500}
                        src={image}
                        alt='Others Room'
                        className='w-full h-full cursor-pointer object-cover rounded-lg'
                    />
                </div>
            ))}

            {showPopup &&
                createPortal(
                    <HotelImagePopup onDismiss={() => setShowPopup(false)}>
                        {showPopup}
                    </HotelImagePopup>,
                    document.body
                )}
        </div>
    );
};

export default HotelGallery;
