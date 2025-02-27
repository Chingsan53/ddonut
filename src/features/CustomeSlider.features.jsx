import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./CustomSlider.css";

const images = [
  "https://travelteam.com/wp-content/uploads/2020/02/Hamilton-island-air-Great-barrier-reef-discovery.jpg",
  "https://media.apnarm.net.au/media/images/2018/07/18/imagev165446767af67b17a209dcf24897f19a9-zhxv3b4659lgikmjmq2_ct1880x930.jpg",
  "https://www.qldeducationexperiences.org.au/wp-content/uploads/2021/06/Snorkelling-GBR-Shutterstock-scaled.jpg",
  "https://www.rydges.com/accommodation/cairns-qld/esplanade-cairns-resort/wp-content/uploads/sites/34/2021/08/9081ea8ef3f0c04fd0120c4e86f2bd1c.jpg",
];

export default function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const arrowRef = useRef();

  const displayImages = images.map((img, i) => (
    <div key={i} className="slide">
      <img src={img} alt={`Slide ${i}`} />
    </div>
  ));

  const incrementAndDecrement = (btn) => {
    if (btn === "increment") {
      arrowRef.current.slickNext();
    } else {
      arrowRef.current.slickPrev();
    }
  };

  return (
    <section className="slick-container">
      <Slider ref={arrowRef} {...settings}>
        {displayImages}
      </Slider>
      <div className="slick-arrows">
        <button onClick={() => incrementAndDecrement("decrement")}>
          <IoIosArrowBack />
        </button>
        <button onClick={() => incrementAndDecrement("increment")}>
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}
