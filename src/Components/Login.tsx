import { Button, Checkbox, Form, Grid, Input, message, theme, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import React from "react";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title } = Typography;

export default function Login() {
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values: any) => {
    if(values.email==="test@gmail.com" && values.password === "Test@123"){
        localStorage.setItem("token","Pass");
        window.location.href=("/AdminUserList")
    }
    else{
        message.error("Invalid User Login");
    }
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "350px",
      backgroundColor: "#3F536E",
      height: "auto",
      borderRadius: "6px",
    },
    rightcontainer: {
      width: "350px",
      backgroundColor: "#263A57",
      height: "auto",
      borderRadius: "6px",
    },
    forgotPassword: {
      float: "right" as React.CSSProperties["float"],
      color: "white",
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      height: "80vh",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    text: {
      color: "white",
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
      color: "white",
    },
  };

  return (
    <section style={styles.section}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={styles.container}>
          <div style={styles.header}>
            <Title style={styles.title}>Sign in</Title>
            <Text style={styles.text}>
              Please enter your details below to sign in.
            </Text>
          </div>
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
              </Form.Item>
              <a style={styles.forgotPassword} href="">
                Forgot password?
              </a>
            </Form.Item>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div style={styles.rightcontainer}>
          <video
            autoPlay
            loop
            muted
            disablePictureInPicture
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
              borderRadius: "6px",
            }}
          >
            <source
              src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/girl-with-nepal-flag-animation-download-in-lottie-json-gif-static-svg-file-formats--world-logo-cycling-pack-people-animations-8129684.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
