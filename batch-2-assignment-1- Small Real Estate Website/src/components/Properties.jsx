import PropertyCard from './properties/PropertyCard';

export default function Properties() {
    const propertiesSectionData = {
        sectionTitle: 'Properties',
        sectionHeading: 'Grab your Dream Property',
        sectionText:
            ' There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.',
    };

    const propertyCardData = [
        {
            image: 'https://unsplash.com/photos/2d4lAQAlbDA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHByb3BlcnR5fGVufDB8fHx8MTcyODIwNDE0MXww&force=true&w=640',
            title: 'Spacious & Modern Apartment',
            rent: 1800.0,
            bedroomCount: 3,
            BathroomCount: 2,
            uniqueId: 1,
        },
        {
            image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=naomi-hebert-MP0bgaS_d1c-unsplash.jpg&w=640',
            title: 'Cozy 2-Bed 2-Bath Apartment',
            rent: 1700.0,
            bedroomCount: 2,
            BathroomCount: 2,
            uniqueId: 2,
        },
        {
            image: 'https://unsplash.com/photos/AN0BAzp8qi8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHByb3BlcnR5fGVufDB8MHx8fDE3MjgyNDUwNzZ8Mg&force=true&w=640',
            title: 'Luxury Apartment with Stunning Views',
            rent: 3500.0,
            bedroomCount: 5,
            BathroomCount: 3,
            uniqueId: 3,
        },
        {
            image: 'https://unsplash.com/photos/ydudT6TqqmI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzF8fHByb3BlcnR5fGVufDB8MHx8fDE3MjgyNDUxMjJ8Mg&force=true&w=640',
            title: 'Move-In Ready Apartment with Modern Finishes',
            rent: 2000.0,
            bedroomCount: 4,
            BathroomCount: 2,
            uniqueId: 4,
        },
        {
            image: 'https://unsplash.com/photos/H6bwsRvl0mM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NzV8fHByb3BlcnR5fGVufDB8MHx8fDE3MjgyNDUxODd8Mg&force=true&w=640',
            title: 'Elegant & Beautiful Urban Apartment',
            rent: 2500.0,
            bedroomCount: 5,
            BathroomCount: 4,
            uniqueId: 5,
        },
        {
            image: 'https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60',
            title: 'Beautyful Home in a Quiet Neighborhood',
            rent: 2200.0,
            bedroomCount: 6,
            BathroomCount: 4,
            uniqueId: 6,
        },
    ];

    const availableProperties = propertyCardData.map((card) => {
        return (
            <PropertyCard
                key={card.uniqueId}
                image={card.image}
                title={card.title}
                rent={card.rent}
                bedroomCount={card.bedroomCount}
                BathroomCount={card.BathroomCount}
            />
        );
    });

    return (
        <section>
            <div className="container">
                <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                    <span className="mb-2 block text-lg font-semibold text-primary">
                        {propertiesSectionData.sectionTitle}
                    </span>
                    <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                        {propertiesSectionData.sectionHeading}
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                        {propertiesSectionData.sectionText}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {availableProperties}
                </div>
            </div>
        </section>
    );
}
