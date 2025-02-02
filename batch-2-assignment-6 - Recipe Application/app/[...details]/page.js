import Image from "next/image";
import {
    formatDate,
    generateSlug,
    getRecipeBySlug,
    getReletedRecipes,
} from "../utils";
import ShareIcon from "../svg/shareIcon";
import SaveIcon from "../svg/saveIcon";
import ReletedRecipes from "../components/heroSection/reletedRecipeSection/reletedRecipes";
import { notFound } from "next/navigation";
import recipes from "../data/recipes.json";
import categories from "../data/categories.json";

export function generateStaticParams() {
    let data = [];
    categories.map((category) => {
        let categorySlug = generateSlug(category.name);
        let recipeTitleSlug;
        recipes.map((recipe) => (recipeTitleSlug = generateSlug(recipe.title)));
        data = [...data, { details: [categorySlug, recipeTitleSlug] }];
    });

    return data;
}

export const metadata = {
    title: "LWS Kitchen - Recipe Details",
};
const RecipeDetailsPage = ({ params: { details } }) => {
    const [category, slug] = details;
    const recipe = getRecipeBySlug(slug);
    const reletedRecipes = getReletedRecipes(recipe);
    if (details.length !== 2) {
        notFound();
    }

    return (
        <>
            <article>
                <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                    {recipe?.title}
                </h1>
                <div className='flex items-center space-x-4 mb-6'>
                    <Image
                        src='/assets/avater.png'
                        alt='Author'
                        className='w-8 h-8 rounded-full'
                        height={64}
                        width={64}
                    />

                    <span className='text-gray-600'>{recipe?.author}</span>
                    <span className='text-gray-400'>|</span>
                    <span
                        title='Cooking Time Required'
                        className='text-gray-600'>
                        🕒 {recipe?.cooking_time}
                    </span>
                    <span className='text-gray-400'>|</span>
                    <span className='text-gray-600'>
                        {formatDate(recipe?.published_date)}
                    </span>
                </div>
                <div className='flex justify-between items-center mb-8'>
                    <div className='flex space-x-4'>
                        <ShareIcon />
                        <button className='bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full'>
                            <SaveIcon />
                            Save
                        </button>
                    </div>
                </div>
                <div className='featured-image w-full max-h-[800px]'>
                    <Image
                        src={`/assets/thumbs/${recipe?.thumbnail}`}
                        alt={recipe?.title}
                        className='w-full max-h-[800px] object-contain mb-8 rounded-lg'
                        height={400}
                        width={450}
                    />
                </div>

                <p className='text-gray-600 mb-8'>{recipe?.description}</p>
                <h2 className='text-3xl font-bold mb-4'>Before you begin</h2>
                <p className='mb-8'>
                    Food qualities braise chicken cuts bowl through slices
                    butternut snack. Tender meat juicy dinners. One-pot low heat
                    plenty of time adobo fat raw soften fruit. sweet renders
                    bone-in marrow richness kitchen, fricassee basted putter.
                </p>
                <h2 className='text-3xl font-bold mb-4'>Here are the basics</h2>
                <p className='mb-8'>
                    Juicy meatballs brisket slammin&apos; baked shoulder. Juicy
                    smoker soy sauce burgers brisket. polenta mustard hunk
                    greens. Wine technique snack skewers chuck excess. Oil heat
                    slowly. slices natural delicious, set aside magic tbsp
                    skillet, bay leaves brown centerpiece. fruit soften edges
                    frond slices onion snack pork steem on wines excess
                    technique cup; Cover smoker soy sauce.
                </p>
                <blockquote className='text-3xl font-bold italic text-center my-12 px-4'>
                    <q>
                        One cannot think well, love well, sleep well, if one has
                        not dined well.
                    </q>
                </blockquote>
                <p className='text-center text-gray-600 mb-12'>
                    — Virginia Woolf, A Room of One&apos;s Own
                </p>
                <h2 className='text-3xl font-bold mb-4'>In the kitchen</h2>
                <p className='mb-8'>
                    Gastronomy atmosphere set aside. Slice butternut cooking
                    home. Delicious romantic undisturbed raw platter will meld.
                    Thick Skewers skillet natural, smoker soy sauce wait roux.
                    slices rosette bone-in simmer. Romantic fall-off-the-bone
                    butternut chuck under romas, Skewers on culinary experience.
                </p>
                <Image
                    src='/assets/thumbs/thumb-15.jpg'
                    alt='Cooking in kitchen'
                    className='w-full h-auto mb-8 rounded-lg max-w-xl mx-auto'
                    height={300}
                    width={380}
                />
                <p className='mb-8'>
                    Juicy meatballs brisket slammin&apos; baked shoulder. Juicy
                    smoker soy sauce burgers brisket. polenta mustard hunk
                    greens. Wine technique snack skewers chuck excess. Oil heat
                    slowly. slices natural delicious, set aside magic tbsp
                    skillet, bay leaves brown centerpiece. fruit soften edges
                    frond slices onion snack pork steem on wines excess
                    technique cup; Cover smoker soy sauce.
                </p>
            </article>
            {reletedRecipes && reletedRecipes.length > 0 && (
                <ReletedRecipes recipes={reletedRecipes} />
            )}
        </>
    );
};

export default RecipeDetailsPage;
