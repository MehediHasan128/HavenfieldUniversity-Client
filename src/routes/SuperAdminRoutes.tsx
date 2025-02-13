import { LuLayoutDashboard } from "react-icons/lu";
import SuperAdminDashboard from "../pages/SuperAdmin/SuperAdminDashboard";
import { generateUserRoutes } from "../utils/generateUserRoutes";
import { HiOutlineUserGroup } from "react-icons/hi2";
import CreateDepartmentAdmin from "../pages/Admin/UserManagement/CreateDepartmentAdmin";
import CreateRegistrar from "../pages/SuperAdmin/UserManagement/CreateRegistrar";

export const SuperAdminPaths = [
    {
      index: true,
      element: <SuperAdminDashboard />,
    },
    {
      path: "dashboard",
      label: "Dashboard",
      element: <SuperAdminDashboard />,
      icon: <LuLayoutDashboard className="size-4 md:size-5" />
    },
    {
        icon: <HiOutlineUserGroup className="size-4 md:size-5" />,
        label: "User Management",
        children: [
          {
            path: "create-department-admin",
            label: "Create D. Admin",
            element: <CreateDepartmentAdmin />,
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
  