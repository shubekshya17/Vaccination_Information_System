import { Card, Carousel } from "antd";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Description from "./Description";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "350px",
  width: "100%",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  //background: "#364d79",
  backgroundColor: "#263A57",
};
const { Meta } = Card;

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ width: "55%" }}>
          <Carousel arrows autoplay infinite>
            <div>
              <img
                src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=2048x2048&w=is&k=20&c=8Y2YB8oWnPb17Gl2dIKjm7GanOtnC2OSWLPrIUmnGuQ="
                alt="Godawari Municipality"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/519588499/photo/nepal.jpg?s=2048x2048&w=is&k=20&c=sFTPKHV3XoCmdbrg_b9IxBKsK1R8B8X8bQ5FIO9tIXs="
                alt="Bajrabarahi"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/2149482546/photo/an-ancient-temple-in-patan-durbar-square-a-former-royal-palace-complex-located-in-kathmandu.jpg?s=1024x1024&w=is&k=20&c=0X7jGOM5p-X3Gutsq4681o4GkDiqfOAJkw7oyXlx4R4="
                alt="Santaneswor"
                style={contentStyle}
              />
            </div>
          </Carousel>
        </div>

        <div style={{ width: "45%" }}>
          <Card style={contentStyle}>
            <Description />
          </Card>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "4rem",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        {[
          {
            title: "Balendra Shah",
            description: "mayor@kathmandu.gov.np",
            image:
              "https://kathmandu.gov.np/wp-content/uploads/2022/05/viber_image_2022-07-28_18-17-58-844.png",
          },
          {
            title: "Sunita Dangol",
            description: "deputy.mayor@kathmandu.gov.np",
            image:
              "https://kathmandu.gov.np/wp-content/uploads/2022/05/viber_image_2022-05-27_19-30-33-053-removebg-preview.png",
          },
          {
            title: "Saroj Guragain",
            description: "ceo@kathmandu.gov.np",
            image:
              "https://kathmandu.gov.np/wp-content/uploads/2022/09/cao-new.png",
          },
        ].map((card, index) => (
          <Card
            hoverable
            key={index}
            style={{
              width: 240,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 300, 
            }}
            cover={
              <img
                alt={card.title}
                src={card.image}
                style={{
                  height: 200, 
                  objectFit: "cover", 
                }}
              />
            }
            data-aos="fade-up"
          >
            <Meta title={card.title} description={card.description} />
          </Card>
        ))}
      </div>
    </>
  );
};
export default Home;
