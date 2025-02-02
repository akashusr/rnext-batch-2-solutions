"use client";
import { createUser } from "@/app/_lib/AuthActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import ErrorCard from "../../common/ErrorCard";
import InputFiled from "../InputFiled";
import PasswordFiled from "../PasswordFiled";

const RegistrationForm = () => {
    const [formState, dispatchAction] = useFormState(createUser, {});
    const ref = useRef(null);
    const { pending } = useFormStatus();
    const [agreed, setAgreed] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (formState?.error) {
            setErrors(formState?.error);
        }
        if (formState?.success) {
            ref.current.reset();
            toast.success("Account created successfully, please login");
            router.push("/login");
        }
    }, [formState?.error, formState?.success, router]);

    return (
        <form
            ref={ref}
            action={dispatchAction}
            id='signupForm'
            className='space-y-4'>
            <InputFiled
                name='fname'
                id='fname'
                type='text'
                placeholder='First Name'
                error={errors?.fname}
                onChange={(e) => setErrors({ ...errors, fname: "" })}
            />
            <InputFiled
                name='lname'
                id='lname'
                type='text'
                placeholder='Last Name'
                error={errors?.lname}
                onChange={(e) => setErrors({ ...errors, lname: "" })}
            />
            <InputFiled
                type='email'
                name='email'
                id='email'
                placeholder='Email Address'
                error={errors?.email}
                onChange={(e) => setErrors({ ...errors, email: "" })}
            />
            <PasswordFiled
                name='password'
                id='password'
                placeholder='Create Password'
                error={errors?.password}
                onChange={(e) => setErrors({ ...errors, password: "" })}
            />
            <PasswordFiled
                name='confirmPassword'
                id='confirmPassword'
                placeholder='Confirm Password'
                error={errors?.confirmPassword}
                onChange={(e) => setErrors({ ...errors, confirmPassword: "" })}
            />
            <div className='text-left text-moviedb-gray text-sm'>
                <label className='flex items-center'>
                    <input
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        type='checkbox'
                        className='mr-2'
                        required
                    />
                    I agree to the{" "}
                    <Link className='mx-2 text-blue-500 underline' href='#'>
                        Terms
                    </Link>{" "}
                    of Service and
                    <Link className='mx-2 text-blue-500 underline' href='#'>
                        Privacy Policy
                    </Link>
                </label>
            </div>
            <div className='error-message'>
                {errors?.serverError && (
                    <ErrorCard
                        onClose={() =>
                            setErrors({ ...errors, serverError: "" })
                        }
                        message={errors.serverError}
                    />
                )}
            </div>

            <button
                disabled={!agreed || pending}
                type='submit'
                className='w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300'>
                {pending ? (
                    <>
                        <div className='spinner'></div> Signing Up...
                    </>
                ) : (
                    "Sign Up"
                )}
            </button>
        </form>
    );
};

export default RegistrationForm;
