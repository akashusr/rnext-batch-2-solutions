"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal({ children }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

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
        <div
            ref={overlay}
            className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80 p-10'
            onClick={onClick}>
            <div
                ref={wrapper}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-11/12 md:w-11/12 lg:w-4/5 '>
                {children}
            </div>
        </div>
    );
}
