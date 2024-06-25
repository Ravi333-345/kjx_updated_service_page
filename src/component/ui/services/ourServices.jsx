import React, { useState } from "react";
import styled from "styled-components";
import designing from "../../../assets/designing.jpg";
import cloudservice from "../../../assets/cloudservice.jpg";
import dataeng from "../../../assets/data-engineer.jpg";
import dataScience from "../../../assets/otherImage/data_science1.jpeg";
import mvc from "../../../assets/mvc.jpg";
import UIUX from "../../../assets/UIUX.webp";
import frontend from "../../../assets/frontent.png";
import responsive from "../../../assets/responsive-website.png";
import mobileapp from "../../../assets/illustration-19.png";
import prototype from "../../../assets/prototype.png";
import azure from "../../../assets/azure-top-band-image.png";
import datastore from "../../../assets/data-store.png";
import dataprocess from "../../../assets/dataAnalysis.png";
import datadoc from "../../../assets/data-doc.png";
import dataint from "../../../assets/dataIntegration.png";
import angular from "../../../assets/angular_brand.png";
import nodejs from "../../../assets/node_logo.png";
import vue from "../../../assets/vue_brand.png";
import reactjs from "../../../assets/react_brand.png";

const OurServices = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleMouseEnter = (serviceName) => {
    setHoveredService(serviceName);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  const services = [
    {
      image: designing,
      name: "Designing Service",
      additionalImages: [UIUX, frontend, , mobileapp, prototype], // Additional images for Designing Service
    },
    {
      image: cloudservice,
      name: "Cloud Services",
      additionalImages: [
        // Additional images for Cloud Services (removed duplicate cloudservice image)
        "https://i.ibb.co/G38zPXn/what-is-amazon-web-services-aws-Photo-Room-png-Photo-Room.png",
        "https://i.ibb.co/mRd5cmB/hero16-9-machinelearning-portefolio.png",
        azure,
      ],
    },
    {
      image: dataeng,
      name: "Data Engineering",
      additionalImages: [datastore, dataprocess, datadoc, dataint], // Additional images for Data Engineering
    },
    {
      image: dataScience,
      name: "AI / ML",
      additionalImages: [
        // Additional images for AI / ML (removed duplicate dataScience image)
        "https://i.ibb.co/LNzCRNh/1698535.png",
        "https://i.ibb.co/DWshj53/8637099.png",
        "https://i.ibb.co/G7m1hqH/68747470733a2f2f7777772e74656e736f72666c6f772e6f72672f696d616765732f74665f6c6f676f5f686f72697a6f6e74.png",
      ],
    },
    {
      image: mvc,
      name: "MVC",
      additionalImages: [angular, nodejs, vue, reactjs], // Additional images for MVC
    },
  ];

  return (
    <Section>
      <Wrapper>
        <Title>Services</Title>
        <Holder>
          <Text>
            <H1>Our Services</H1>
          </Text>
          <CardsContainer>
            {services.map((service, index) => (
              <Card
                key={index}
                onMouseEnter={() => handleMouseEnter(service.name)}
                onMouseLeave={handleMouseLeave}
                isHovered={hoveredService === service.name}
              >
                <ImageWrapper>
                  <img src={service.image} alt={service.name} />
                  <ServiceName>{service.name}</ServiceName>
                </ImageWrapper>
                {hoveredService === service.name && (
                  <AdditionalInfo>
                    <TopItems>
                      {service.additionalImages.slice(0, 2).map((image, index) => (
                        <AdditionalCard key={index}>
                          <img src={image} alt={`additional-${index}`} />
                        </AdditionalCard>
                      ))}
                    </TopItems>
                    {service.additionalImages.length > 2 && (
                      <BottomItems>
                        {service.additionalImages.slice(2).map((image, index) => (
                          <AdditionalCard key={index}>
                            <img src={image} alt={`additional-${index}`} />
                          </AdditionalCard>
                        ))}
                      </BottomItems>
                    )}
                  </AdditionalInfo>
                )}
              </Card>
            ))}
          </CardsContainer>
        </Holder>
      </Wrapper>
    </Section>
  );
};

export default OurServices;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Initial gap between cards */
  padding: 10px; /* Padding to create fixed end borders */
`;

const Card = styled.div`
  position: relative;
  width: 270px;
  height: 200px; /* Adjust height as needed */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center align content vertically */
  align-items: center; /* Center align content horizontally */
  box-shadow: 0px 0px 5px grey;
  border-radius: 15px;
  overflow: hidden; /* Ensure content doesn't overflow */
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.15); /* Increase size of hovered card */
    box-shadow: 0px 0px 15px grey;
    z-index: 1;
  }

  ${(props) =>
    !props.isHovered &&
    `
    transform: scale(0.95); /* Reduce size of other cards */
  `}
`;

const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const H1 = styled.h1`
  margin: 0;
  padding-left: 30px;
  font-size: 35px;
  color: #006400;
  text-align: left;
`;

const Holder = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  text-align: left;
  color: #0e7490;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  color: #fff;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }
`;

const ServiceName = styled.p`
  position: absolute;
  bottom: 90px;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const AdditionalInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  z-index: 10; /* Ensure the additional info is displayed above other content */
`;

const TopItems = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const BottomItems = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const AdditionalCard = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
