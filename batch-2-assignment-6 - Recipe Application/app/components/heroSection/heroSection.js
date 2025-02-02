import { generateSlug, getCategoryById, getTopRatedRecipe } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
    const featuredRecipe = getTopRatedRecipe();
    const categoryName = getCategoryById(featuredRecipe.category_id)?.name;
    const slug = generateSlug(featuredRecipe?.title);
    return (
        <section className='mb-16 bg-orange-50'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div>
                    <Image
                        src={`/assets/thumbs/${featuredRecipe.thumbnail}`}
                        alt='Mighty Super Cheesecake'
                        className='w-full h-[450px] object-cover rounded-lg'
                        height={400}
                        width={550}
                    />
                </div>
                <div>
                    <h1
                        className='text-4xl font-bold mb-4'
                        dangerouslySetInnerHTML={{
                            __html: featuredRecipe.title,
                        }}></h1>
                    <p className='text-gray-600 mb-4'>
                        {featuredRecipe.description}
                    </p>
                    <Link
                        href={`${categoryName.toLowerCase()}/${slug}`}
                        className='bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600'>
                        View Recipe
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
