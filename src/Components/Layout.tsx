import React from "react";
import { Breadcrumb, Layout,Typography } from "antd";
import NavHeader from "./NavHeader";
import Marquee from "react-fast-marquee";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router-dom";
import FooterLayout from "./Footer";

const { Content} = Layout;

const LayoutStyle: React.FC = () => {
 
  return (
    <Layout>
      <TopHeader />
      <Breadcrumb
        style={{
          margin: "0",
          height: "40px",
          lineHeight: "35px",
          padding: "0 25px",
          backgroundColor: "#EAEDED",
          color: "#263A57",
          fontWeight: "600",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography.Title
            level={5}
            style={{
              margin: 0,
              color: "#263A57",
            }}
          >
            समाचार
          </Typography.Title>
          <div
            style={{
              width: "2px",
              height: "80%",
              backgroundColor: "#263A57",
            }}
          ></div>
        </div>
        <Marquee style={{ flex: 1 }} pauseOnHover={true}>
          <span>पोलियो खोप बालबालिकाको स्वास्थ्य सुरक्षाका लागि आवश्यक छ।</span>
          <span style={{ marginLeft: "15px" }}>
            सबै उमेर समूहले वार्षिक स्वास्थ्य परीक्षण गराउनुपर्छ।
          </span>
          <span style={{ marginLeft: "15px" }}>
            इन्फ्लुएन्जा खोपको तालिका पालना गर्नुहोस्।
          </span>
        </Marquee>
      </Breadcrumb>

      <NavHeader />
      <Content>
        <div
          style={{
            padding: 24,
            minHeight: 580,
            backgroundColor: "#EAEDED",
          }}
        >
          <Outlet />
        </div>
      </Content>
      <FooterLayout/>
    </Layout>
  );
};

export default LayoutStyle;
