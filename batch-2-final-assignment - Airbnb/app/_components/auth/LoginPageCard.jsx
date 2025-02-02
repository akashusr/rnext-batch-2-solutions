import { getDictionary } from "@/app/(frontend)/[lang]/_dictionaries/dictionaries";
import Link from "next/link";
import LoginForm from "./form/LoginForm";

const LoginPageCard = async ({ lang }) => {
    const { loginRegister, validations } = await getDictionary(lang);

    return (
        <div className=''>
            <div className=' text-center mb-6'>
                <h2 className='text-2xl dark:text-gray-300 font-bold text-gray-800'>
                    {loginRegister?.loginFormTitle}
                </h2>
                <p className='text-gray-600 dark:text-gray-300 text-sm mt-2'>
                    {loginRegister?.loginFormWelcomeText}
                </p>
            </div>

            <div className='space-y-4 mb-4'>
                <LoginForm
                    validationMessages={validations}
                    dictionary={loginRegister}
                />
            </div>

            <div className='text-center text-sm text-gray-600'>
                <p>
                    {loginRegister?.dontHaveAnAccount}
                    <Link
                        href='/register'
                        replace
                        className='text-primary hover:underline'>
                        {loginRegister?.signUp}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPageCard;
