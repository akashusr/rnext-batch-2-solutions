import { supportedLocales } from "@/middleware";
import { connectMongoDB } from "@/service/mongoConnection";
export async function generateStaticParams() {
    return supportedLocales.map((locale) => ({ lang: locale }));
}

export default async function MainLayout({ children, auth }) {
    await connectMongoDB();
    return (
        <div>
            {auth}
            {children}
        </div>
    );
}
