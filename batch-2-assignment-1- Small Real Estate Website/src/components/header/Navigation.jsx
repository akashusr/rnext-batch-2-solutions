function NavigationItem({ name = 'Menu Item', link = '', index = 0 }) {
    return (
        <li className="group relative">
            <a
                href={link}
                className={
                    ' ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white ' +
                    (index && ' lg:ml-7 ') +
                    ' lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 ' +
                    (index && ' xl:ml-10 ')
                }
            >
                {name}
            </a>
        </li>
    );
}

export default function Navigation() {
    const navigation_items = [
        {
            name: 'Home',
            link: '#home',
            uniqueId: 1,
        },
        {
            name: 'About',
            link: '#about',
            uniqueId: 2,
        },
        {
            name: 'Pricing',
            link: '#pricin',
            uniqueId: 3,
        },
        {
            name: 'Blog',
            link: 'blog',
            uniqueId: 4,
        },
    ];

    let items = navigation_items.map((item, index) => {
        return (
            <NavigationItem
                name={item.name}
                link={item.link}
                index={index}
                key={item.uniqueId}
            />
        );
    });

    return <ul className="hidden lg:flex ">{items}</ul>;
}
