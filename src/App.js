import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/Header";
import Cardlist from "./components/Cardlist";
import Dashboard from "./components/Dashboard";
import { Layout } from "antd";
const { Sider, Content } = Layout;

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Content
          style={{
            backgroundColor: "#fff",
            padding: "0 50px",
            marginTop: "25px",
          }}
        >
          <Cardlist />
        </Content>
        <Sider
          width={300}
          theme="light"
          style={{ padding: "0 50px 0 0", marginTop: "25px" }}
        >
          <Dashboard />
        </Sider>
      </Layout>
    </>
  );
}

export default App;
