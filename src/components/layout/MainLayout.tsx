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
          <div className="flex justify-center items-center h-screen md:px-8 md:py-4" style={{overflow: 'auto', scrollbarWidth: 'thin', scrollBehavior: 'smooth', scrollMargin: '10px'}}>
          <Content style={{height: '100%'}}>
              <Outlet />
          </Content>
          </div>
        </Layout>
      </Layout>
  );
};

export default MainLayout;
