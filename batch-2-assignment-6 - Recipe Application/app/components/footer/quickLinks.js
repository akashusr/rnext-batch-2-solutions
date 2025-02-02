import links from "@/app/data/links.json";
import Link from "next/link";
const QuickLinks = ({ title, linkSource }) => {
    let footerlinks;
    if (linkSource in links) {
        footerlinks = links[linkSource].map((link) => {
            return (
                <li key={link.id}>
                    <Link
                        href={link.path}
                        className='text-gray-600 hover:text-orange-500'>
                        {link.title}
                    </Link>
                </li>
            );
        });
    }
    return (
        <div>
            <h4 className='font-semibold mb-4'>{title}</h4>
            <ul className='space-y-2'>{footerlinks}</ul>
        </div>
    );
};

export default QuickLinks;
