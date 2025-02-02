import ContactForm from './contact/ContactForm';
import LocationIcon from './icons/LocationIcon';
import MailIcon from './icons/MailIcon';

export default function Contact() {
    const contactdata = {
        heading: 'CONTACT US',
        text: "Let's talk about your problem.",
        location: '401 Broadway, 24th Floor, Orchard Cloud View, London',
        email1: 'info@yourdomain.com',
        email2: 'contact@yourdomain.com',
    };
    return (
        <section id="contact" className="relative py-20 md:py-[120px]">
            <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
            <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
            <div className="container px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div className="ud-contact-content-wrapper">
                            <div className="ud-contact-title mb-12 lg:mb-[150px]">
                                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                                    {contactdata.heading}
                                </span>
                                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                                    {contactdata.text}
                                </h2>
                            </div>
                            <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                                <div className="mb-8 flex w-[330px] max-w-full">
                                    <div className="mr-6 text-[32px] text-primary">
                                        <LocationIcon className="fill-current h-[35px] w-[29px]" />
                                    </div>
                                    <div>
                                        <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                                            Our Location
                                        </h5>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            {contactdata.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-[330px] max-w-full">
                                    <div className="mr-6 text-[32px] text-primary">
                                        <MailIcon className="fill-current h-[25px] w-[34px]" />
                                    </div>
                                    <div>
                                        <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                                            How Can We Help?
                                        </h5>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            {contactdata.email1}
                                        </p>
                                        <p className="mt-1 text-base text-body-color dark:text-dark-6">
                                            {contactdata.email2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
