"use client";
import useDebounce from "@/app/_hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    function handleSearch(searchQuery) {
        const params = new URLSearchParams(searchParams.toString());

        if (searchQuery) {
            params.set("query", searchQuery);
        } else {
            params.delete("query");
        }

        router.replace(`/movie?${params.toString()}`);
    }
    const doSearch = useDebounce((term) => handleSearch(term), 500);

    return (
        <div className='relative'>
            <input
                onChange={(e) => doSearch(e.target.value)}
                defaultValue={searchParams.get("query") || ""}
                type='text'
                id='searchInput'
                placeholder='Search movies...'
                className='bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white'
            />
        </div>
    );
};

export default SearchBar;
