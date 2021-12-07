import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import responsive from "./slider-resonsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const content = [
//   {
//     image: ".//images/testimonials/pic4.jpg",
//     author: "Alexer Valvin",
//     designation: "Student",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ",
//   },
//   {
//     image: ".//images/testimonials/pic5.jpg",
//     author: "Alexer Valvin",
//     designation: "Student",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ",
//   },
//   {
//     image: ".//images/testimonials/pic6.jpg",
//     author: "Alexer Valvin",
//     designation: "Student",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ",
//   },
//   {
//     image: ".//images/testimonials/pic5.jpg",
//     author: "Alexer Valvin",
//     designation: "Student",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ",
//   },
// ];


function Testmonial10({testimonialData}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: responsive(),
  };
  return (
    <>
      <Slider
        {...settings}
        className="testimonial-two-dotsl dots-long d-primary btn-style-1"
      >
        {testimonialData && testimonialData.map((item) => (
          <div
            class="item p-a5 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div class="testimonial-9">
              <div class="testimonial-pic radius style1">
                <img src={url + item.testiImage.formats.small.url} width="100" height="100" alt="" />
              </div>
              <div class="testimonial-text">
                <p>{item.testiDesc}</p>
              </div>
              <div class="testimonial-detail">
                <strong class="testimonial-name">{item.testiUser}</strong>
                <span class="testimonial-position">{item.testiPosition}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Testmonial10;
