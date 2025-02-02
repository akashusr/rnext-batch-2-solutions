import FeatureCard from './features/FeatureCard';
import AppsIcon from './icons/AppsIcon';
import GiftIcon from './icons/GiftIcon';
import LayerIcon from './icons/LayerIcon';
import LayoutIcon from './icons/LayoutIcon';

export default function Features() {
    const featureData = {
        sectionTitle: 'Features',
        sectionHeading: 'Main Features Of Play',
        sectionText:
            'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.',
    };

    const featuresData = [
        {
            title: 'Premium Property Listings',
            description:
                'Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.',
            buttonText: 'Learn More',
            link: '#',
            icon: <GiftIcon />,
        },
        {
            title: 'Personalized Property Matching',
            description:
                'Our advanced matching system pairs you with properties that align with your specific needs and desires.',
            buttonText: 'Learn More',
            link: '#',
            icon: <LayoutIcon />,
        },
        {
            title: 'Expert Guidance and Support',
            description:
                'Benefit from the expertise of our dedicated team of real estate professionals.',
            buttonText: 'Learn More',
            link: '#',
            icon: <LayerIcon />,
        },
        {
            title: 'Virtual Tours',
            description:
                'Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.',
            buttonText: 'Learn More',
            link: '#',
            icon: <AppsIcon />,
        },
    ];
    return (
        <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                {featureData.sectionTitle}
                            </span>
                            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                {featureData.sectionHeading}
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                {featureData.sectionText}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    {featuresData.map(featureData => {
                        return <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                            <FeatureCard
                                title={featureData.title}
                                description={featureData.description}
                                buttonText={featureData.buttonText}
                                link={featureData.link}
                                icon={featureData.icon}
                                key={featureData.title}
                            />
                        </div>
                    })}

                </div>
            </div>
        </section>
    );
}
