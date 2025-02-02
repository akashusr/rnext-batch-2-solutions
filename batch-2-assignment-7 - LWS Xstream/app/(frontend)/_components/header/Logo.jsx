import Image from "next/image";
import React from "react";
import logoImage from "@/public/assets/logo.svg";

const Logo = () => {
    return (
        <Image
            src={logoImage}
            alt='LWS Xstream Logo'
            height={100}
            width={204}
        />
    );
};

export default Logo;
