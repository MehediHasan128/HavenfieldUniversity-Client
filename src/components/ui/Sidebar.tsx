import { Layout, Menu } from "antd";
import { generateSidebarItems } from "../../utils/generateSidebarItems";
import { AdminPaths } from "../../routes/AdminRoutes";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { StudentPaths } from "../../routes/StudentRoutes";
import { SuperAdminPaths } from "../../routes/SuperAdminRoutes";
import { RegistrarPaths } from "../../routes/RegistrarRoutes";
import { useGetUserQuery } from "../../redux/features/getUserApi";

const { Sider } = Layout;

const Role = {
  SUPER_ADMIN: "super-admin",
  REGISTRAR: "registrar",
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const imageURL =
  "https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png";

const Sidebar = () => {
  const user = useAppSelector(useCurrentUser);
  const userRole = user?.userRole;
  const dispatch = useAppDispatch();
  const handelLogout = () => {
    dispatch(logout());
  };

  const {data: userData} = useGetUserQuery(`/${userRole}/${user?.userId}`);

  const role = `${userRole}`;
  let sidebarItems;

  switch (role) {
    case Role.SUPER_ADMIN:
      sidebarItems = generateSidebarItems(SuperAdminPaths, Role.SUPER_ADMIN);
      break;
      case Role.REGISTRAR:
      sidebarItems = generateSidebarItems(RegistrarPaths, Role.REGISTRAR);
      break;
    case Role.ADMIN:
      sidebarItems = generateSidebarItems(AdminPaths, Role.ADMIN);
      break;
    case Role.FACULTY:
      sidebarItems = generateSidebarItems(AdminPaths, Role.FACULTY);
      break;
    case Role.STUDENT:
      sidebarItems = generateSidebarItems(StudentPaths, Role.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      width={250}
      theme="light"
      breakpoint="lg"
      style={{
        overflow: 'auto',
        scrollbarWidth: 'thin',
        scrollBehavior: 'smooth'
      }}
    >
      <div className="flex flex-col h-screen">
        <div className="p-3 flex justify-center items-center">
          <div>
            <div className="size-12 bg-purple-700 mx-auto lg:size-28 rounded-full flex justify-center items-center overflow-hidden md:mb-2">
              {imageURL ? (
                <>
                  <img
                    className="w-full h-full bg-cover"
                    src={userData?.data?.imageURL}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <p className="text-lg lg:text-4xl text-white font-semibold">
                    M
                  </p>
                </>
              )}
            </div>
            <h1 className="hidden lg:flex text-lg font-semibold text-center">
              {userData?.data?.userName.firstName} {userData?.data?.userName.lastName}
            </h1>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col h-full">
            <div className="flex-grow p-2">
              <div>
                <Menu
                  mode="inline"
                  items={sidebarItems}
                  style={{
                    padding: "10px 0px",
                    fontSize: "12px",
                    fontWeight: "500",
                    borderRight: 0,
                  }}
                />
              </div>
            </div>
            <div className="py-3 lg:py-4 px-2 w-full">
              <button
                onClick={handelLogout}
                className=" w-[100%] flex justify-center items-center lg:gap-1 bg-blue-400 lg:px-5 py-1 lg:py-2 rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-500 duration-700"
              >
                <PowerIcon className="size-4 lg:size-5" />
                <p className="hidden lg:flex">Logout</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
