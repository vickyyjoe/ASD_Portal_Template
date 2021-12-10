import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import responsive from "./slider-resonsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/dist/client/link";

const content = [
  {
    logo: "/images/client-logo/logo1.jpg",
  },
  {
    logo: "/images/client-logo/logo2.jpg",
  },
  {
    logo: "/images/client-logo/logo1.jpg",
  },
  {
    logo: "/images/client-logo/logo3.jpg",
  },
  {
    logo: "/images/client-logo/logo4.jpg",
  },
  {
    logo: "/images/client-logo/logo3.jpg",
  },
];

function PartnersCarousel({ partners }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const Border = partners.hideBorder ? "" : "border";
  const padding = partners.allowPadding ? "p-a25" : "";

  return (
    <>
      <Slider {...settings} className="client-logo-carousel btn-style-1 icon-2">
        {partners.map((partner) => (
          <div className="item" key={partner.id}>
            <div className={`ow-client-logo ${padding}`}>
              <div className={`client-logo ${Border}`}>
                <img src={partner.partnerImage.formats.thumbnail.url} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default PartnersCarousel;
