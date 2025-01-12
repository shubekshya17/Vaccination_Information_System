import { Button, Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width:"100%",
};

const Health: React.FC = () => {
  return (
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
  );
};

export default Health;
