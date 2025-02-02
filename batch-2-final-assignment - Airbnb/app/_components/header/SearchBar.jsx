"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ dictionary }) => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    function handleSearch(searchTerm) {
        const params = new URLSearchParams(searchParams);
        if (searchTerm) {
            params.set("query", searchTerm);
        } else {
            params.delete("query");
        }

        const locale = pathname.split("/")[1];
        router.replace(`/${locale}?${params.toString()}`);
    }

    const doSearch = useDebounce((searchTerm) => handleSearch(searchTerm), 500);

    return (
        <div className='row-start-2 col-span-2 dark:border-gray-500 border-0 md:border flex shadow-sm hover:shadow-md transition-all md:rounded-full items-center px-2'>
            <div className='grid md:grid-cols-3 lg:grid-cols-7 gap-4 divide-x py-2 md:px-2 flex-grow'>
                <input
                    defaultValue={searchParams.get("query") || ""}
                    type='text'
                    onChange={(e) => doSearch(e.target.value)}
                    placeholder={dictionary?.headers?.search}
                    className='px-3 bg-transparent focus:outline-none lg:col-span-3 placeholder:text-sm'
                />
            </div>
            <button className='bg-primary w-9 h-9 rounded-full grid place-items-center text-sm text-center transition-all hover:brightness-90 shrink-0'>
                <FaSearch color='#fff' />
            </button>
        </div>
    );
};

export default SearchBar;
