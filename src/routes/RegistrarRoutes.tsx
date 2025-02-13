import { LuLayoutDashboard } from "react-icons/lu";
import { generateUserRoutes } from "../utils/generateUserRoutes";
import { HiOutlineUserGroup } from "react-icons/hi2";
import RegistrarDashboard from "../pages/Registrar/RegistrarDashboard";
import CreateStudent from "../pages/Registrar/UserManagement/CreateStudent";
import CreateFaculty from "../pages/Registrar/UserManagement/CreateFaculty";

export const RegistrarPaths = [
  {
    index: true,
    element: <RegistrarDashboard />,
  },
  {
    path: "dashboard",
    label: "Dashboard",
    element: <RegistrarDashboard />,
    icon: <LuLayoutDashboard className="size-4 md:size-5" />,
  },
  {
    icon: <HiOutlineUserGroup className="size-4 md:size-5" />,
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

export const RegistrarRoutes = generateUserRoutes(RegistrarPaths);
