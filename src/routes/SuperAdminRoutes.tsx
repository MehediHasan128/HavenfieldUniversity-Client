import { LuLayoutDashboard } from "react-icons/lu";
import SuperAdminDashboard from "../pages/SuperAdmin/SuperAdminDashboard";
import { generateUserRoutes } from "../utils/generateUserRoutes";
import { HiOutlineUserGroup } from "react-icons/hi2";
import CreateRegistrar from "../pages/SuperAdmin/UserManagement/CreateRegistrar";
import CreateAdmin from "../pages/SuperAdmin/UserManagement/CreateAdmin";

export const SuperAdminPaths = [
  {
    index: true,
    element: <SuperAdminDashboard />,
  },
  {
    path: "dashboard",
    label: "Dashboard",
    element: <SuperAdminDashboard />,
    icon: <LuLayoutDashboard className="size-4 md:size-5" />,
  },
  {
    icon: <HiOutlineUserGroup className="size-4 md:size-5" />,
    label: "User Management",
    children: [
      {
        path: "create-department-admin",
        label: "Create D. Admin",
        element: <CreateAdmin />,
      },
      {
        path: "create-registrar",
        label: "Create Registrar",
        element: <CreateRegistrar />,
      },
    ],
  },
];

export const SuperAdminRoutes = generateUserRoutes(SuperAdminPaths);
