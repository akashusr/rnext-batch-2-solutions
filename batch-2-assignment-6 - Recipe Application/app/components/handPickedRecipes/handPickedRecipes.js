import { getTopRatedRecipes } from "@/app/utils";
import SectionHeading from "../common/sectionHeading";
import HandPickedRecipeCard from "../handPickedRecipeCard";

const HandPickedRecipes = () => {
    const recipes = getTopRatedRecipes();
    let handPickedRecipes;
    if (recipes.length > 4) {
        handPickedRecipes = recipes
            ?.slice(2, 4)
            .map((recipe, index) => (
                <HandPickedRecipeCard key={index} recipe={recipe} />
            ));
    } else {
        handPickedRecipes = recipes
            ?.slice(0, 2)
            .map((recipe) => (
                <HandPickedRecipeCard key={recipe.id} recipe={recipe} />
            ));
    }
    return (
        <section id='hand-picked' className='mb-16'>
            <SectionHeading title='Hand-Picked Collections' />
            <div className='grid md:grid-cols-2 gap-8'>{handPickedRecipes}</div>
        </section>
    );
};

export default HandPickedRecipes;
