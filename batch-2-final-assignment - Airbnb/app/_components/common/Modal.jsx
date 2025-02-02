"use client";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Modal({ children }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();
    const pathname = usePathname();

    // dismiss router by going back
    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    // dismiss router with escape key press
    const onKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return (
        <div className='bg-gray-50'>
            {/* Modal Backdrop */}
            <div className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center'>
                {/* Modal Container */}
                <div className='bg-white darkclass rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50'>
                    {/* Close Button */}
                    <button
                        onClick={onDismiss}
                        id='closeModalBtn'
                        className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'>
                        <IoCloseOutline size={30} />
                    </button>

                    {children}
                </div>
            </div>
        </div>
    );
}
