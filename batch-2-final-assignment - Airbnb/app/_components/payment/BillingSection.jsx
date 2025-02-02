const BillingSection = ({ hotelId, children, dictionary }) => {
    return (
        <div>
            <section className='mb-8'>
                <h2 className='text-xl font-semibold mb-4'>
                    {dictionary?.checkout?.yourTrip}
                </h2>
                {/* Dates */}
                {children}
            </section>
        </div>
    );
};

export default BillingSection;
