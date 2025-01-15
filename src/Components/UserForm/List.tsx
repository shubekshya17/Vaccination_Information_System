import { EditOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Table, Tooltip } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Create from "./Create";
import { ColumnsType } from "antd/es/table";
import { UserListVM } from "../ViewModel/UserCreateVM";

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
    render: () => (
      <Tooltip
        title="Edit"
        placement="left"
        color="blue"
        autoAdjustOverflow
        mouseEnterDelay={0.2}
      >
        <Button type="link" icon={<EditOutlined />}></Button>
      </Tooltip>
    ),
  },
];

const List: React.FC = () => {
  const [data, setData] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  return (
    <Card
      title={
        <span>
          <UserOutlined style={{ marginRight: 8 }} />
          Users List
        </span>
      }
      extra={
        <Button
          style={{ backgroundColor: "#263A57", color: "white" }}
          icon={<PlusOutlined />}
          onClick={() => setDrawerOpen(true)}
        >
          Create New
        </Button>
      }
    >
      <Table columns={columns} dataSource={data} />
      <Create open={drawerOpen} onClose={closeDrawer} />
    </Card>
  );
};

export default List;
