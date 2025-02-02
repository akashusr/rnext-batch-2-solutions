import Image from "next/image";
import React from "react";

const Profile = () => {
    return (
        <Image
            src='/assets/avatar.png'
            height={50}
            width={50}
            alt='User Avatar'
            className='w-8 h-8 rounded-full'
        />
    );
};

export default Profile;
