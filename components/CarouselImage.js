// CarouselImage.js
import React from "react";

function CarouselImage({ src, alt, text }) {
  return (
    <div
      className="carousel-image"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px", // Use the provided height prop or default to 600px
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ visibility: "hidden", height: 0, width: 0 }}
      />
      <div className="aboutSliderCaption">
        <h3
          className={`${
            text ==
            "Welcome to NextUpgrad, Where Businesses Forge their Digital Destiny!"
              ? "banner-main"
              : null
          }`}
        >
          {text}
        </h3>
      </div>
    </div>
  );
}

export default CarouselImage;
