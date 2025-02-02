import { getAvarageRatings } from "@/utils";
import { FaStar } from "react-icons/fa";

const Rating = ({ ratings }) => {
    return (
        <div className=' ratings inline-flex justify-center items-center'>
            <FaStar
                color={ratings?.length > 0 ? "#ffbf00" : "#cccccc"}
                style={{ margin: "0px 5px" }}
            />
            <span>
                {ratings?.length && ratings?.length > 0
                    ? getAvarageRatings(ratings)
                    : `0.0`}{" "}
            </span>
        </div>
    );
};

export default Rating;
