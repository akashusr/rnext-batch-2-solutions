import CategoryCard from "../components/populerCategories/categoryCard";
import { getAllCategories } from "../utils";
export const metadata = {
    title: "LWS Kitchen - Categories",
};
const CategoriesPage = () => {
    const allCategories = getAllCategories();
    return (
        <>
            <h1 className='text-5xl font-bold mb-12'>Categories</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {allCategories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                        classname='mb-4'
                    />
                ))}
            </div>
        </>
    );
};

export default CategoriesPage;
