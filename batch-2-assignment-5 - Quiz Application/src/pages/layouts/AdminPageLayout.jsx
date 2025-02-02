import { Navigate, Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/admin-panel/Sidebar";
import useAuth from "../../hooks/useAuth";

const AdminPageLayout = () => {
    const { auth } = useAuth();
    const location = useLocation();

    if (auth?.user?.role !== "admin") {
        return <Navigate to='/' />;
    } else {
        if (location?.pathname === "/admin") {
            return <Navigate to='/admin/dashboard/quizzes' />;
        }
    }
    return (
        <div className='bg-gray-100 dark:bg-dark-primary min-h-screen flex '>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default AdminPageLayout;
