import socialLinks from "@/app/data/socialLinks";
import InstagramIcon from "@/app/svg/instagramIcon";
import TwitterIcon from "@/app/svg/twitterIcon";
import YoutubeIcon from "@/app/svg/youtubeIcon";
import Link from "next/link";

const SocialIconsWithLinks = () => {
    return (
        <div className='flex space-x-4'>
            <Link
                href={socialLinks.twitter.link}
                className=' twitter text-gray-400 hover:text-orange-500'>
                <TwitterIcon />
            </Link>
            <Link
                href={socialLinks.instagram.link}
                className='instagram text-gray-400 hover:text-orange-500'>
                <InstagramIcon />
            </Link>
            <Link
                href={socialLinks.youtube.link}
                className='twitter text-gray-400 hover:text-orange-500'>
                <YoutubeIcon />
            </Link>
        </div>
    );
};

export default SocialIconsWithLinks;
