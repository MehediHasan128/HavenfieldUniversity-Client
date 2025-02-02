import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Authentication/login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
    },
    {
        path: '/login',
        element: <Login />
    },
]);

export default router;