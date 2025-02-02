import Image from "next/image";
import Link from "next/link";
import { generateSlug, getCategoryById } from "../utils";

const HandPickedRecipeCard = ({ recipe }) => {
    const category = getCategoryById(recipe?.category_id);

    return (
        <div className='relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer'>
            <Image
                src={`/assets/thumbs/${recipe?.thumbnail}`}
                alt={recipe?.title}
                className='w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110'
                height={300}
                width={380}
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0'>
                <h3 className='text-xl font-semibold mb-2'>{recipe?.title}</h3>
                <Link
                    href={`categories/${generateSlug(category?.name)}`}
                    className='text-orange-300 hover:underline'>
                    View Collection
                </Link>
            </div>
        </div>
    );
};

export default HandPickedRecipeCard;
