import LogoImage from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div>
            <Link href='/'>
                <Image
                    src={LogoImage}
                    alt='Site Logo'
                    className='h-8 w-auto'
                    width={100}
                    height={32}
                />
            </Link>
        </div>
    );
};

export default Logo;
