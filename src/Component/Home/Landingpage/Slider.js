

import React, { useState } from "react";
import "./Landingpage.css";
import img1 from "../../../assets/Images/cabinate15.avif";
import img2 from "../../../assets/Images/cabinate16.jpeg";
import img3 from "../../../assets/Images/cabinate17.webp";
import img4 from "../../../assets/Images/cabinate18.jpg";

const sliderData = [
  {
    img: img1,
    title: "MAGIC SLIDER",
    type: "FLOWER",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.",
  },
  {
    img: img2,
    title: "MAGIC SLIDER",
    type: "NATURE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.",
  },
  {
    img: img3,
    title: "MAGIC SLIDER",
    type: "PLANT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.",
  },
  {
    img: img4,
    title: "MAGIC SLIDER",
    type: "NATURE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMoveSlider = (dir) => {
    if (dir === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    } else {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + sliderData.length) % sliderData.length
      );
    }
  };

  return (
    <div className="slider">
      <div className="list">
        <div
          className="item"
          style={{
            backgroundImage: `url(${sliderData[currentIndex].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="content">
            <div className="title">{sliderData[currentIndex].title}</div>
            <div className="type">{sliderData[currentIndex].type}</div>
            <div className="description">
              {sliderData[currentIndex].description}
            </div>
            <div className="button">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="thumbnail">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`item ${
              index === currentIndex ? "active-thumbnail" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={slide.img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={() => handleMoveSlider("prev")}>
          {"<"}
        </button>
        <button className="next" onClick={() => handleMoveSlider("next")}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;


