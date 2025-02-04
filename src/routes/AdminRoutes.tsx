import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { generateUserRoutes } from "../utils/generateUserRoutes";
import { UserCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const AdminPaths = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    label: "Dashboard",
    element: <AdminDashboard />,
    icon: <UserCircleIcon className="size-4 md:size-5 lg:size-7" />

  },
  {
    icon: <UserGroupIcon className="size-4 md:size-5 lg:size-7" />,
    label: "User Management",
    children: [
      {
        path: "create-student",
        label: "Create Student",
        element: <CreateStudent />,
      },
      {
        path: "create-faculty",
        label: "Create Faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];

export const AdminRoutes = generateUserRoutes(AdminPaths);
