import { getDictionary } from "@/app/(frontend)/[lang]/_dictionaries/dictionaries";
import Link from "next/link";
import RegistrationForm from "./form/RegistrationForm";

const RegisterPageCard = async ({ lang }) => {
    const { loginRegister, validations, toast } = await getDictionary(lang);
    return (
        <>
            <div className='text-center mb-6'>
                <h2 className='text-2xl dark:text-gray-300 font-bold text-gray-800'>
                    {loginRegister?.registerFormTitle}
                </h2>
                <p className='text-gray-600 dark:text-gray-300 text-sm mt-2'>
                    {loginRegister?.registerFormWelcomeText}
                </p>
            </div>

            <div className='space-y-4 mb-4'>
                <RegistrationForm
                    validationMessage={validations}
                    toastMessages={toast}
                    dictionary={loginRegister}
                />
            </div>

            <div className='text-center text-sm text-gray-600'>
                <p>
                    {loginRegister?.alreadyHaveAnAccount}
                    <Link
                        href='/login'
                        replace
                        className='text-primary hover:underline'>
                        {loginRegister?.login}
                    </Link>
                </p>
            </div>
        </>
    );
};

export default RegisterPageCard;
