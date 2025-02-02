import { generateSlug, getCategoryById } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe, children, showCategory }) => {
    const categoryName = getCategoryById(recipe?.category_id).name;
    const slug = generateSlug(recipe?.title);

    return (
        <Link href={`/${generateSlug(categoryName)}/${slug}`}>
            <Image
                src={`/assets/thumbs/${recipe?.thumbnail}`}
                alt='Chicken Meatball with Creamy Cheese'
                className='w-full h-[300px] object-cover rounded-lg mb-4'
                height={300}
                width={450}
            />
            <h3 className='text-xl font-semibold mb-2'>{recipe?.title}</h3>
            {showCategory && <p className='text-gray-600'>{categoryName}</p>}
            {children}
        </Link>
    );
};

export default RecipeCard;
