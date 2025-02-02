import SectionHeading from "../common/sectionHeading";
import RecipeCard from "../common/recipeCard";
import { getLatestRecipes } from "@/app/utils";

const LatestRecipes = () => {
    const recipes = getLatestRecipes();

    let latestRecipes;
    if (recipes && recipes.length > 0) {
        latestRecipes = recipes
            .slice(0, 4)
            .map((recipe, index) => (
                <RecipeCard
                    showCategory={true}
                    key={index}
                    recipe={recipe}></RecipeCard>
            ));
    }

    return (
        <section id='latest-recipies' className='mb-16'>
            <SectionHeading title='Latest Recipes' />
            <div className='grid md:grid-cols-4 gap-8'>{latestRecipes}</div>
        </section>
    );
};

export default LatestRecipes;
