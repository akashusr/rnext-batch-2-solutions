import React from "react";
import SectionHeading from "../common/sectionHeading";
import { getMoreRatedRecipes } from "@/app/utils";
import RecipeCard from "../common/recipeCard";
import StarIcon from "@/app/svg/starIcon";

const DeliciousSection = () => {
    const relatedRecipes = getMoreRatedRecipes();
    let recipes;
    if (relatedRecipes && relatedRecipes.length > 0) {
        recipes = relatedRecipes
            .slice(0, 3)
            .sort(() => Math.random() - 0.5)
            .map((recipe) => (
                <RecipeCard key={recipe} recipe={recipe}>
                    <div className='flex items-center text-yellow-500 mb-2'>
                        {Array(Math.floor(recipe?.rating?.average_rating))
                            .fill(0)
                            .map((item, index) => (
                                <StarIcon key={index} />
                            ))}
                        <span className='text-gray-600'>
                            ({recipe.rating?.rating_count})
                        </span>
                    </div>
                    <p className='text-gray-600' title='Cooking Time Required'>
                        🕒{recipe?.cooking_time}
                    </p>
                </RecipeCard>
            ));
    }
    return (
        <section className='mb-16' id='super_delicious'>
            <SectionHeading title='Super Delicious' />
            <div className='grid md:grid-cols-3 gap-8'>{recipes}</div>
        </section>
    );
};

export default DeliciousSection;
