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

class PartnersCarousel extends Component {
  render() {
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

    const Border = this.props.hideBorder ? "" : "border";
    const padding = this.props.allowPadding ? "p-a25" : "";

    return (
      <>
        <Slider
          {...settings}
          className="client-logo-carousel btn-style-1 icon-2"
        >
          {content.map((item, id) => (
            <div class="item">
              <div class={`ow-client-logo ${padding}`}>
                <div class={`client-logo ${Border}`}>
                  <Link href="#">
                    <img src={item.logo} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
export default PartnersCarousel;
