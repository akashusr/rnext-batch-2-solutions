import { deleteReview } from "@/app/_actions/reviewActions";
import usePopup from "@/hooks/usePopup";
import avatar from "@/public/avatar.jpg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { PiDotsThreeBold } from "react-icons/pi";
import { ReviewForm } from "./ReviewForm";

const ReviewCard = ({ review, hotelData }) => {
    const ref = useRef();
    const { setShow, show, togglePopup } = usePopup(ref);
    const [editReview, setEditReview] = useState(false);
    const [loading, setLoading] = useState(false);
    const { data } = useSession();
    function handleClose() {
        setEditReview(null);
    }

    // handle review delete request
    async function handleDeleteReview() {
        try {
            setLoading(true);
            const payload = {
                reviewId: review?._id?.toString(),
                hotelId: hotelData?.data?._id?.toString(),
            };
            const response = await deleteReview(payload);

            if (response?.success === true) {
                setShow(false);
                toast.success("Deleted Successfully");
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='space-y-4 relative bg-gray-50 shadow py-4 px-2 rounded-sm'>
            <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gray-200 rounded-full overflow-hidden'>
                    <Image
                        height={100}
                        width={100}
                        src={review?.user?.image ? review?.user?.image : avatar}
                        alt='Room 2'
                        className='w-full h-full object-cover rounded-lg'
                    />
                </div>
                <div>
                    <h4 className='font-medium'>{review?.user?.name}</h4>
                    <p className='text-gray-500 text-sm'>
                        {new Date(review?.createdAt)
                            .toDateString()
                            .split(" ")
                            .slice(1)
                            .join(" ")}
                    </p>
                </div>
            </div>
            {data?.user?.id === review?.user?._id?.toString() && (
                <div ref={ref} className='content-edit'>
                    <button
                        onClick={togglePopup}
                        className='absolute top-3 right-3'>
                        <PiDotsThreeBold className='font-bold' size={25} />
                    </button>
                    {show && (
                        <div className='absolute top-8 right-1 dropdown bg-gray-200/70 w-24 p-2 rounded'>
                            <ul>
                                <li
                                    onClick={() => setEditReview(true)}
                                    className='transform cursor-pointer text-sm duration-200 hover:bg-gray-200 rounded px-1'>
                                    <button>Edit</button>
                                </li>
                                <hr className='bg-gray-400 my-1 h-[2px]' />
                                <li
                                    onClick={handleDeleteReview}
                                    className='transform cursor-pointer text-sm duration-200 hover:bg-gray-200 rounded px-1'>
                                    <button>
                                        {loading ? "Deleting..." : "Delete"}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {editReview &&
                createPortal(
                    <ReviewForm
                        user={data?.user?.id}
                        hotelInfo={hotelData?.data}
                        onClose={handleClose}
                        reviewData={review}
                    />,
                    document.body
                )}

            <div className='flex items-center'>
                {Array(review?.rating)
                    .fill("-")
                    .map((_, index) => (
                        <FaStar
                            key={index}
                            color='#ffbf00'
                            style={{ margin: "0px 5px" }}
                        />
                    ))}
            </div>
            <p className='text-gray-600 leading-relaxed italic'>
                <q>{review?.review}</q>
            </p>
        </div>
    );
};

export default ReviewCard;
