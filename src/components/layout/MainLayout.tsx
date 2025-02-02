import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../ui/Header";
import { generateSidebarItems } from "../../utils/generateSidebarItems";
import { AdminPaths } from "../../routes/AdminRoutes";

const { Content, Sider } = Layout;

const MainLayout = () => {
  return (
    <div>
      <HeaderComponent />

      <Layout style={{ height: "100vh" }}>
        <Sider theme="light" breakpoint="lg">
          <Menu
          mode="inline"
            defaultSelectedKeys={["1"]}
            items={generateSidebarItems(AdminPaths, 'admin')}
            style={{ borderRight: "none", height: "100%", padding: '10px 5px' }}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 24px" }}>
            <div
              style={{
                height: "100%",
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
