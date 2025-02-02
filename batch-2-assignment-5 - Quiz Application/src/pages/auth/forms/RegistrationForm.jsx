import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import InputField from "../../../components/common/InputField";
import PasswordInput from "../../../components/common/PasswordInput";
import { useForm } from "react-hook-form";
import Alert from "../../../components/common/Alert";
import cn from "../../../utils/cn";
import { useMutation } from "@tanstack/react-query";
import { registration } from "../../../api/authentication";
import toast from "react-hot-toast";

const RegistrationForm = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    auth.accessToken && <Navigate to='/' />;

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm();

    // registration mutation

    const { mutate } = useMutation({
        mutationFn: (formData) => registration(formData),
        onSuccess: () => {
            toast.success("Registration Success! Redirected to login page", {
                position: "top-right",
            });
            navigate("/login");
        },
        onError: (error) => {
            setError("root", {
                type: "random",
                message: error.message.includes("AxiosError:")
                    ? error.message.split(":")[1]
                    : error.message,
            });
        },
    });

    // function onSubmit handler
    function onSubmit(formData) {
        // process form data
        const data = {
            full_name: formData.full_name,
            email: formData.email,
            password: formData.password,
            role: formData.admin ? "admin" : "user",
        };
        mutate(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=''>
            <div className=''>
                <InputField
                    label='Full Name'
                    htmlFor='full_name'
                    className='mb-4'
                    labelClass='block mb-2'
                    error={errors.full_name}>
                    <input
                        {...register("full_name", {
                            required: "Name is Required*",
                        })}
                        type='text'
                        id='full_name'
                        name='full_name'
                        className={cn(
                            ` dark:bg-dark-secondary dark:text-dark-textPrimary w-full px-4 py-3 rounded-lg border border-gray-300`,
                            errors?.full_name &&
                                "border-red-500 focus:outline-red-500"
                        )}
                        placeholder='John Doe'
                    />
                </InputField>
                <InputField
                    label='Email Address'
                    htmlFor='email'
                    className='mb-4'
                    labelClass='block mb-2'
                    error={errors.email}>
                    <input
                        {...register("email", {
                            required: "Email is required*",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address",
                            },
                        })}
                        type='email'
                        id='email'
                        className={cn(
                            `dark:bg-dark-secondary dark:text-dark-textPrimary w-full px-4 py-3 rounded-lg border border-gray-300`,
                            errors?.email &&
                                "border-red-500 focus:border-red-500"
                        )}
                        placeholder='Email address'
                    />
                </InputField>
            </div>
            <div className='flex  gap-4'>
                <InputField
                    parentClass='mb-6'
                    inputClass='w-full px-4 py-3 rounded-lg border border-gray-300'
                    labelClass='block mb-2'
                    htmlFor='password'
                    label='Enter Your Password'
                    error={errors.password}>
                    <PasswordInput
                        register={register}
                        errors={errors}
                        name='password'
                        id='password'
                        validations={{
                            required: "Password field is required",
                            minLength: {
                                value: 8,
                                message:
                                    "Password must be at least 8 characters long",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                message:
                                    "Password must contain at least one uppercase letter, one lowercase letter,and one number",
                            },
                        }}
                    />
                </InputField>

                <InputField
                    parentClass='mb-6'
                    inputClass='w-full px-4 py-3 rounded-lg border border-gray-300'
                    labelClass='block mb-2'
                    htmlFor='repassword'
                    label='Confirm Passworm'
                    error={errors.repassword}>
                    <PasswordInput
                        register={register}
                        errors={errors}
                        name='repassword'
                        id='repassword'
                        validations={{
                            required: "Confirm Password field is required",
                            validate: (value) =>
                                watch("password") === value ||
                                "Passwords do not match",
                        }}
                    />
                </InputField>
            </div>

            <div className='mb-6 flex gap-2 items-center'>
                <input
                    {...register("admin")}
                    type='checkbox'
                    id='admin'
                    name='admin'
                    className='px-4 py-3 rounded-lg border border-gray-300'
                />
                <label htmlFor='admin' className='block '>
                    Register as Admin
                </label>
            </div>
            {errors?.root && <Alert text={errors?.root?.message} />}
            <button
                type='submit'
                className='w-full bg-primary text-white py-3 rounded-lg mb-2'>
                Create Account
            </button>
        </form>
    );
};

export default RegistrationForm;
