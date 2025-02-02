import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    useLocation,
} from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import QuizPage from "../pages/user/QuizPage";
import ResultPage from "../pages/user/ResultPage";
import LeaderBoardPage from "../pages/user/LeaderBoardPage";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import DashboardPage from "../pages/admin/DashboardPage";
import QuizSetAddPage from "../pages/admin/QuizSetAddPage";
import QuizEntryPage from "../pages/admin/QuizEntryPage";
import UsersPageLayout from "../pages/layouts/UsersPageLayout";
import AdminPageLayout from "../pages/layouts/AdminPageLayout";
import NotFoundPage from "../pages/error/NotFoundPage";
import ErrorPage from "../pages/error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import NoContentPage from "../pages/admin/NoContentPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<UsersPageLayout />} errorElement={<ErrorPage />}>
                <Route path='*' element={<NotFoundPage />} />
                {/*role based routing : User
            below routes use a layout for user's pages */}

                <Route path='/' element={<HomePage />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/quizzes/:quizsetId' element={<QuizPage />} />
                    <Route
                        path='/leaderboard/:quizsetId'
                        element={<LeaderBoardPage />}
                    />
                </Route>
            </Route>

            {/*   this route need to be protected but not to use Users Page Layout */}

            <Route element={<PrivateRoute />}>
                <Route path='/result/:quizsetId' element={<ResultPage />} />
            </Route>

            {/*these are appliction auth routes for login and registration. these are not protected */}

            <Route
                path='/login'
                errorElement={<ErrorPage />}
                element={<LoginPage />}
            />
            <Route
                path='/register'
                errorElement={<ErrorPage />}
                element={<RegistrationPage />}
            />

            {/* role based routing : Admin */}
            {/*below routes use a layout for admin's pages */}
            <Route
                errorElement={<ErrorPage />}
                path='/admin'
                element={<AdminPageLayout />}>
                <Route path='*' element={<NotFoundPage />} />
                <Route path='/admin/dashboard' element={<DashboardPage />} />
                <Route
                    path='/admin/dashboard/quizzes'
                    element={<DashboardPage />}
                />
                <Route
                    path='/admin/dashboard/quizzes/add'
                    element={<QuizSetAddPage />}
                />
                <Route
                    path='/admin/dashboard/quizzes/:quizsetId'
                    element={<QuizEntryPage />}
                />
                <Route
                    path='/admin/dashboard/settings'
                    element={<NoContentPage />}
                />
                <Route
                    path='/admin/dashboard/manage-users'
                    element={<NoContentPage />}
                />
                <Route
                    path='/admin/dashboard/manage-roles'
                    element={<NoContentPage />}
                />
            </Route>
        </>
    ),
    {
        future: {
            v7_skipActionStatusRevalidation: true,
            v7_fetcherPersist: true,
            v7_partialHydration: true,
            v7_normalizeFormMethod: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);

const Routes = () => (
    <RouterProvider
        router={router}
        future={{
            v7_startTransition: true,
        }}
    />
);
export default Routes;
