import React from "react";
import SectionHeading from "../common/sectionHeading";

const SubscriptionForm = () => {
    return (
        <section className='mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden'>
            <SectionHeading title=' Deliciousness to your inbox' />
            <p className='text-gray-600 mb-4'>
                Enjoy weekly hand picked recipes and recommendations
            </p>
            <form className='flex flex-col md:flex-row gap-4'>
                <input
                    type='email'
                    placeholder='Email Address'
                    className='flex-grow px-4 py-2 rounded-full'
                />
                <button
                    type='submit'
                    className='bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600'>
                    Join
                </button>
            </form>
        </section>
    );
};

export default SubscriptionForm;
