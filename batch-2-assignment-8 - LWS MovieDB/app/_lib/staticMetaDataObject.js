export const staticMetaDataObject = () => {
    return {
        title: "MovieDB | Best Resources for Movies and TV Shows",
        description:
            "A one Place movie information site for stay updated with Trending Movies and Latest releases.",
        openGraph: {
            title: "MovieDB | Best Resources for Movies and TV Shows",
            description:
                "A one Place movie information site for stay updated with Trending Movies and Latest releases.",
            url: "https://next-lws-movie-db.vercel.app/",
            type: "website",
            locale: "en_US",
            siteName: "MovieDB",
            images: [
                {
                    url: "https://res.cloudinary.com/devripon/image/upload/v1734843353/twitter-card-image_vat753.png",
                    width: 1200,
                    height: 630,
                    alt: "OG Image for Twitter",
                },
                {
                    url: "https://res.cloudinary.com/devripon/image/upload/v1734843582/generate_images_for_a_movie_database_website_x9giwi_homvc2.png",
                    width: 1000,
                    height: 1000,
                    alt: "OG Image for Facebook",
                },
                {
                    url: "https://res.cloudinary.com/devripon/image/upload/v1734843353/movie_database_image_u6yjzm.png",
                    width: 1000,
                    height: 1000,
                    alt: "OG Image for Social",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@MdShahadatHuss5",
            title: "MovieDB | Best Resources for Movies and TV Shows",
            description:
                "A one Place movie information site for stay updated with Trending Movies and Latest releases.",
            images: [
                "https://res.cloudinary.com/devripon/image/upload/v1734843353/twitter-card-image_vat753.png",
            ],
        },
        keywords: [
            "Next.js",
            "SEO",
            "Social Sharing",
            "Open Graph",
            "Twitter Card",
            "LinkedIn Optimization",
            "Web Development",
        ],
        authors: [
            {
                name: "Shahadat Hussain Ripon",
                url: "https://github.com/deveripon",
            },
        ],

        robots: {
            index: true,
            follow: true,
        },
    };
};
