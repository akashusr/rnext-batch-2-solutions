"use client";
import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
} from "react-share";

const SocialShareHandler = ({ url, title }) => {
    return (
        <div className='mb-6'>
            <h3 className='text-gray-400 mb-2'>Share on social media</h3>
            <div className='flex flex-wrap gap-6'>
                <TwitterShareButton url={url} title={title}>
                    <XIcon size={45} round={true} />
                    <p className='text-sm'>X</p>
                </TwitterShareButton>
                <FacebookShareButton url={url} quote={title}>
                    <FacebookIcon size={45} round={true} />
                    <p className='text-sm'>Facebook</p>
                </FacebookShareButton>
                <LinkedinShareButton url={url} title={title}>
                    <LinkedinIcon size={45} round={true} />
                    <p className='text-sm'>Linkedin</p>
                </LinkedinShareButton>
                <WhatsappShareButton url={url} title={title}>
                    <WhatsappIcon size={45} round={true} />
                    <p className='text-sm'>Whatsapp</p>
                </WhatsappShareButton>
            </div>
        </div>
    );
};

export default SocialShareHandler;
