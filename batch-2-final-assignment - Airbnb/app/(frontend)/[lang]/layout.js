import Footer from "@/app/_components/footer/Footer";
import Header from "@/app/_components/header/Header";
import { supportedLocales } from "@/middleware";
import ReservationProvider from "@/providers/ReservationProvider";
import { connectMongoDB } from "@/service/mongoConnection";
import { getDictionary } from "./_dictionaries/dictionaries";

export async function generateStaticParams() {
    return supportedLocales.map((locale) => ({ lang: locale }));
}

export default async function FrontEndRootLayout({
    children,
    auth,
    params: { lang },
}) {
    await connectMongoDB();
    const dictionary = await getDictionary(lang);
    return (
        <div>
            <ReservationProvider>
                <Header dictionary={dictionary} lang={lang} />
                {children}
                <Footer lang={lang} dictionary={dictionary} />
            </ReservationProvider>
        </div>
    );
}
