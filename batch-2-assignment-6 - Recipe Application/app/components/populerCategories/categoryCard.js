import { generateSlug } from "@/app/utils";
import cn from "@/app/utils/cn";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category, classname }) => {
    return (
        <Link href={`categories/${generateSlug(category.name.toLowerCase())}`}>
            <div className='cursor-pointer text-center group'>
                <div
                    className={cn(
                        `overflow-hidden rounded-full mx-auto text-center`,
                        classname
                    )}>
                    <Image
                        src={`/assets${category?.image}`}
                        alt={category?.name}
                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                        height={200}
                        width={200}
                    />
                </div>
                <p className='transition-transform duration-300 group-hover:scale-105'>
                    {category?.name}
                </p>
            </div>
        </Link>
    );
};

export default CategoryCard;
