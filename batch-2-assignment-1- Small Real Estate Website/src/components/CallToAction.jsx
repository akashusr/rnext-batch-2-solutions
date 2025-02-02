import { CtaSVG1, CtaSVG2 } from './icons/CallToActionSVGElement';

export default function CallToAction() {
    const ctaData = {
        headingP1: 'What Are You Looking For?',
        headingP2: 'Get Started Now',
        text: 'There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.',
        buttonText: "Let's have a meeting",
        buttonLink: '#',
    };

    return (
        <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
            <div className="container mx-auto">
                <div className="relative overflow-hidden">
                    <div className="-mx-4 flex flex-wrap items-stretch">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[570px] text-center">
                                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                                    <span>{ctaData.headingP1}</span>
                                    <span className="text-3xl font-normal md:text-[40px] block">
                                        {ctaData.headingP2}
                                    </span>
                                </h2>
                                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                                    {ctaData.text}
                                </p>
                                <a
                                    href={ctaData.buttonLink}
                                    className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                                >
                                    {ctaData.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="absolute left-0 top-0">
                    <CtaSVG1 />
                </span>
                <span className="absolute bottom-0 right-0">
                    <CtaSVG2 />
                </span>
            </div>
        </section>
    );
}
