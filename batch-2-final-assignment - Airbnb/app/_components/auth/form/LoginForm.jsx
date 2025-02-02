"use client";

import { loginWithCredentials } from "@/app/_actions/authActions";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineClose } from "react-icons/md";
import LoadingSpinner from "../../common/LoadingSpinner";
import FormDevider from "../FormDevider";
import GoogleSignInButton from "../GoogleSignInButton";
import InputFiled from "../InputFiled";
import PasswordFiled from "../PasswordFiled";

const LoginForm = ({ dictionary, validationMessages }) => {
    const [alert, setAlert] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        clearErrors,
    } = useForm();

    async function onSubmit(data) {
        const response = await loginWithCredentials(data);

        if (response?.error) {
            setError("global", {
                type: "manual",
                message: validationMessages?.serverSideError,
            });
            setAlert(true);
        }

        if (response?.success) {
            await getSession();
            router.push("/");
        } else {
            setError("global", {
                type: "manual",
                message: validationMessages?.invalidCredentials,
            });
        }
    }

    return (
        <div className=''>
            {alert && (
                <div className='global-error bg-red-500/80 border border-red-600 px-2 py-2 rounded-md flex items-center justify-between'>
                    <p className='text-white'>{errors?.global?.message}</p>
                    <button
                        onClick={() => {
                            setAlert(false);
                            clearErrors("global");
                        }}>
                        <MdOutlineClose />
                    </button>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
                <InputFiled
                    register={{
                        ...register("email", {
                            required: validationMessages?.emailIsRequired,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: validationMessages?.invalidEmail,
                            },
                        }),
                    }}
                    name='email'
                    id='email'
                    type='email'
                    placeholder={dictionary?.email}
                    error={errors?.email}
                />
                <PasswordFiled
                    name='password'
                    id='password'
                    type='password'
                    placeholder={dictionary?.password}
                    register={{
                        ...register("password", {
                            required: validationMessages?.passwordIsRequired,
                            minLength: {
                                value: 6,
                                message: validationMessages?.passwordLength,
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                                message: validationMessages?.passwordFormate,
                            },
                        }),
                    }}
                    error={errors?.password}
                />
                <button
                    disabled={isSubmitting}
                    type='submit'
                    className='w-full bg-primary text-white flex justify-center items-center rounded-full py-3 hover:bg-primary transition'>
                    {isSubmitting && <LoadingSpinner />}
                    {dictionary?.continue}
                </button>
            </form>
            <FormDevider />
            <GoogleSignInButton
                dictionary={dictionary}
                disabled={isSubmitting}
            />
        </div>
    );
};

export default LoginForm;
