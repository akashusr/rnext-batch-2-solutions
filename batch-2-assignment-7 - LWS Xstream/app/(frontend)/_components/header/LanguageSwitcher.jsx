"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CarretDownIcon from "../svg/CarretDownIcon";
import { supportedLocales } from "@/middleware";
import bnFlag from "@/public/assets/flag/bn.png";
import enFlag from "@/public/assets/flag/en.png";
import { useParams, usePathname, useRouter } from "next/navigation";
import { redirectTo } from "../../_serverActions";

const LanguageSwitcher = () => {
    const supportedLanguages = supportedLocales;
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const [showLocals, setShowLocals] = useState(false);
    const [locale, setLocale] = useState(params.lang);

    // set and remove locale from session storage
    useEffect(() => {
        sessionStorage.setItem("locale", locale);
        return () => sessionStorage.removeItem("locale");
    }, [locale]);

    //get flag
    function getFlag(language) {
        let languageFlag;
        if (language === "en") languageFlag = enFlag;
        if (language === "bn") languageFlag = bnFlag;
        return languageFlag;
    }

    // change locale
    function changeLocale(locale) {
        const splittedPath = pathname.split("/");
        if (splittedPath.length > 0 && splittedPath[1] !== locale) {
            splittedPath[1] = locale;
        }
        const newPath = `${splittedPath.join("/")}`;
        redirectTo(newPath);
    }

    // handle locale
    function handleLocale(language) {
        setLocale(language);
        setShowLocals(false);
        changeLocale(language);
    }

    return (
        <div className='relative'>
            <div className='flex gap-1 bg-gray-600/30 rounded'>
                <Image src={getFlag(locale)} height={5} width={25} alt='en' />{" "}
                <span>{locale.toUpperCase()}</span>
                <span
                    onClick={() => setShowLocals(true)}
                    className='border-l border-gray-300 cursor-pointer'>
                    <CarretDownIcon />
                </span>
            </div>
            {showLocals && (
                <div className='language-drpdown absolute top-[29px] z-50  bg-gray-700 p-1 rounded'>
                    <ul className='flex flex-col gap-2'>
                        {supportedLanguages.map((language) => (
                            <li
                                onClick={() => handleLocale(language)}
                                key={language}
                                className='flex gap-2 cursor-pointer px-3 min-w-[40px] hover:bg-gray-600 border-b border-gray-600/80 hover:rounded'>
                                <Image
                                    src={getFlag(language)}
                                    height={5}
                                    width={25}
                                    alt={language}
                                />
                                <span className='pr-4'>
                                    {language.toUpperCase()}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
