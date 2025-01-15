import { LinkOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import Link from "antd/es/typography/Link";
import React from "react";

const FooterLayout: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "90px",
        backgroundColor: "#263A57",
        padding: "10px 20px",
      }}
    >
      <Flex justify="space-between" align="center" gap={"small"} flex={1}>
        <div>
          <Flex vertical align="left" justify="center" gap={3}>
            <Typography.Title
              level={4}
              style={{ margin: 0, marginTop: 0, color: "white" }}
            >
              गोदावरी नगरपालिका
            </Typography.Title>
            <Typography.Title
              level={5}
              style={{ margin: 0, marginTop: 0, color: "white" }}
            >
              नगर कार्यपालिकाको कार्यालय, वाग्मती प्रदेश
            </Typography.Title>
            <Typography.Text
              style={{ margin: 0, marginTop: 0, color: "white" }}
            >
              बज्रबाराही, ललितपुर
            </Typography.Text>
            <Typography.Text
              style={{ margin: 0, marginTop: 0, color: "white" }}
            >
              फोन : 9878990987
            </Typography.Text>
            <Typography.Text
              style={{ margin: 0, marginTop: 0, color: "white" }}
            >
              फोन : 9878990087
            </Typography.Text>
            <Typography.Text
              style={{ margin: 0, marginTop: 0, color: "white" }}
            >
              इमेल : godawari11@gmail.com
            </Typography.Text>
          </Flex>
        </div>
        <div>
          <Flex vertical align="center" justify="center" gap={3}>
            <Typography.Title
              level={4}
              style={{ margin: 0, marginTop: 0, color: "white" }}
            >
              Google Map
            </Typography.Title>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.731046933377!2d85.31794767349415!3d27.60186682373836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17b5adac162d%3A0x680c1dd8d9ca15b2!2sGodawari%20Municipality%20Ward%2011!5e0!3m2!1sen!2snp!4v1736949513545!5m2!1sen!2snp"
              width="400"
              height="300"
            ></iframe>
          </Flex>
        </div>
        <div style={{ marginLeft: "80px" }}>
          <Flex vertical align="left" justify="center" gap={3}>
            <Typography.Title
              level={4}
              style={{ margin: 0, marginTop: 0, color: "white" }}
            >
              Important Links
            </Typography.Title>
            <Link style={{ fontSize: 15, color: "white" }}>
              <LinkOutlined /> www.google.com
            </Link>
            <Link style={{ fontSize: 15, color: "white" }}>
              <LinkOutlined /> www.react.com
            </Link>
            <Link style={{ fontSize: 15, color: "white" }}>
              <LinkOutlined /> www.antd.com
            </Link>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};
export default FooterLayout;
