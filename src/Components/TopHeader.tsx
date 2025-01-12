import { Flex, Typography } from "antd";
import Link from "antd/es/typography/Link";
import React from "react";

const TopHeader: React.FC = () => {
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
        <Flex align="center" gap={"small"}>
          <Link>
            <img
              src="https://kathmandu.gov.np/wp-content/uploads/2021/02/cropped-logo.png"
              alt="Nepal Gov."
              height={"60px"}
            />
            <div>
              <Typography.Title
                level={5}
                style={{
                  margin: "15px 75px",
                  color: "white",
                  position: "absolute",
                  top: "30px",
                }}
              >
                सांस्कृतिक सहर, समृद्ध नगर
              </Typography.Title>
            </div>
          </Link>
        </Flex>
        <div>
          <Flex vertical align="center" justify="center" gap={3}>
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
          </Flex>
        </div>
        <Flex vertical gap={8}>
          <img
            src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/flag-nepal.gif"
            alt="Flag of Nepal"
            style={{ objectFit: "contain" }}
            className="p-2"
            height={"60px"}
          />
        </Flex>
      </Flex>
    </div>
  );
};
export default TopHeader;
