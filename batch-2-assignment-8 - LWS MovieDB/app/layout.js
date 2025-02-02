import MyToaster from "./_components/common/MyToaster";
import { staticMetaDataObject } from "./_lib/staticMetaDataObject";
import "./globals.css";

export const metadata = staticMetaDataObject();

export default async function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='bg-black'>
                {children}
                <MyToaster />
            </body>
        </html>
    );
}
