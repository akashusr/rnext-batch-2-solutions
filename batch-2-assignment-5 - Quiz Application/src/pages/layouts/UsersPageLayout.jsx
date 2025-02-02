import { Outlet } from "react-router-dom";
import Footer from "../../components/userPanel/Footer";
import Header from "../../components/userPanel/Header";

const UsersPageLayout = () => {
    return (
        <div className='bg-[#F5F3FF] dark:bg-dark-primary dark:text-primary min-h-screen'>
            <div className='container mx-auto py-3'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default UsersPageLayout;
