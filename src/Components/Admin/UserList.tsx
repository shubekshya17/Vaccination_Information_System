import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  MailOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, message, Modal, Space, Table, Tooltip } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { UserListVM } from "../ViewModel/UserCreateVM";
import AdminUserCreate from "./UserCreate";

const AdminUserList: React.FC = () => {
  const [data, setData] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const deleteAction = (id: number) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure you want to delete this record?",
      okText: "Yes, Delete",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          const response = await axios.delete(
            `http://localhost:4000/api/v1/users/delete/${id}`
          );
          if (response.status === 200) {
            fetchData();
            message.success(response.data?.message);
          } else {
            message.error(response.data?.message);
          }
        } catch (error) {
          console.error(error);
        }
      },
    });
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/users`);
      setData(response.data.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data ?? error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns: ColumnsType<UserListVM> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      align: "center",
      render: (_, record) => (
        <Space>
          <Tooltip
            title="Edit"
            placement="left"
            color="blue"
            autoAdjustOverflow
            mouseEnterDelay={0.2}
          >
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => {
                setSelectedItem(record);
                setDrawerOpen(true);
              }}
            ></Button>
          </Tooltip>
          <Tooltip
            title="Delete"
            placement="right"
            color="red"
            autoAdjustOverflow
            mouseEnterDelay={0.2}
          >
            <Button
              type="link"
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteAction(record.id);
              }}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Card
      title={
        <span>
          <UserOutlined style={{ marginRight: 8 }} />
          Users List
        </span>
      }
      extra={
        <Space>
          <Button
            style={{ backgroundColor: "#263A57", color: "white" }}
            icon={<PlusOutlined />}
            onClick={() => {
              setDrawerOpen(true);
              setSelectedItem(null);
            }}
          >
            Create New
          </Button>
          <Button
            style={{ backgroundColor: "#263A57", color: "white" }}
            icon={<MailOutlined />}
          >
            Send SMS
          </Button>
        </Space>
      }
    >
      <Table columns={columns} dataSource={data} />
      <AdminUserCreate
        open={drawerOpen}
        onClose={closeDrawer}
        fetchData={fetchData}
        selectedItem={selectedItem}
      />
    </Card>
  );
};

export default AdminUserList;
