import { useForm } from "react-hook-form";
import InputField from "../../../components/common/InputField";
import cn from "../../../utils/cn";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../api/authentication";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import PasswordInput from "../../../components/common/PasswordInput";
import Alert from "../../../components/common/Alert";

const LoginForm = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    //login query
    const { isPending, mutate } = useMutation({
        mutationFn: login,
        mutationKey: ["auth/login"],
        onSuccess: (response) => {
            const { data } = response;
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    user: data.user,
                    accessToken: data.tokens?.accessToken,
                    refreshToken: data.tokens?.refreshToken,
                })
            );

            setAuth({
                user: data.user,
                accessToken: data.tokens?.accessToken,
                refreshToken: data.tokens?.refreshToken,
            });

            if (response && response?.data?.user?.role === "admin") {
                setTimeout(
                    () =>
                        navigate("/admin/dashboard/quizzes", { replace: true }),
                    0
                );
            } else {
                navigate("/", { replace: true });
            }
        },
        onError: (error) => {
            setError("root", {
                type: "loginError",
                message: error.message.includes("AxiosError:")
                    ? error.message.split(":")[1]
                    : error.message,
            });
        },
    });

    //submit login form and make api call
    function handleFormSubmission(formData) {
        mutate(formData);
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmission)}>
            <InputField
                htmlFor='email'
                label='Enter your Email'
                error={errors?.email}>
                <input
                    {...register("email", {
                        required: "Email is required*",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                    type='email'
                    id='email'
                    name='email'
                    className={cn(
                        ` dark:bg-dark-secondary dark:text-dark-textPrimary w-full px-4 py-3 rounded-lg border border-gray-300 `,
                        errors?.email && "border-red-500 focus:outline-red-500"
                    )}
                    placeholder='Username or email address'
                />
            </InputField>
            <InputField
                className='mb-6'
                label='Enter your Password'
                htmlFor='password'
                error={errors?.password}>
                <PasswordInput
                    name='password'
                    id='password'
                    register={register}
                    errors={errors}
                    validations={{
                        required: "Password is required*",
                    }}
                />
            </InputField>

            {errors?.root && <Alert text={errors?.root?.message} />}

            <button
                type='submit'
                disabled={isPending}
                className='w-full bg-primary text-white py-3 rounded-lg mb-4'>
                {isPending ? "Signing in..." : "Sign In"}
            </button>
        </form>
    );
};

export default LoginForm;
