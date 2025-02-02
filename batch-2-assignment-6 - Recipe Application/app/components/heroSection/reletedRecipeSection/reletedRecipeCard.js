import { generateSlug, getCategoryById } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReletedRecipeCard = ({ recipe }) => {
    const categoryName = getCategoryById(recipe?.category_id).name;
    const slug = generateSlug(recipe.title);
    return (
        <Link href={`/${categoryName.toLowerCase()}/${slug}`}>
            <Image
                src={`/assets/thumbs/${recipe.thumbnail}`}
                alt='Recipe 1'
                className='w-full h-60 object-cover rounded-lg mb-2'
                height={200}
                width={280}
            />
            <h3 className='font-semibold'>{recipe.title}</h3>
        </Link>
    );
};

export default ReletedRecipeCard;
