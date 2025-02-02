import { useEffect, useState } from "react";

const usePopup = (ref) => {
    const [isShow, setIsShow] = useState();

    function togglePopup(e) {
        e.stopPropagation();
        setIsShow(!isShow);
    }

    //this is a effect event
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        // If popup is open, add event listener to handle outside clicks
        if (isShow) {
            document.body.addEventListener("click", handleClickOutside);
        } else {
            document.body.removeEventListener("click", handleClickOutside);
        }
        // Cleanup event listener on component unmount
        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, [isShow]);

    return {
        isShow,
        setIsShow,
        togglePopup,
    };
};

export default usePopup;
