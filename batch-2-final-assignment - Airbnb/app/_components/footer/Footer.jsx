import { footerLinks_bn, footerLinks_en } from "@/lib/menuLinks";
import Link from "next/link";

const Footer = ({ dictionary, lang }) => {
    let footerLinks;

    if (lang === "en") {
        footerLinks = footerLinks_en;
    } else if (lang === "bn") {
        footerLinks = footerLinks_bn;
    }

    return (
        <footer className='mt-12 text-sm text-zinc-500 max-w-7xl mx-auto py-4'>
            <p>
                {dictionary?.footer?.copywrightText}
                {footerLinks?.map((item) => (
                    <Link className='' href={item?.path} key={item?.id}>
                        <span className='mx-1 size-6'>•</span>
                        {item?.title}
                    </Link>
                ))}
            </p>
        </footer>
    );
};

export default Footer;
