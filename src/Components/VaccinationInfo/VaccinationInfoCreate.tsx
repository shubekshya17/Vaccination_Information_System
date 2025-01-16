import {
  Drawer,
  Space,
  Button,
  Form,
  Row,
  Col,
  Input,
  message,
  Divider,
  Typography,
  DatePicker,
} from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { VaccinationInfoVM } from "../ViewModel/UserCreateVM";
import axios from "axios";

const VaccinationInfoCreate = (props: {
  open: boolean;
  onClose: () => void;
}) => {
  const [form] = useForm();

  const onFinish = async (values: VaccinationInfoVM) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/create-vaccinationInfo`,
        values
      );
      if (response.status === 201) {
        form.resetFields();
        message.success(
          response.data?.message || "Vaccination Info saved successfully!"
        );
        props.onClose();
      } else {
        message.error(
          response.data?.message || "Failed to save Vaccination Info."
        );
      }
    } catch (error) {
      message.error("An error occurred while saving.");
      console.error(error);
    }
  };

  return (
    <Drawer
      title="Create Vaccination Information"
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
      <Form<VaccinationInfoVM>
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
              label="Vaccination Name"
              name="vaccination_name"
              rules={[
                { required: true, message: "Vaccination Name is required!" },
              ]}
            >
              <Input placeholder="Enter Vaccination Name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Date is required!" }]}
            >
              <DatePicker style={{width:"100%"}}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Remarks"
              name="remarks"
              rules={[{ required: true, message: "Remarks is required!" }]}
            >
              <Input placeholder="Enter Remarks" />
            </Form.Item>
          </Col>
        </Row>

        <Divider />
        <Typography.Text>
          {" "}
          Note: Please Recheck The Form Before Submission.
        </Typography.Text>
      </Form>
    </Drawer>
  );
};

export default VaccinationInfoCreate;
