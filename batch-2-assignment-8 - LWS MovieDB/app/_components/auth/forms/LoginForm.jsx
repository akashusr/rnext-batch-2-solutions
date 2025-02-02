"use client";
import { loginUser } from "@/app/_lib/AuthActions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import ErrorCard from "../../common/ErrorCard";
import InputFiled from "../InputFiled";
import PasswordFiled from "../PasswordFiled";

const LoginForm = () => {
    const [formState, dispatchAction] = useFormState(loginUser, {});
    const { pending } = useFormStatus();
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (formState?.error) {
            setErrors(formState?.error);
        }
        if (formState?.success) {
            const authData = {
                user: formState?.data,
                accessToken: formState?.token,
            };

            router.push("/");
        }
    }, [
        formState?.data,
        formState?.error,
        formState?.success,
        formState?.token,
        router,
    ]);

    return (
        <form action={dispatchAction} id='loginForm' className='space-y-4'>
            <InputFiled
                type='email'
                name='email'
                id='email'
                placeholder='Email Address'
                error={errors?.email}
                onChange={(e) =>
                    setErrors({ ...errors, email: "", serverError: "" })
                }
            />
            <PasswordFiled
                name='password'
                id='password'
                placeholder='Your Password'
                error={errors?.password}
                onChange={(e) =>
                    setErrors({ ...errors, password: "", serverError: "" })
                }
            />
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
                disabled={pending}
                type='submit'
                className='w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300'>
                {pending ? (
                    <>
                        <div className='spinner'></div> Loging in...
                    </>
                ) : (
                    "Log In"
                )}
            </button>
        </form>
    );
};

export default LoginForm;
