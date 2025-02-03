import { Layout, Menu } from "antd";
import { generateSidebarItems } from "../../utils/generateSidebarItems";
import { AdminPaths } from "../../routes/AdminRoutes";

const {Sider} = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}

const Sidebar = () => {

    const role = 'admin';
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
        <Sider theme="light" breakpoint="lg">
          <Menu
          mode="inline"
            defaultSelectedKeys={["1"]}
            items={sidebarItems}
            style={{ borderRight: "none", height: "100%", padding: '10px 5px' }}
          />
        </Sider>
    );
};

export default Sidebar;