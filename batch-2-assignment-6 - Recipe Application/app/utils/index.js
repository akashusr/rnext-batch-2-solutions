import categories from "@/app/data/categories.json";
import recipes from "@/app/data/recipes.json";

// get all top rated recipes
export function getTopRatedRecipes() {
    const topRatedRecipes = recipes.sort(
        (a, b) =>
            (b.rating?.average_rating || 0) - (a.rating?.average_rating || 0)
    );
    return topRatedRecipes;
}

//get top rated single recipes
export function getTopRatedRecipe() {
    const topRatedRecipes = recipes.find(
        (recipe) =>
            recipe.rating?.average_rating ===
            Math.max(...recipes.map((r) => r.rating?.average_rating || 0))
    );
    return topRatedRecipes;
}

//get latest recipes
export function getLatestRecipes() {
    const latestRecipes = recipes.sort(
        (a, b) => new Date(b.published_date) - new Date(a.published_date)
    );
    return latestRecipes;
}

// get recipes based on rating count
export function getMoreRatedRecipes() {
    const moreRatedRecipes = recipes?.sort(
        (a, b) => b.rating?.rating_count - a.rating?.rating_count
    );
    return moreRatedRecipes;
}

//get recipe by slug
export function getRecipeBySlug(slug) {
    const recipe = recipes.find((recipe) => {
        let generatedSlug = generateSlug(recipe?.title);
        return generatedSlug === slug;
    });
    return recipe;
}

//get recipes by category
export function getRecipesByCategory(categoryId) {
    const allRecipesofCategory = recipes.filter(
        (recipe) => recipe.category_id === categoryId
    );
    return allRecipesofCategory;
}

//get releted recipe by category
export function getReletedRecipes(recipe) {
    if (!!recipe) {
        const category = recipe && recipe.category_id;
        // find recipes of this category
        const allRecipeOfCategory = getRecipesByCategory(category);

        // get recipes without current recipe
        const reletedRecipes = allRecipeOfCategory.filter(
            (item) => item.category_id === category && item !== recipe
        );
        return reletedRecipes;
    }
}

//get all categories
export function getAllCategories() {
    return categories;
}

//get populer categories
export function getPopulerCategories() {
    let categoryData;
    const allCategoriesWithData = categories.map((category) => {
        const currentCategory = category;
        // find data count of currect category
        const totalRecipeofTheCategory = recipes.filter(
            (recipe) => currentCategory.id === recipe.category_id
        );
        return {
            category_id: currentCategory.id,
            recipes: totalRecipeofTheCategory.length,
        };
    });
    const populerCategories = allCategoriesWithData.sort(
        (a, b) => b.recipes - a.recipes
    );
    return populerCategories;
}

//get single category by id
export function getCategoryById(id) {
    let category = null;
    if (id) {
        return (category = categories.find((category) => category.id === id));
    }
    return category;
}

// get category by slug
export function getCategoryBySlug(slug) {
    if (slug) {
        const categoryOfthisSlug = categories.find((category) => {
            return generateSlug(category.name) === slug;
        });
        return categoryOfthisSlug;
    }
}

//get slug of title
export function generateSlug(title) {
    if (!!title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim("-");
    }
}

export const formatDate = (dateString) => {
    if (!!dateString) {
        const date = new Date(dateString); // Parse the date string
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return new Intl.DateTimeFormat("en-GB", options).format(date); // Format the date
    }
};
