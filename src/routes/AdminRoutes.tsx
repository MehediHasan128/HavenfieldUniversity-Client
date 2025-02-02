// const items: MenuProps['items'] = [
//   {
//     key: '01',
//     label: 'Dashboard'
//   },
//   {
//     key: '02',
//     label: 'User Management',
//     children: [
//       {
//         key: '101',
//         label: 'Create Faculty'
//       },
//       {
//         key: '102',
//         label: 'Create Student'
//       }
//     ]
//   }
// ]

import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { generateUserRoutes } from "../utils/generateUserRoutes";

export const AdminPaths = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    label: "Dashboard",
    element: <AdminDashboard />,
  },
  {
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
