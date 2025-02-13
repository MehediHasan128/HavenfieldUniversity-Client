import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authentication/login";
import App from "../App";
import { AdminRoutes } from "./AdminRoutes";
import { StudentRoutes } from "./StudentRoutes";
import { SuperAdminRoutes } from "./SuperAdminRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/super-admin',
        element: <App />,
        children: SuperAdminRoutes
    },
    {
        path: '/admin',
        element: <App />,
        children: AdminRoutes
    },
    {
        path: '/student',
        element: <App />,
        children: StudentRoutes
    },
    {
        path: '/login',
        element: <Login />
    },
]);

export default router;