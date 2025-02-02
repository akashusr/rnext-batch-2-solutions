import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./globals.css";

export const metadata = {
    title: "LWS Kitchen - Food Blog and Recipes",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='UTF-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <link
                    rel='shortcut icon'
                    href='/assets/fav.png'
                    type='image/x-icon'
                />
            </head>

            <body className='bg-white'>
                <Header />
                <main className='container mx-auto px-4 mt-[100px]'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

