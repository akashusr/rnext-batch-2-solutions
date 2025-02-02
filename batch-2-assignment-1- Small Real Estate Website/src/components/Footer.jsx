import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import TwitterIcon from './icons/TwitterIcon';

function FooterNavItem({ name = 'Menu Item', link = '' }) {
    return (
        <li className="group relative">
            <li>
                <a
                    href={link}
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                >
                    {name}
                </a>
            </li>
        </li>
    );
}

function FooterBlogCard({ image, title = '', link }) {
    return (
        <a href={link} className="group flex items-center gap-[22px]">
            <div className="overflow-hidden rounded">
                <img src={image} alt="blog" />
            </div>
            <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                {title}
            </span>
        </a>
    );
}

export default function Footer() {
    const footerData = {
        text: 'We create digital experiences for brands and companies by using technology.',
        fbLink: '#',
        twitterLink: '#',
        instaLink: '#',
        linkedinLink: '#',
        blog: [
            {
                link: '#',
                image: '/assets/images/blog/blog-footer-01.jpg',
                title: 'I think really important to design with...',
            },
            {
                link: '#',
                image: '/assets/images/blog/blog-footer-02.jpg',
                title: 'Recognizing the need is the primary...',
            },
        ],
    };

    return (
        <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
                        <div className="mb-10 w-full">
                            <a
                                href="#"
                                className="mb-6 inline-block  max-h-[100px]"
                            >
                                <img
                                    src="assets/images/logo/logo.svg"
                                    alt="logo"
                                    className="max-w-full"
                                />
                            </a>
                            <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                                {footerData.text}
                            </p>
                            <div className="-mx-3 flex items-center">
                                <a
                                    href={footerData.fbLink}
                                    className="px-3 text-gray-7 hover:text-white"
                                >
                                    <FacebookIcon className="fill-current h-[22px] w-[22px]" />
                                </a>
                                <a
                                    href={footerData.twitterLink}
                                    className="px-3 text-gray-7 hover:text-white"
                                >
                                    <TwitterIcon className="fill-current h-[22px] w-[22px]" />
                                </a>
                                <a
                                    href={footerData.instaLink}
                                    className="px-3 text-gray-7 hover:text-white"
                                >
                                    <InstagramIcon className="fill-current h-[22px] w-[22px]" />
                                </a>
                                <a
                                    href={footerData.linkedinLink}
                                    className="px-3 text-gray-7 hover:text-white"
                                >
                                    <LinkedinIcon className="fill-current h-[22px] w-[22px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-white">
                                About Us
                            </h4>
                            <ul>
                                <FooterNavItem name="Home" link="#" />
                                <FooterNavItem name="Features" link="#" />
                                <FooterNavItem name="About" link="#" />
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-white">
                                Features
                            </h4>
                            <ul>
                                <FooterNavItem name="How it works" link="#" />
                                <FooterNavItem name="Privacy policy" link="#" />
                                <FooterNavItem
                                    name="Terms of Service"
                                    link="#"
                                />
                                <FooterNavItem name="Refund policy" link="#" />
                            </ul>
                        </div>
                    </div>

                    <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-white">
                                Latest blog
                            </h4>
                            <div className="flex flex-col gap-8">
                                <FooterBlogCard
                                    image={footerData.blog[0].image}
                                    title={footerData.blog[0].title}
                                    link={footerData.blog[0].link}
                                />
                                <FooterBlogCard
                                    image={footerData.blog[1].image}
                                    title={footerData.blog[1].title}
                                    link={footerData.blog[1].link}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
