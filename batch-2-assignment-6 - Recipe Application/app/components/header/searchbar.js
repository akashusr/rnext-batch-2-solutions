"use client";
import { useEffect, useState } from "react";
import recipes from "../../data/recipes.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { generateSlug, getCategoryById } from "@/app/utils";
const Searchbar = () => {
    const [searchedItem, setSearchedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (searchTerm?.length > 1) {
            const filterdData = recipes.filter((recipe) =>
                recipe?.title.includes(searchTerm)
            );
            if (filterdData && filterdData.length > 0) {
                setSearchedItem(filterdData);
            }
        } else {
            setSearchedItem(null);
        }
    }, [searchTerm, searchTerm?.length]);

    return (
        <div className='flex items-center space-x-4 relative'>
            <input
                onChange={(e) => setSearchTerm(e.target.value)}
                className='md:w-[300px] w-[150px] px-3 py-[5px] border border-gray-500 rounded-full outline-none focus:border-orange-500'
                type='text'
                name='search'
                id='search'
            />
            <button
                href='#'
                className='hover:text-orange-500 absolute top-1 right-3'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                </svg>
            </button>
            {searchTerm?.length > 1 && (
                <div className='searched-content overflow-scroll overflow-x-hidden  fixed top-[80px] lg:right-[90px] right-2 max-h-[300px] p-2 w-[250px] md:w-[400px]  bg-orange-200/80 rounded'>
                    {searchedItem && searchedItem.length > 0 ? (
                        searchedItem.map((recipe, index) => (
                            <div
                                onClick={() => {
                                    setSearchTerm(null);
                                    router.push(
                                        `/${generateSlug(
                                            getCategoryById(recipe.category_id)
                                                .name
                                        )}/${generateSlug(recipe.title)}`
                                    );
                                }}
                                key={index}
                                className='recipe-card cursor-pointer flex gap-2 border rounded-md justify-center items-center border-orange-600/50 bg-gray-300 mb-[2px] p-2 text-orange-600'>
                                <Image
                                    src={`/assets/thumbs/${recipe.thumbnail}`}
                                    className='h-[70px] w-[90px]'
                                    alt='recipe-image'
                                    height={220}
                                    width={320}
                                />
                                <h4 className='title'>{recipe.title}</h4>
                            </div>
                        ))
                    ) : (
                        <h3 className='text-gray-800 h-[180px] p-5'>
                            No Recipe Found based on your search query. try
                            search with another keyword
                        </h3>
                    )}
                </div>
            )}
        </div>
    );
};

export default Searchbar;
