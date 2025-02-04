import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../ui/Header";
import Sidebar from "../ui/Sidebar";

const { Content } = Layout;

const MainLayout = () => {
  return (
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout>
          <HeaderComponent />
          <div style={{overflow: 'auto', scrollbarWidth: 'thin', scrollBehavior: 'smooth', scrollMargin: '10px'}}>
          <Content style={{ margin: "24px 16px 24px" }}>
              <Outlet />
          </Content>
          </div>
        </Layout>
      </Layout>
  );
};

export default MainLayout;
