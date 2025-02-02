import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
    title: "LWS-X-Airbnb",
    description: "Find your hotels to stay in your destination",
    keywords: ["Airbnb", "hotel", "tour&travels"],
    openGraph: {
        title: "LWS-X-Airbnb",
        description: "Find your hotels to stay in your destination",
        url: "https://lws-x-airbnb.vercel.app",
        siteName: "LWS-X-Airbnb",
        images: [
            {
                url: "https://res.cloudinary.com/devripon/image/upload/v1736573151/siteBanner_itlixz.png",
                width: 800,
                height: 600,
            },
            {
                url: "https://res.cloudinary.com/devripon/image/upload/v1736573151/siteBanner_itlixz.png",
                width: 1800,
                height: 1600,
                alt: "My custom alt",
            },
        ],
        type: "website",
    },
};

export default async function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='dark:bg-gray-950'>
                <SessionProvider>
                    {children}
                    <Toaster position='bottom-right' />
                </SessionProvider>
            </body>
        </html>
    );
}
