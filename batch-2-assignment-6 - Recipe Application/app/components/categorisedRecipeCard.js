import Image from "next/image";
import Link from "next/link";
import React from "react";
import { generateSlug, getCategoryById } from "../utils";

const CategorisedRecipeCard = ({ recipe }) => {
    const categoryName = getCategoryById(recipe?.category_id).name;
    const slug = generateSlug(recipe?.title);

    return (
        <Link href={`/${generateSlug(categoryName)}/${slug}`}>
            <div className='bg-white rounded-lg overflow-hidden shadow-md'>
                <Image
                    src={`/assets/thumbs/${recipe?.thumbnail}`}
                    alt={recipe?.title}
                    className='w-full h-48 object-cover'
                    height={250}
                    width={340}
                />
                <div className='p-4'>
                    <h2 className='font-semibold text-lg mb-2'>
                        {recipe?.title}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default CategorisedRecipeCard;
