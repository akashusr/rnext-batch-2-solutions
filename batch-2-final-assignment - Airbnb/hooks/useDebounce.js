import { useEffect, useRef } from "react";

export const useDebounce = (callback, delay) => {
    const timer = useRef(null);

    // check that any timeout is running or not
    // if running clear previous timeout
    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, []);

    // return a debounced callback
    const debouncedCallback = (...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
    return debouncedCallback;
};
