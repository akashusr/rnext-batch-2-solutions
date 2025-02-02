import Header from "../_components/header/Header";

export const metadata = {
    title: "LWS Xstream - Video Streaming",
    description: "Videos Streaming Application by Learn With Sumit",
};

export default function FrontendLayout({
    children,
    singleVideo,
    params: { lang },
}) {
    return (
        <main className='bg-color-bg text-white font-exo'>
            <div className='container mx-auto px-4 py-4'>
                <Header lang={lang} />
                {singleVideo}
                {children}
            </div>
        </main>
    );
}
