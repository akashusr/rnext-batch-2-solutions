import { FaCircleCheck } from "react-icons/fa6";

const SuccessMessage = ({ dictionary }) => {
    return (
        <div className='text-center my-12'>
            <div className='inline-block p-4 bg-green-100 rounded-full mb-6'>
                <FaCircleCheck className='text-4xl text-primary' />
            </div>
            <h1 className='text-3xl font-bold mb-4'>
                {dictionary?.success?.paymentSuccess}
            </h1>
            <p className='text-zinc-600 mb-8'>
                {dictionary?.success?.bookingConfirmedMessage}
            </p>
        </div>
    );
};

export default SuccessMessage;
