import StudentDashboard from "../pages/Student/StudentDashboard";
import { generateUserRoutes } from "../utils/generateUserRoutes";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export const StudentPaths = [
  {
    index: true,
    element: <StudentDashboard />,
  },
  {
    path: "dashboard",
    label: "Dashboard",
    element: <StudentDashboard />,
    icon: <UserCircleIcon className="size-4 md:size-5 lg:size-7" />

  }
];

export const StudentRoutes = generateUserRoutes(StudentPaths);
