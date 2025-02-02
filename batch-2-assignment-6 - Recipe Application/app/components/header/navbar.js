import links from "@/app/data/links.json";
import Link from "next/link";
const Navbar = () => {
    const { mainMenuLinks } = links;
    let content;
    if (mainMenuLinks.length > 0) {
        content = mainMenuLinks.map((link) => {
            return (
                <li key={link.id}>
                    <Link href={link.path} className='hover:text-orange-500'>
                        {link.title}
                    </Link>
                </li>
            );
        });
    }

    return <ul className='hidden md:flex space-x-6'>{content}</ul>;
};

export default Navbar;
