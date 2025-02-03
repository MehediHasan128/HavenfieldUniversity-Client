import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../ui/Header";
import Sidebar from "../ui/Sidebar";

const { Content } = Layout;


const MainLayout = () => {
  return (
    <div>
      <HeaderComponent />

      <Layout style={{ height: "100vh" }}>
        <Sidebar />
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
