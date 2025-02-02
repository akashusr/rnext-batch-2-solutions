import TeamMemberCard from './teams/TeamMemberCard';

export default function Teams() {
    const teamData = {
        title: 'Our Team Members',
        heading: 'Our Clients',
        text: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.',
    };

    const teamMembers = [
        {
            image: '/assets/images/team/team-01.png',
            name: 'Melissa Tatcher',
            designation: 'Marketing Expert',
            fbLink: '#',
            twitterLink: '#',
            instaLink: '#',
            uniqueId: 1,
        },
        {
            image: '/assets/images/team/team-02.png',
            name: 'Stuard Ferrel',
            designation: 'Digital Marketer',
            fbLink: '#',
            twitterLink: '#',
            instaLink: '#',
            uniqueId: 2,
        },
        {
            image: '/assets/images/team/team-03.png',
            name: 'Eva Hudson',
            designation: 'Creative Designer',
            fbLink: '#',
            twitterLink: '#',
            instaLink: '#',
            uniqueId: 3,
        },
        {
            image: '/assets/images/team/team-04.png',
            name: 'Jackie Sanders',
            designation: 'Founder of Facebook',
            fbLink: '#',
            twitterLink: '#',
            instaLink: '#',
            uniqueId: 4,
        },
    ];

    const teamContent = teamMembers.map((member) => {
        return (
            <TeamMemberCard
                key={member.uniqueId}
                image={member.image}
                name={member.name}
                designation={member.designation}
                fbLink={member.fbLink}
                instaLink={member.instaLink}
                twitterLink={member.twitterLink}
            />
        );
    });

    return (
        <section
            id="team"
            className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
        >
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                {teamData.title}
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                {teamData.heading}
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                {teamData.text}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap justify-center">
                    {teamContent}
                </div>
            </div>
        </section>
    );
}
