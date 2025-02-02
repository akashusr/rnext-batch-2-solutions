import React from "react";
import RecipeCard from "./common/recipeCard";
import CategorisedRecipeCard from "./categorisedRecipeCard";

const CategorisedRecipeList = ({ recipes }) => {
    const recipeCard = recipes
        .sort(() => Math.random() - 0.5)
        .map((recipe, index) => (
            <CategorisedRecipeCard key={index} recipe={recipe} />
        ));

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {recipeCard}
        </div>
    );
};

export default CategorisedRecipeList;
