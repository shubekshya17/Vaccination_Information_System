import React from "react";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Paragraph } = Typography;

const Description: React.FC = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/FullDescription");
  };
  return (
    <>
      <Typography.Title level={3} style={{ color: "white" }}>
        गोदावरी नगरपालिकाको संक्षिप्त परिचय
      </Typography.Title>
      <Paragraph
        style={{ color: "white", textAlign: "center", fontSize: "0.9rem" }}
      >
        गोदावरी नगरपालिका नेपालका बागमती प्रदेश अन्तर्गत ललितपुर जिल्लामा
        अवस्थित छ। यो नगरपालिका प्राकृतिक सौन्दर्य, सांस्कृतिक विविधता र
        ऐतिहासिक महत्त्वका कारण प्रसिद्ध छ। काठमाडौँ उपत्यकाका दक्षिणी पहाडहरूको
        फेदमा अवस्थित गोदावरी शहरी विकास र शान्त प्राकृतिक वातावरणको अनुपम
        मिश्रण हो। गोदावरी वनस्पति उद्यान यहाँको प्रमुख आकर्षण हो, जुन विविध
        वनस्पति प्रजातिहरू, दुर्लभ ऑर्किडहरू, औषधीय जडिबुटीहरूको लागि चर्चित छ।
        यो उद्यान केवल मनोरञ्जनको लागि मात्र होइन, अनुसन्धान र शैक्षिक प्रयोजनका
        लागि पनि महत्त्वपूर्ण छ। गोदावरी धार्मिक तथा सांस्कृतिक खोजका लागि पनि
        एक महत्त्वपूर्ण गन्तव्य हो। यहाँका प्राचीन मन्दिरहरू, गुम्बाहरू र
        तीर्थस्थलहरू हिन्दू र बौद्ध समुदायका लागि समान रूपले पवित्र
        मानिन्छन्।...
        <a
          onClick={handleReadMore}
          style={{ color: "#1890ff", cursor: "pointer" }}
        >
          Read More
        </a>
      </Paragraph>
    </>
  );
};
export default Description;
