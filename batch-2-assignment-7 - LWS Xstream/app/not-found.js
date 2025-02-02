"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "./(frontend)/[lang]/_dictionaries/dictionaries";

export default function NotFound() {
    const pathname = usePathname();
    const lang = pathname.split("/")[1];
    const [dictionary, setDictionary] = useState({});

    useEffect(() => {
        let isComponentRenderd = true;
        async function getDictionaries(lang) {
            const dict = await getDictionary(lang);
            if (isComponentRenderd) {
                setDictionary({ ...dict });
            }
        }
        getDictionaries(lang);
        return () => {
            isComponentRenderd = false;
        };
    }, [lang]);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-color-bg text-center px-4'>
            <h1 className='text-6xl font-bold text-indigo-800  mb-4'>
                {dictionary[404]}
            </h1>
            <h2 className='text-2xl font-semibold text-gray-200 mb-2'>
                {dictionary.pageNotFound}
            </h2>
            <p className='text-gray-200 mb-6'>
                {dictionary.requestdPageNotFound}
            </p>
            <Link
                href={`/${lang}/`}
                className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>
                {dictionary.goBackToHome}
            </Link>
        </div>
    );
}
