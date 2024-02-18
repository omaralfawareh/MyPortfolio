import React, { useState } from "react";
import "./App.css";
import { Menu, Layout } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MailFilled,
} from "@ant-design/icons";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

import Error from "./components/Error";
const { Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="App">
      <Layout>
        <Sider
          className="sider"
          breakpoint="lg"
          collapsible
          onCollapse={toggleSider}
          collapsed={collapsed}
          collapsedWidth="0"
          width={window.innerWidth < 768 ? "100vw" : 390}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <Menu
              className="menu"
              theme="dark"
              mode="inline"
              onClick={({ key }) => {
                navigate(key);
                if (window.innerWidth < 768) toggleSider();
              }}
              items={[
                {
                  label: <h3 className="label">home</h3>,
                  key: "/",
                  icon: <HomeOutlined className="menuIcon" />,
                },
                {
                  label: <h3 className="label">about</h3>,
                  key: "/about",
                  icon: <UserOutlined className="menuIcon" />,
                },
                {
                  label: <h3 className="label">projects</h3>,
                  key: "/projects",
                  icon: <SettingOutlined className="menuIcon" />,
                },
                {
                  label: <h3 className="label">contact</h3>,
                  key: "/contact",
                  icon: <MailFilled className="menuIcon" />,
                },
              ]}
            ></Menu>
          </div>
        </Sider>
        <Layout style={{ backgroundColor: "#36454f" }}>
          <Content
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              backgroundColor: "#36454f",
              height: "100%",
              width: collapsed ? "100%" : "calc(100% - 390px)", //To Adjust the width based on Sider state
              marginLeft: collapsed ? 0 : 390, //To Adjust margin based on Sider state
              transition:
                window.innerWidth >= 768 ? "width 0.8s, margin-left 0.8s" : "", //To Specify transitions for width and margin-left but non on mobile
            }}
          >
            <LoadContent />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

function LoadContent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
export default App;
