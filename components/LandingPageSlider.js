import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/LandingPage.module.css";

const LandingPageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className={styles.portSlider}>
          <img src="/port1.jpg" alt="Image 1" style={{ width: "100%" }} />
        </div>

        <div className={styles.portSlider}>
          <img src="/port2.jpg" alt="Image 2" style={{ width: "100%" }} />
        </div>

        <div className={styles.portSlider}>
          <img src="/port3.jpg" alt="Image 3" style={{ width: "100%" }} />
        </div>

        <div className={styles.portSlider}>
          <img src="/port4.jpg" alt="Image 4" style={{ width: "100%" }} />
        </div>

        <div className={styles.portSlider}>
          <img src="/port5.jpg" alt="Image 5" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
};

export default LandingPageSlider;
