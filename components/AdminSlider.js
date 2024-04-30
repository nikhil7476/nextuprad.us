// AdminSlider.js
import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselImage from "./CarouselImage";

function AdminSlider() {
  const carouselData = [
    {
      text: "Welcome to NextUpgrad, Where Businesses Forge their Digital Destiny!",
      id: 1,
    },
    {
      text: "At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth.",
      id: 2,
    },
    {
      text: "At the core of our mission is a client-centric philosophy. We understand that every business is unique, and we take the time to truly comprehend our clients' goals, challenges, and aspirations. By fostering strong, collaborative relationships, we aim to become trusted partners, guiding our clients through the digital landscape with tailored solutions that deliver lasting value.",
      id: 3,
    },
    {
      text: "At NextUpgrad, we don't just provide technology solutions we craft digital success stories. Our mission is to turn your ideas into realities, elevate businesses into iconic brands, and turn challenges into opportunities. Rooted in the belief that innovation and excellence pave the way for the future, we're here to architect your journey to unparalleled success.",
      id: 4,
    },
  ];

  return (
    <Carousel fade>
      {carouselData.map((item) => (
        <Carousel.Item key={item.id} interval={3500}>
          <CarouselImage
            src="/banner.jpg"
            alt={`Slide ${item.id}`}
            text={item.text}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default AdminSlider;
