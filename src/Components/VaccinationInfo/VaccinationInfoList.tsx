import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Card, message, Modal, Table, Tooltip } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import VaccinationInfoCreate from "./VaccinationInfoCreate";
import { ColumnsType } from "antd/es/table";
import { VaccinationInfoListVM } from "../ViewModel/UserCreateVM";

const VaccinationInfoList: React.FC = () => {
  const [data, setData] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

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
            `http://localhost:4000/api/v1/vaccinationInfo/delete/${id}`
          );
          if (response.status === 200) {
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

  const columns: ColumnsType<VaccinationInfoListVM> = [
    {
      title: "Vaccination Name",
      dataIndex: "vaccination_name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "remarks",
      key: "remarks",
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      align: "center",
      render: (_, record) => (
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
      ),
    },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/vaccinationInfo`
      );
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
      title="Vaccination List"
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
      <VaccinationInfoCreate open={drawerOpen} onClose={closeDrawer} />
    </Card>
  );
};

export default VaccinationInfoList;
