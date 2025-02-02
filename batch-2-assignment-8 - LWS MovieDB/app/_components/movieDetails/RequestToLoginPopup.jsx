"use client";
import Link from "next/link";
import { useCallback, useEffect } from "react";

export const RequestToLoginPopup = ({ message, onCloseClick }) => {
    // manage modal show/hide
    const dismiss = useCallback(() => {
        onCloseClick();
    }, [onCloseClick]);

    const escapeDown = useCallback(
        (e) => {
            if (e.key === "Escape") {
                dismiss();
            }
        },
        [dismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", escapeDown);
        return () => {
            document.removeEventListener("keydown", escapeDown);
        };
    }, [escapeDown]);

    return (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
            <div className='bg-white rounded-lg shadow-2xl p-6 w-96'>
                <h3 className='text-lg text-gray-800 font-semibold mb-2'>
                    Login Required
                </h3>
                <p className='text-gray-600 mb-4'>{message}</p>
                <div className='flex justify-end gap-4'>
                    <Link
                        href='/login'
                        className='px-4 py-2 bg-red-600/80 border-2 border-red-800/50 text-white rounded hover:bg-red-600/50'>
                        Login
                    </Link>
                    <button
                        onClick={onCloseClick}
                        className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300'>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
