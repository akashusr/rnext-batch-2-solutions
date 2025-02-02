// dependencies
import { useEffect, useRef, useState } from "react";

const useDebounceValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any existing timeout before setting a new one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set the timeout and update the debounced value
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout on component unmount
    return () => clearTimeout(timeoutRef.current);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounceValue;
