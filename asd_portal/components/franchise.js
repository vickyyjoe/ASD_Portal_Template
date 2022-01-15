import { Component } from "react";
import Link from "next/link";
import Header from "./Header";
import { Accordion, AccordionItem } from "react-sanfona";
import Counter from "./element/Counter";
import Footer from "./Footer";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

var bg1 = "/images/background/bg1.jpg";
const bg =
  "https://res.cloudinary.com/asd-portal-media/image/upload/v1638987364/6_retake_355b18a44e.jpg";

function franchise({ procedures, pricings, faqs }) {
  console.log(faqs);

  return (
    <div className="skin-1">
      <Header></Header>
      <div
        class="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <div class="container">
          <div class="dlab-bnr-inr-entry">
            <h1 class="text-white">Franchise</h1>
            <div class="breadcrumb-row">
              <ul class="list-inline">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Franchise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="section-full content-inner bg-white">
        <div class="container">
          <div class="section-head text-center">
            <h2 class="title">Procedure</h2>
          </div>
          <div class="section-content row">
            {procedures &&
              procedures.slice(0, 6).map((procedure, procedurekey) => (
                <div
                  class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="0.3s"
                >
                  <div class="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                    <div class="icon-bx-sm bg-primary m-b20">
                      <span class="icon-cell">
                        <i>{procedure.id}</i>
                      </span>{" "}
                    </div>
                    <div class="icon-content p-l40">
                      <h5 class="dlab-tilte">{procedure.procedureName}</h5>
                      <p>{procedure.procedureDesc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        class="section-full overlay-black-dark bg-img-fix text-white content-inner"
        style={{ backgroundImage: "url(" + bg1 + ")" }}
      >
        <div class="container">
          <div class="section-content">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div class="m-b30 dlab-box text-center counter-style-2">
                  <div class="icon-lg ">
                    <i class="flaticon-factory"></i>
                  </div>
                  <div class="text-blue">
                    <Counter count={7652} />
                  </div>
                  <span class="counter-text">Completed Projects</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div class="m-b30 dlab-box text-center counter-style-2">
                  <div class="icon-lg ">
                    <i class="flaticon-worker"></i>
                  </div>
                  <div class="text-blue">
                    <Counter count={4562} />
                  </div>
                  <span class="counter-text">Happy Clients</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div class="m-b30 dlab-box text-center counter-style-2">
                  <div class="icon-lg ">
                    <i class="flaticon-settings"></i>
                  </div>
                  <div class="text-blue">
                    <Counter count={3569} />
                  </div>
                  <span class="counter-text">Questions Answered</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div class="m-b10 dlab-box text-center counter-style-2">
                  <div class="icon-lg ">
                    <i class="flaticon-conveyor"></i>
                  </div>
                  <div class="text-blue">
                    <Counter count={2089} />
                  </div>
                  <span class="counter-text">Ordered Coffee's</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dlab-divider bg-gray-dark tb10">
        <i class="icon-dot c-square"></i>
      </div>
      <div class="section-full bg-white content-inner">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <h2 class="title">Pricing </h2>
              </div>
              <div class="section-content box-sort-in button-example p-tb50">
                <div class="pricingtable-row">
                  <div class="row">
                    {pricings &&
                      pricings.slice(0, 1).map((pricing, pricingkey) => (
                        <div class="col-sm-12 col-md-4 col-lg-4">
                          <div class="pricingtable-wrapper">
                            <div class="pricingtable-inner">
                              <div class="pricingtable-price">
                                {" "}
                                <span class="pricingtable-bx">
                                  Rp {pricing.price}
                                </span>{" "}
                              </div>
                              <div class="pricingtable-title bg-primary">
                                <h2>{pricing.priceName}</h2>
                              </div>
                              <span>
                                {pricing.pricingdetailId.map((pd) => (
                                  <ul class="pricingtable-features">
                                    <li>
                                      <i class="fa fa-check"></i>
                                      {pd.pricingDesc}
                                    </li>
                                  </ul>
                                ))}
                              </span>
                              <div class="pricingtable-footer">
                                {" "}
                                <Popup
                                  trigger={<div class="site-button ">Buy</div>}
                                  position="right center"
                                >
                                  <div>
                                    Apahkah anda ingin membeli paket ini ?!
                                    <a href="/TahapDevelopment">
                                      <div class="site-button ">Yes</div>
                                    </a>
                                  </div>
                                </Popup>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    {pricings &&
                      pricings.slice(2, 3).map((pricing) => (
                        <div class="col-sm-12 col-md-4 col-lg-4">
                          <div class="pricingtable-wrapper">
                            <div class="pricingtable-inner pricingtable-highlight">
                              <div class="pricingtable-price">
                                {" "}
                                <span class="pricingtable-bx">
                                  Rp {pricing.price}
                                </span>
                              </div>
                              <div class="pricingtable-title bg-primary">
                                <h2>{pricing.priceName}</h2>
                              </div>
                              <span>
                                {pricing.pricingdetailId.map((pd) => (
                                  <ul class="pricingtable-features">
                                    <li>
                                      <i class="fa fa-check"></i>
                                      {pd.pricingDesc}
                                    </li>
                                  </ul>
                                ))}
                              </span>
                              <div class="pricingtable-footer">
                                {" "}
                                <Popup
                                  trigger={<div class="site-button ">Buy</div>}
                                  position="right center"
                                >
                                  <div>
                                    Apahkah anda ingin membeli paket ini ?!
                                    <a href="/TahapDevelopment">
                                      <div class="site-button ">Yes</div>
                                    </a>
                                  </div>
                                </Popup>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    {pricings &&
                      pricings.slice(1, 2).map((pricing, pricingkey) => (
                        <div class="col-sm-12 col-md-4 col-lg-4">
                          <div class="pricingtable-wrapper">
                            <div class="pricingtable-inner">
                              <div class="pricingtable-price">
                                {" "}
                                <span class="pricingtable-bx">
                                  Rp{pricing.price}
                                </span>{" "}
                              </div>
                              <div class="pricingtable-title bg-primary">
                                <h2>{pricing.priceName}</h2>
                              </div>
                              <span>
                                {pricing.pricingdetailId.map((pd) => (
                                  <ul class="pricingtable-features">
                                    <li>
                                      <i class="fa fa-check"></i>
                                      {pd.pricingDesc}
                                    </li>
                                  </ul>
                                ))}
                              </span>
                              <div class="pricingtable-footer">
                                {" "}
                                <Popup
                                  trigger={<div class="site-button ">Buy</div>}
                                  position="right center"
                                >
                                  <div>
                                    Apahkah anda ingin membeli paket ini ?!
                                    <a href="/TahapDevelopment">
                                      <div class="site-button ">Yes</div>
                                    </a>
                                  </div>
                                </Popup>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-block">
        <div class="section-full overlay-white-middle content-inner">
          <div class="container">
            <div class="section-head text-black text-center">
              <h3 class="title">Do you have Questions?</h3>
              <p>
                Anda dapat melihat jawaban dari pertanyaan yang paling sering
                kami dapatkan.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-12 m-b30">
                <div class="faq-video">
                  <Link
                    class="play-btn popup-youtube"
                    href="/https://www.youtube.com/watch?v=_FRZVScwggM"
                  >
                    <i class="flaticon-play-button text-white"></i>
                  </Link>
                  <img
                    src={
                      "https://res.cloudinary.com/asd-portal-media/image/upload/v1639239602/kalbe_7172475ef3.jpg"
                    }
                    alt=""
                    class="img-cover radius-sm"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12 m-b30">
                <Accordion className="accordian dlab-accordion faq-1 box-sort-in m-b30 faq">
                  {faqs &&
                    faqs.map((faq) => (
                      <AccordionItem
                        title={faq.faqName}
                        className="accodion-title"
                        titleTag="h6"
                      >
                        {faq.faqDesc}
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer hideContactInfo displayNewsLetter></Footer>
    </div>
  );
}

export default franchise;
