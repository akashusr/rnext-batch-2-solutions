import { useEffect, useState } from "react";

const usePopup = (ref) => {
    const [show, setShow] = useState(false);
    const togglePopup = (e) => {
        e.stopPropagation();
        setShow((prev) => !prev);
    };

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        if (show) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [show]);

    return {
        show,
        setShow,
        togglePopup,
    };
};

export default usePopup;
