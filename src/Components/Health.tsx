import { Button, Card, Carousel, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

const columns = [
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
];

const Health: React.FC = () => {
  const [data, setData] = useState([]);

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
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ width: "90%" }}>
          <Carousel arrows infinite={true} autoplay>
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/04/85/64/60/240_F_485646091_2OjaN2WbB70iU3vevAiWXfPHAtvXadBP.jpg"
                style={contentStyle}
                alt="Health Image"
              />
            </div>
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/09/45/55/32/240_F_945553295_OXeERXTt0pTYopgNEINC2J7juN8ZxYrq.jpg"
                style={contentStyle}
                alt="Health Image"
              />
            </div>
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/08/69/74/84/240_F_869748485_eyTcMWxOu329Fn4vwNqmUyuj2hSOJXSp.jpg"
                style={contentStyle}
                alt="Health Image"
              />
            </div>
          </Carousel>
        </div>
        <div style={{ width: "10%" }}>
          <div>
            <img
              src="https://chatbot.kathmandu.gov.np/images/moscot.png"
              alt="Health Image"
            />
            <Button
              style={{
                backgroundColor: "#EAEDED",
                borderColor: "#87CEEB", // Light blue border color
                boxShadow: "0 0 10px #263A57, 0 0 20px #263A57", // Blue glowing effect
                color: "#263A57", // Text color
              }}
            >
              How Can I Help?
            </Button>
          </div>
        </div>
      </div>
      <Card
        style={{ marginTop: "6px" }}
        title={<span>Upcoming Vaccination List</span>}
      >
        <Table columns={columns} dataSource={data} />
      </Card>
    </>
  );
};

export default Health;
