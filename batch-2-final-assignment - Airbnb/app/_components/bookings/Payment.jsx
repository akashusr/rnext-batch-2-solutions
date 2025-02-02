import { cn } from "@/utils/cn";

const Payment = ({
    paymentInfo,
    setPaymentInfo,
    register,
    errors,
    clearErrors,
    dictionary,
}) => {
    return (
        <section className='mb-8'>
            <h2 className='text-xl font-semibold mb-4'>
                {dictionary?.checkout?.payWithAmericanExpress}
            </h2>
            <div className='space-y-4'>
                {errors?.cardnumber && (
                    <p className='text-red-500 text-sm -mb-3'>
                        {errors?.cardnumber?.message}
                    </p>
                )}
                <input
                    {...register("cardnumber", {
                        required: dictionary?.validations?.enterCardNumber,
                        validate: (value) =>
                            value.length === 13 ||
                            dictionary?.validations?.cardNumberDigit,
                    })}
                    name='cardnumber'
                    id='cardnumber'
                    value={paymentInfo?.cardnumber}
                    type='text'
                    onChange={(e) => {
                        clearErrors("cardnumber");
                        const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                        setPaymentInfo((info) => ({
                            ...info,
                            cardnumber: value,
                        }));
                    }}
                    placeholder={dictionary?.checkout?.cardNumber}
                    className={cn(
                        `w-full p-3 border rounded-lg dark:bg-gray-900`,
                        errors?.cardnumber &&
                            " focus:border-red-500 outline-2 outline-red-500 border-red-500 border-2 rounded"
                    )}
                />

                <div className='grid grid-cols-2 gap-4'>
                    <div className='group'>
                        {errors?.expiresIn && (
                            <p className='text-red-500 text-sm '>
                                {errors?.expiresIn?.message}
                            </p>
                        )}
                        <input
                            {...register("expiresIn", {
                                required:
                                    dictionary?.validations?.entercardExpiry,
                                pattern: {
                                    value: /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/,
                                    message:
                                        dictionary?.validations
                                            ?.validExpiryDate,
                                },
                                validate: {
                                    notExpired: (value) => {
                                        // Parse the input date
                                        const [day, month, year] = value
                                            .split("-")
                                            .map(Number);
                                        const enteredDate = new Date(
                                            year,
                                            month - 1,
                                            day
                                        );
                                        const today = new Date();

                                        // Check if the date is in the future
                                        if (enteredDate <= today) {
                                            return dictionary?.validations
                                                ?.dateExpired;
                                        }
                                        return true;
                                    },
                                },
                            })}
                            name='expiresIn'
                            id='expiresIn'
                            value={paymentInfo?.expiresIn || ""}
                            onChange={(e) => {
                                clearErrors("expiresIn");
                                setPaymentInfo((info) => ({
                                    ...info,
                                    expiresIn: e.target.value,
                                }));
                            }}
                            type='text'
                            placeholder={`${dictionary?.checkout?.expiration} ( DD-MM-YYYY)`}
                            className={cn(
                                `p-3 border rounded-lg dark:bg-gray-900`,
                                errors?.expiresIn &&
                                    "focus:border-red-500 border-red-500 border-2 rounded"
                            )}
                        />
                    </div>

                    <div className='group'>
                        {errors?.cvv && (
                            <p className='text-red-500 text-sm '>
                                {errors?.cvv?.message}
                            </p>
                        )}
                        <input
                            {...register("cvv", {
                                required: dictionary?.validations?.enterCvv,
                                validate: (value) =>
                                    value.length === 3 ||
                                    dictionary?.validations?.cvvLength,
                            })}
                            id='cvv'
                            name='cvv'
                            value={paymentInfo?.cvv}
                            onChange={(e) => {
                                clearErrors("cvv");
                                const value = e.target.value.replace(/\D/g, "");
                                setPaymentInfo((info) => ({
                                    ...info,
                                    cvv: value,
                                }));
                            }}
                            type='text'
                            placeholder={dictionary?.checkout?.cvv}
                            className={cn(
                                `p-3 border rounded-lg dark:bg-gray-900`,
                                errors?.cvv &&
                                    " focus:border-red-500 border-red-500 border-2 rounded"
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;
