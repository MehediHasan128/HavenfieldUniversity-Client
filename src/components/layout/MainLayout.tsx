import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { createElement } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../ui/Header";

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: createElement(icon),
  label: `nav ${index + 1}`,
}));

const { Content, Sider } = Layout;

const MainLayout = () => {
  return (
    <div>
      <HeaderComponent />

      <Layout style={{ height: "100vh" }}>
        <Sider theme="light" breakpoint="lg">
          <Menu
            defaultSelectedKeys={["1"]}
            items={items}
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
