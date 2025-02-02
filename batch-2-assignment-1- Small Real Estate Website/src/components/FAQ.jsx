import FaqCard from './faq/FaqCard';
import { RectBlue, RectGreen } from './icons/FaqSVGElement';

export default function FAQ() {
    const faqData = {
        title: 'FAQ',
        heading: 'Any Questions? Look Here',
        text: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.',
    };

    const faqs = [
        {
            question: 'Is TailGrids Well-documented?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.',
            uniqueId: 1,
        },
        {
            question: 'Is TailGrids Well-documented?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.',
            uniqueId: 2,
        },
        {
            question: 'Is TailGrids Well-documented?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.',
            uniqueId: 3,
        },
        {
            question: 'Is TailGrids Well-documented?',
            answer: 'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.',
            uniqueId: 4,
        },
    ];

    return (
        <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                {faqData.title}
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                {faqData.heading}
                            </h2>
                            <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                                {faqData.text}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <FaqCard
                            question={faqs[0].question}
                            answer={faqs[0].answer}
                        />
                        <FaqCard
                            question={faqs[1].question}
                            answer={faqs[1].answer}
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <FaqCard
                            question={faqs[2].question}
                            answer={faqs[2].answer}
                        />
                        <FaqCard
                            question={faqs[3].question}
                            answer={faqs[3].answer}
                        />
                    </div>
                </div>
            </div>
            <div>
                <span className="absolute left-4 top-4 -z-[1]">
                    <RectGreen />
                </span>
                <span className="absolute bottom-4 right-4 -z-[1]">
                    <RectBlue />
                </span>
            </div>
        </section>
    );
}
