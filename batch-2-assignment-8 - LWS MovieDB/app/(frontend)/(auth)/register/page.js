import Link from "next/link";
import RegistrationForm from "../../../_components/auth/forms/RegistrationForm";

export default function RegistrationPage() {
    return (
        <div className='w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl'>
            <div className='text-center'>
                <h1 className='text-white text-3xl font-bold mb-6'>
                    Create Your Account
                </h1>
                <RegistrationForm />
                <div className='mt-6 text-moviedb-gray'>
                    Already have an account?
                    <Link
                        href='/login'
                        className='mx-2 text-white hover:underline'>
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
