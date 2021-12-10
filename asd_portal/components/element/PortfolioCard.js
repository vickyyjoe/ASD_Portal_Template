import React, { useState } from "react";
import Link from "next/link";

const getFilterSections = ({ portfolios }) => {
  const filters = ["all"];
  portfolios.map((portfolio) => {
    if (filters.indexOf(portfolio.portfolioCategory) === -1) {
      filters.push(portfolio.portfolioCategory);
    }
  });
  return filters;
};

const filterImages = (filterKey, portfolios) => {
  const list =
    portfolios &&
    portfolios.filter((portfolio) =>
      filterKey === "all"
        ? portfolio
        : portfolio.portfolioCategory === filterKey
    );

  return list;
};

const PortfolioCard = ({ portfolios }) => {
  const [state, setState] = useState({
    list: portfolios,
    filterKey: "all",
  });

  const { list, filterKey } = state;

  const filteredLists = filterImages(filterKey, list);
  const filters = getFilterSections({ portfolios });
  const collumnCls = portfolios.col ? portfolios.col : "col-md-3";

  // const [filteredData, setfilteredData] = useState();

  // const filterHandle = () => {};
  return (
    <>
      <div className="content-block">
        <div
          className="section-full content-inner-2 portfolio text-uppercase bg-gray"
          id="portfolio"
        >
          <div className="container">
            <div className="site-filters clearfix center  m-b40">
              {/* FILTERS */}
              <ul className="filters" data-toggle="buttons">
                {filters.map((filter) => (
                  <li
                    className="btn"
                    onClick={() => setState({ ...state, filterKey: filter })}
                    key={filter}
                  >
                    <div className="site-button-secondry button-sm radius-xl">
                      <span>{filter}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* FILTERED PORTFOLIO LIST */}
            <div className="portfolio_area">
              <div className="row portfolio-grid">
                {filteredLists &&
                  filteredLists.map((filteredList) => (
                    <div className={collumnCls} key={filteredList.id}>
                      <div className="dlab-box dlab-gallery-box">
                        <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                          <Link href="/">
                            <a>
                              <img
                                src={
                                  filteredList.portfolioImage.formats.small.url
                                }
                                alt=""
                              />
                            </a>
                          </Link>
                          <div className="overlay-bx">
                            <div className="overlay-icon">
                              <div className="text-white">
                                <Link href="/">
                                  <a className="falinkwarna">
                                    <i className="fa fa-link icon-bx-xs"></i>
                                  </a>
                                </Link>

                                <span
                                  className="check-km"
                                  title="Factory Managment"
                                >
                                  <i className="fa fa-picture-o icon-bx-xs"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dez-info p-a30 bg-white">
                          <p className="dez-title m-t0">
                            <Link href="/">{filteredList.portfolioName}</Link>
                          </p>
                          <p>
                            <small>{filteredList.portfolioCategory}</small>
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
    </>
  );
};

export default PortfolioCard;
