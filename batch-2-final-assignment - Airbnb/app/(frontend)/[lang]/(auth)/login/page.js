import LoginPageCard from "@/app/_components/auth/LoginPageCard";

export default function LoginPage({ params: { lang } }) {
    return (
        <div className='min-h-[calc(100vh-200px)]   flex items-center justify-center'>
            <div className=' border rounded-xl shadow-xl w-96 p-6 relative shadow-black/50'>
                <LoginPageCard lang={lang} />
            </div>
        </div>
    );
}
