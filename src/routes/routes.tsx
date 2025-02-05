import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authentication/login";
import App from "../App";
import { AdminRoutes } from "./AdminRoutes";
import { StudentRoutes } from "./StudentRoutes";

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