import AcademicDepartment from "../pages/Admin/AcademicManagement/AcademicDepartment";
import AcademicSchool from "../pages/Admin/AcademicManagement/AcademicSchool";
import AcademicSemester from "../pages/Admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/Admin/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicSchool from "../pages/Admin/AcademicManagement/CreateAcademicSchool";
import CreateAcademicSemester from "../pages/Admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateFaculty from "../pages/Registrar/UserManagement/CreateFaculty";
import CreateStudent from "../pages/Registrar/UserManagement/CreateStudent";
import { generateUserRoutes } from "../utils/generateUserRoutes";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUserGroup, HiOutlineAcademicCap } from "react-icons/hi2";

export const AdminPaths = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    label: "Dashboard",
    element: <AdminDashboard />,
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
  {
    icon: <HiOutlineAcademicCap className="size-4 md:size-5" />,
    label: "Academic Management",
    children: [
      {
        path: "create-academic-school",
        label: "Create A. School",
        element: <CreateAcademicSchool />,
      },
      {
        path: "academic-school",
        label: "Academic School",
        element: <AcademicSchool />,
      },
      {
        path: "create-academic-semester",
        label: "Create A. Semester",
        element: <CreateAcademicSemester />,
      },
      {
        path: "academic-semester",
        label: "Academic Semester",
        element: <AcademicSemester />,
      },
      {
        path: "create-academic-department",
        label: "Create A. Department",
        element: <CreateAcademicDepartment />,
      },
      {
        path: "academic-department",
        label: "Academic Department",
        element: <AcademicDepartment />,
      },
    ],
  },
];

export const AdminRoutes = generateUserRoutes(AdminPaths);
