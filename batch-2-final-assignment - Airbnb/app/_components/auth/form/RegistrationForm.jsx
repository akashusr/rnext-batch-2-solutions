"use client";
import { registerWithCredentials } from "@/app/_actions/authActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import LoadingSpinner from "../../common/LoadingSpinner";
import FormDevider from "../FormDevider";
import GoogleSignInButton from "../GoogleSignInButton";
import InputFiled from "../InputFiled";
import PasswordFiled from "../PasswordFiled";

const RegistrationForm = ({ dictionary, validationMessage, toastMessages }) => {
    const [alert, setAlert] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        clearErrors,
        watch,
    } = useForm();

    async function onSubmit(data) {
        const response = await registerWithCredentials(data);
        if (response?.error) {
            setError("global", {
                type: "manual",
                message: validationMessage?.emailUsed,
            });
            setAlert(true);
        }

        if (response.status === 200) {
            setTimeout(() => {
                toast.success(toastMessages?.registerdSuccess);
            }, 5);
            router.push("/login");
        }
    }

    return (
        <>
            {alert && (
                <div className=' global-error bg-red-500/80 border border-red-600 px-2 py-2 rounded-md flex items-center justify-between'>
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
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <InputFiled
                    register={{
                        ...register("name", {
                            required: validationMessage?.nameIsRequired,
                        }),
                    }}
                    name='name'
                    id='name'
                    type='text'
                    placeholder={dictionary?.name}
                    error={errors?.name}
                />
                <InputFiled
                    register={{
                        ...register("email", {
                            required: validationMessage?.emailIsRequired,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: validationMessage?.invalidEmail,
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
                            required: validationMessage?.passwordIsRequired,
                            minLength: {
                                value: 6,
                                message: validationMessage?.passwordLength,
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                                message: validationMessage?.passwordFormate,
                            },
                        }),
                    }}
                    error={errors?.password}
                />
                <PasswordFiled
                    name='confpassword'
                    id='confpassword'
                    type='password'
                    placeholder={dictionary?.confirmPassword}
                    register={{
                        ...register("confpassword", {
                            required: validationMessage?.confirmPassword,
                            validate: (value) =>
                                watch("password") === value ||
                                validationMessage?.notMatchedPassword,
                        }),
                    }}
                    error={errors?.confpassword}
                />
                <button
                    disabled={isSubmitting}
                    type='submit'
                    className='w-full flex justify-center item-center bg-primary text-white rounded-full py-3 hover:bg-primary transition'>
                    {isSubmitting && <LoadingSpinner />} {dictionary?.continue}
                </button>
            </form>
            <FormDevider />
            <GoogleSignInButton
                dictionary={dictionary}
                disabled={isSubmitting}
            />
        </>
    );
};

export default RegistrationForm;
