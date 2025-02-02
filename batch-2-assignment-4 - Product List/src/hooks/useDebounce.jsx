// dependency
import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);

  // clear timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...arg) => {
    // before start timeout clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // set delay execution callback
    timeoutRef.current = setTimeout(() => {
      callback(...arg);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
