import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
    const { pathname } = useLocation();
    return (
        <>
            {pathname === "/admin/dashboard/quizzes/add" && (
                <Link
                    to='/admin/dashboard/quizzes/'
                    className='dark:text-dark-textPrimary inline-flex items-center text-sm text-gray-600 mb-6 hover:text-buzzr-purple'>
                    <svg
                        className='w-4 h-4 mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 19l-7-7m0 0l7-7m-7 7h18'></path>
                    </svg>
                    Back to home
                </Link>
            )}
            {pathname !== "/admin/dashboard/quizzes/" && (
                <nav className='text-sm  mb-4' aria-label='Breadcrumb'>
                    <ol className='list-none p-0 inline-flex'>
                        <li className='flex items-center'>
                            <Link
                                to='/admin/dashboard/quizzes/'
                                className='dark:text-dark-textSecondary text-gray-600 hover:text-buzzr-purple'>
                                Home
                            </Link>
                            <svg
                                className='fill-current w-3 h-3 mx-3 dark:text-dark-textPrimary'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 320 512'>
                                <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z' />
                            </svg>
                        </li>
                        <li>
                            <Link
                                className='dark:text-dark-textSecondary text-gray-600 hover:text-buzzr-purple'
                                aria-current='page'>
                                Quizzes
                            </Link>
                        </li>
                    </ol>
                </nav>
            )}
        </>
    );
};

export default BreadCrumbs;
