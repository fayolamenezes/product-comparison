import React from 'react';
import Slider from 'react-slick';
import './Carousel.module.css';  // Adjust the path according to your directory structure

export default function Carousel({ items }) {
  console.log(items); // Log items to check the data passed

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Speed of the transition between slides
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of the autoplay (in milliseconds)
    prevArrow: <div className="slick-prev">{"<"}</div>,  // Custom previous arrow
    nextArrow: <div className="slick-next">{">"}</div>,  // Custom next arrow
    centerMode: true, // Optionally, enable center mode for continuous sliding
    focusOnSelect: true, // Allows the selected slide to focus on the active one
    pauseOnHover: true, // Pause autoplay when the user hovers over the carousel
  };

  return (
    <Slider {...settings}>
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
          </div>
        ))
      ) : (
        <div>No items to display</div> // Fallback message
      )}
    </Slider>
  );
}
