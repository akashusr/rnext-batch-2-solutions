import CategorisedRecipeList from "@/app/components/categorisedRecipesList";
import {
    generateSlug,
    getAllCategories,
    getCategoryBySlug,
    getRecipesByCategory,
} from "@/app/utils";

export function generateStaticParams() {
    const categories = getAllCategories();

    let data = categories.map((catagory) => {
        return { slug: generateSlug(catagory.name) };
    });
    return data;
}

export const metadata = {
    title: "LWS Kitchen - Recipes",
};

const RecipePageBasedOnCategory = ({ params: { slug } }) => {
    const category = getCategoryBySlug(slug);
    const recipes = getRecipesByCategory(category.id);

    return (
        <>
            <div className='flex justify-between items-center mb-8'>
                <div>
                    <h1 className='text-4xl font-bold mb-2'>
                        {category.name}{" "}
                        <span className='text-gray-500 text-2xl font-normal'>
                            ({recipes.length} Recipes)
                        </span>
                    </h1>
                    <p className='text-gray-600'>
                        One thing I learned living in the Canarsie section of
                        Brooklyn, NY was how to cook a good Italian meal. Here
                        is a recipe I created after having this dish in a
                        restaurant. Enjoy!
                    </p>
                </div>
            </div>
            <CategorisedRecipeList recipes={recipes} />
        </>
    );
};

export default RecipePageBasedOnCategory;
