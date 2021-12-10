import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

// const images = "https://asd-portal-be.herokuapp.com/portfolios";
// [
//   {
//     id: 1,
//     name: "agriculture",
//     agriculture: true,
//     title: "Mining Plant Set Up",
//     subTitle: "System",
//     imgUrl: "/images/portfolio/image_1.jpg",
//   },
//   {
//     id: 2,
//     name: "agriculture",
//     agriculture: true,
//     title: "Mining Plant Set Up",
//     subTitle: "Mining / Plants",
//     imgUrl: "/images/portfolio/image_2.jpg",
//   },
//   {
//     id: 3,
//     name: "agriculture",
//     agriculture: true,
//     title: "sanfran cisco bridge",
//     subTitle: "Engineering",
//     imgUrl: "/images/portfolio/image_3.jpg",
//   },
//   {
//     id: 4,
//     name: "chemical",
//     chemical: true,
//     title: "Capturing Manila",
//     subTitle: "Energy",
//     imgUrl: "/images/portfolio/image_4.jpg",
//   },
//   {
//     id: 5,
//     name: "chemical",
//     chemical: true,
//     title: "berlin central bank",
//     subTitle: "industry",
//     imgUrl: "/images/portfolio/image_5.jpg",
//   },
//   {
//     id: 6,
//     name: "chemical",
//     chemical: true,
//     title: "Mining Plant Set Up",
//     subTitle: "Bank / Constructions",
//     imgUrl: "/images/portfolio/image_6.jpg",
//   },
//   {
//     id: 7,
//     name: "mechanical",
//     mechanical: true,
//     title: "Mining Plant Set Up",
//     subTitle: "Branding and Identity",
//     imgUrl: "/images/portfolio/image_7.jpg",
//   },
//   {
//     id: 8,
//     name: "mechanical",
//     mechanical: true,
//     title: "hamburg wind energy",
//     subTitle: "industry",
//     imgUrl: "/images/portfolio/image_8.jpg",
//   },
//   {
//     id: 9,
//     name: "power energy",
//     powerenergy: true,
//     title: "berlin central bank",
//     subTitle: "industry",
//     imgUrl: "/images/portfolio/image_1.jpg",
//   },
//   {
//     id: 10,
//     name: "power energy",
//     powerenergy: true,
//     title: "sanfran cisco bridge",
//     subTitle: "Bank / Constructions",
//     imgUrl: "/images/portfolio/image_9.jpg",
//   },
//   {
//     id: 9,
//     name: "plants",
//     plants: true,
//     title: "Muchen Railway Station",
//     subTitle: "Engineering",
//     imgUrl: "/images/portfolio/image_10.jpg",
//   },
// ];

// const FILTER_DEFS = {
//   Mobile: (image) => image[("Mobile Apps IOS", "Mobile Apps")],
//   Web: (image) => image.Web,
//   all: (image) => image,
// };

// const getFilterSections = (portofolio) => {
//   const filters = ["all"];
//   portofolio.map((image) => {
//     if (filters.indexOf(image.portfolioCategory) === -1) {
//       filters.push(image.portfolioCategory);
//     }
//   });
//   return filters;
// };

// const filterImages = (filterKey, portofolio) => {
//   const list = portofolio.filter((image) =>
//     filterKey === "all" ? image : image.portfolioCategory === filterKey
//   );

//   return list;
// };

const PortfolioCard = ({ portfolios }) => {
  // const [state, setState] = useState({
  //   list: portofolio,
  //   filterKey: "all",
  // });

  // const { list, filterKey } = state;

  // const filteredList = filterImages(filterKey, list);
  // const filters = getFilterSections(portofolio);
  // const collumnCls = portfolioCard.col ? portfolioCard.col : "col-md-3";
  console.log(portfolios);
  const [filteredData, setfilteredData] = useState();

  const filterHandle = () => {};
  return (
    <div class="content-block">
      <div
        class="section-full content-inner-2 portfolio text-uppercase bg-gray"
        id="portfolio"
      >
        <div class="container">
          {/* <div class="site-filters clearfix center  m-b40">
            {/* FILTERS */}
          {/* <ul class="filters" data-toggle="buttons">
              {portfolioCard.map((filter) => (
                <li
                  class="btn"
                  onClick={() => setState({ ...state, filterKey: filter })}
                >
                  <div className="site-button-secondry button-sm radius-xl">
                    <span>{filter}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>  */}

          {/* FILTERED PORTFOLIO LIST */}
          <div className="portfolio_area">
            <div className="row portfolio-grid">
              {portfolios &&
                portfolios.map((portfolio) => (
                  <div className="col-md-3">
                    <div class="dlab-box dlab-gallery-box">
                      <div class="dlab-media dlab-img-overlay1 dlab-img-effect">
                        <Link href="/">
                          <a>
                            <img
                              src={portfolio.portfolioImage.formats.small.url}
                              alt=""
                            />
                          </a>
                        </Link>
                        <div class="overlay-bx">
                          <div class="overlay-icon">
                            <div class="text-white">
                              <Link href="/">
                                <a class="falinkwarna">
                                  <i class="fa fa-link icon-bx-xs"></i>
                                </a>
                              </Link>

                              <span class="check-km" title="Factory Managment">
                                <i class="fa fa-picture-o icon-bx-xs"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="dez-info p-a30 bg-white">
                        <p class="dez-title m-t0">
                          <Link href="/">{portfolio.portfolioName}</Link>
                        </p>
                        <p>
                          <small>{portfolio.portfolioCategory}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
