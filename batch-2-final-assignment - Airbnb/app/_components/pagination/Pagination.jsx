import { cn } from "@/utils/cn";
import Link from "next/link";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const Pagination = ({ currentPage, totalPage }) => {
    return (
        <div className=' mt-8 flex justify-center {" "}'>
            <nav aria-label='Page navigation'>
                <ul className='inline-flex items-center justify-center -space-x-px'>
                    {currentPage > 1 && (
                        <li>
                            <Link
                                scroll={false}
                                href={`?page=${Number(currentPage - 1)}`}
                                className=' darkclass block py-2  px-3 ml-0 leading-tight text-zinc-500 bg-white rounded-l-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700'>
                                <span className='sr-only'>Previous</span>
                                <GoChevronLeft size={20} />
                            </Link>
                        </li>
                    )}
                    {Array(totalPage)
                        .fill("-")
                        .map((_, index) => (
                            <li key={index}>
                                <Link
                                    scroll={false}
                                    href={`?page=${index + 1}`}
                                    className={cn(`py-2 px-3 leading-tight darkclass
                                    } ${
                                        parseInt(currentPage) === index + 1
                                            ? "text-white !bg-teal-500 border border-teal-300"
                                            : "text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
                                    }`)}>
                                    {index + 1}
                                </Link>
                            </li>
                        ))}

                    <li>
                        {currentPage < totalPage && (
                            <Link
                                scroll={false}
                                href={`?page=${parseInt(currentPage) + 1}`}
                                className='darkclass block  py-2 px-3 leading-tight text-zinc-500 bg-white rounded-r-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700'>
                                <span className='sr-only'>Next</span>
                                <GoChevronRight size={20} />
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
