import AcademicSemester from "../pages/Admin/AcademicManagement/AcademicSemester";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateFaculty from "../pages/Admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/Admin/UserManagement/CreateStudent";
import { generateUserRoutes } from "../utils/generateUserRoutes";
import { AcademicCapIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";

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
  {
    icon: <AcademicCapIcon className="size-4 md:size-5 lg:size-7" />,
    label: "Academic Management",
    children: [
      {
        path: "create-academic-semester",
        label: "Create Semester",
        element: <CreateStudent />,
      },
      {
        path: "academic-semester",
        label: "Academic Semester",
        element: <AcademicSemester />,
      },
    ],
  },
];

export const AdminRoutes = generateUserRoutes(AdminPaths);
