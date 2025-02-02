import { staticMetaDataObject } from "@/app/_lib/staticMetaDataObject";
import Header from "../../_components/header/Header";

export const metadata = staticMetaDataObject();

export default function MainLayout({ children }) {
    return (
        <div className='bg-black text-white min-h-screen'>
            <Header />
            {children}
        </div>
    );
}
