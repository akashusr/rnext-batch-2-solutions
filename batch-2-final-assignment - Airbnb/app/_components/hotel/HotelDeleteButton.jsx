"use client";
import { deleteHotel } from "@/app/_actions/hotelActions";
import { useState } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa6";
import ConfirmationPopup from "../common/ConfirmationPopup";

const HotelDeleteButton = ({ hotelId }) => {
    const [isShow, setIsShow] = useState(false);

    async function handleConfirmed() {
        try {
            const response = await deleteHotel(hotelId);
            if (response?.success === true) {
                setIsShow(false);
                toast.success("Deleted Successfully");
            }
        } catch (error) {
            throw new Error(
                `There was an error occoured when delete property ${hotelId}`
            );
        }
    }

    function handleCancel() {
        setIsShow(false);
        return false;
    }

    return (
        <>
            <button
                onClick={() => setIsShow(true)}
                className='text-red-500 hover:text-red-600'>
                <FaTrash />
            </button>
            {isShow &&
                createPortal(
                    <ConfirmationPopup
                        onConfirm={handleConfirmed}
                        onCancel={handleCancel}>
                        <h3 className='text-gray-700 block font-bold text-xl'>
                            Are you sure ?
                        </h3>
                        <br />
                        <p className='text-gray-600 text-md'>
                            You are going to delete this property. This cannot
                            be undone!
                        </p>
                    </ConfirmationPopup>,
                    document.body
                )}
        </>
    );
};

export default HotelDeleteButton;
