import { Layout, Menu } from "antd";
import { generateSidebarItems } from "../../utils/generateSidebarItems";
import { AdminPaths } from "../../routes/AdminRoutes";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const imageURL =
  "https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png";

const Sidebar = () => {

  const dispatch = useAppDispatch();
  const handelLogout = () =>{
    dispatch(logout());
  }

  const role = "admin";
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = generateSidebarItems(AdminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = generateSidebarItems(AdminPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = generateSidebarItems(AdminPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      theme="light"
      breakpoint="lg"
      style={{
        overflow: "auto",
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
        scrollBehavior: "smooth"
      }}
    >
      <div className="flex flex-col h-screen">
        <div className="p-3 flex justify-center items-center">
          <div>
            <div className="size-12 bg-purple-700 mx-auto lg:size-20 rounded-full flex justify-center items-center overflow-hidden">
              {imageURL ? (
                <>
                  <img
                    className="w-full h-full bg-cover"
                    src="https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png"
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
              Mehedi Hasan
            </h1>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <Menu
                mode="inline"
                defaultSelectedKeys={["Dashboard"]}
                items={sidebarItems}
                style={{
                  borderRight: "none",
                  padding: "10px 0px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              />
            </div>
            <div className=" py-3 lg:py-4 w-full">
              <button onClick={handelLogout} className="w-[90%] lg:w-full flex justify-center items-center lg:gap-1 bg-blue-400 ml-1 lg:px-5 py-1 lg:py-2 rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-500 duration-700">
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
