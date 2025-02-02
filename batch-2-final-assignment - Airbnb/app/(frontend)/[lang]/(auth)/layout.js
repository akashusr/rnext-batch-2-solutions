import { auth } from "@/auth";
import { supportedLocales } from "@/middleware";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
    return supportedLocales.map((locale) => ({ lang: locale }));
}
export default async function AuthLayout({ children }) {
    const session = await auth();
    if (session?.user?.id) {
        return redirect("/");
    }
    return <div>{children}</div>;
}
