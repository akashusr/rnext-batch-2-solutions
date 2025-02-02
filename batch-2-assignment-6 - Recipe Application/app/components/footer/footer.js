import React from "react";
import FooterInfo from "./footerInfo";
import CopyrightText from "./copyrightText";
import QuickLinks from "./quickLinks";
import SocialIconsWithLinks from "./socialIconsWithLinks";

const Footer = () => {
    return (
        <footer className='bg-gray-100 py-8'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-4 gap-8'>
                    <FooterInfo />
                    <QuickLinks
                        title='LWS Kitchen'
                        linkSource='footerQuickLinks'
                    />
                    <QuickLinks title='Legal' linkSource='legalLinks' />
                    <QuickLinks title='Follow' linkSource='socialLinks' />
                </div>
                <div className='mt-8 pt-8 border-t border-gray-200 flex justify-between items-center'>
                    <CopyrightText />
                    <SocialIconsWithLinks />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
