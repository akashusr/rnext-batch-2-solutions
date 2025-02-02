import RegisterPageCard from "@/app/_components/auth/RegisterPageCard";

export default function RegisterPage({ params: { lang } }) {
    return (
        <div className='min-h-[calc(100vh-200px)]  flex items-center justify-center'>
            <div className='rounded-xl shadow-xl w-96 p-6 relative shadow-black/50'>
                <RegisterPageCard lang={lang} />
            </div>
        </div>
    );
}
