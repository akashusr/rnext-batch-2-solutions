import React from "react";
import SectionHeading from "../../common/sectionHeading";
import ReletedRecipeCard from "./reletedRecipeCard";

const ReletedRecipes = ({ recipes }) => {
    const fourItems = recipes && recipes.slice(0, 4);
    return (
        <section className='my-12'>
            <SectionHeading title='You may also like' />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {fourItems &&
                    fourItems
                        .sort(() => Math.random() - 0.5)
                        .map((recipe, index) => (
                            <ReletedRecipeCard key={index} recipe={recipe} />
                        ))}
            </div>
        </section>
    );
};

export default ReletedRecipes;
