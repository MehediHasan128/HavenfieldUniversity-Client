import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authentication/login";
import App from "../App";
import { AdminRoutes } from "./AdminRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/admin',
        element: <App />,
        children: AdminRoutes
    },
    {
        path: '/login',
        element: <Login />
    },
]);

export default router;