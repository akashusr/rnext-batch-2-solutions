import SectionHeading from "../common/sectionHeading";
import { getCategoryById, getPopulerCategories } from "@/app/utils";
import CategoryCard from "./categoryCard";
import Link from "next/link";

const PopulerCategories = () => {
    const populerCategories = getPopulerCategories();
    let categories = [];

    if (populerCategories.length > 8) {
        populerCategories.slice(0, 6).map((category) => {
            categories.push(getCategoryById(category.category_id));
        });
    }

    let populerCategoryDataToRender = categories.map((category) => (
        <CategoryCard
            key={category.id}
            category={category}
            classname=' mb-2 w-20 h-20'
        />
    ));

    return (
        <section id='categories' className='mb-16'>
            <div className='flex justify-between items-top'>
                <SectionHeading title='Populer Categories' />
                <Link href='/categories' className='text-orange-500'>
                    View All
                </Link>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
                {populerCategoryDataToRender}
            </div>
        </section>
    );
};

export default PopulerCategories;
