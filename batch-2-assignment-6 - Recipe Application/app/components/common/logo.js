import logoImage from "@/public/assets/lws-kitchen.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/' className='text-3xl font-bold'>
            <Image src={logoImage} alt='logo' height='40' />
        </Link>
    );
};

export default Logo;
