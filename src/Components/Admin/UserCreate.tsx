import {
  Drawer,
  Space,
  Button,
  Form,
  Row,
  Col,
  Input,
  Checkbox,
  message,
  Divider,
  Typography,
} from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { UserCreateVM } from "../ViewModel/UserCreateVM";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminUserCreate = (props: {
  open: boolean;
  onClose: () => void;
  fetchData: () => void;
  selectedItem: any;
}) => {
  const [form] = useForm();
  const [checkboxState, setCheckboxState] = useState(false);
  const [numOfChildren, setNumOfChildren] = useState<number | null>(null);

  useEffect(() => {
    if (props.selectedItem) {
      form.setFieldsValue(props.selectedItem);
      setCheckboxState(props.selectedItem?.maritalstatus);
    } else {
      form.resetFields();
      setCheckboxState(false);
    }
  }, [props.selectedItem, form]);

  const onFinish = async (values: UserCreateVM) => {
    try {
      const finalResult = {
        name: values.name,
        phone: values.phone,
        address: values.address,
        maritalStatus: values.maritalstatus || false,
        wardNo: Number(values.wardno),
        age: Number(values.age),
        noOfChild: Number(values.noofchild) | 0,
        childName: values.childname,
        childAge: values?.childage?.map((x) => Number(x)),
      };
      const response = props.selectedItem?.id
        ? await axios.patch(
            `http://localhost:4000/api/v1/users/update/${props.selectedItem.id}`,
            finalResult
          )
        : await axios.post(
            `http://localhost:4000/api/v1/create-users`,
            finalResult
          );
      if (response.status === 201 || response.status === 200) {
        form.resetFields();
        message.success(response.data?.message || "User saved successfully!");
        props.onClose();
        props.fetchData();
      } else {
        message.error(response.data?.message || "Failed to save User.");
      }
    } catch (error) {
      message.error("An error occurred while saving.");
      console.error(error);
    }
  };

  return (
    <Drawer
      title={props.selectedItem?.id ? "Edit User" : "Create User"}
      open={props.open}
      onClose={props.onClose}
      width={720}
      zIndex={2}
      extra={
        <Space>
          <Button
            form="basic"
            htmlType="submit"
            icon={<SaveOutlined />}
            style={{ backgroundColor: "#263A57", color: "white" }}
          >
            Save
          </Button>
        </Space>
      }
    >
      <Form<UserCreateVM>
        name="basic"
        autoComplete="off"
        layout="vertical"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Row gutter={8}>
          <Col span={8}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Full Name is required!" }]}
            >
              <Input placeholder="Enter Full Name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              rules={[{ required: true, message: "Phone No is required!" }]}
            >
              <Input placeholder="Enter Phone No" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Address is required!" }]}
            >
              <Input placeholder="Enter Address" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Ward No"
              name="wardno"
              rules={[{ required: true, message: "Ward No is required!" }]}
            >
              <Input placeholder="Enter Ward No" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: "Age is required!" }]}
            >
              <Input placeholder="Enter Age" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Marital Status"
              name="maritalstatus"
              valuePropName="checked"
            >
              <Checkbox onChange={(e) => setCheckboxState(e.target.checked)}>
                Married
              </Checkbox>
            </Form.Item>
          </Col>
        </Row>

        {checkboxState && (
          <>
            <Col span={8}>
              <Form.Item
                label="No Of Child"
                name="noofchild"
                // rules={[
                //   { required: true, message: "No Of Child is required!" },
                // ]}
              >
                <Input
                  type="number"
                  placeholder="Enter No Of Child"
                  onChange={(e) =>
                    setNumOfChildren(Number(e.target.value) || null)
                  }
                />
              </Form.Item>
            </Col>

            {numOfChildren &&
              Array.from({ length: numOfChildren }, (_, index) => (
                <Row gutter={8} key={index}>
                  <Col span={8}>
                    <Form.Item
                      label={`Child ${index + 1} Name`}
                      name={["childname", index]}
                      rules={[
                        { required: true, message: "Child Name is required!" },
                      ]}
                    >
                      <Input
                        placeholder={`Enter Name for Child ${index + 1}`}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={`Child ${index + 1} Age`}
                      name={["childage", index]}
                      rules={[
                        { required: true, message: "Child Age is required!" },
                      ]}
                    >
                      <Input
                        type="number"
                        placeholder={`Enter Age for Child ${index + 1}`}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              ))}
          </>
        )}
        <Divider />
        <Typography.Text>
          {" "}
          Note: Please Recheck The Form Before Submission.
        </Typography.Text>
      </Form>
    </Drawer>
  );
};

export default AdminUserCreate;
