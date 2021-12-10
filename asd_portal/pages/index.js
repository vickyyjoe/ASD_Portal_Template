import React, { Component } from "react";
import Head from "next/head";

import { Parallax } from "react-parallax";
import Link from "next/link";
import Header from "../components/Header";
import Counter from "../components/element/Counter";
import Testimonial from "../components/element/Testimonial";
import Footer from "../components/Footer";
import axios from "axios";
import OurTeam from "./OurTeam";

const bg = "/images/background/bg2.jpg";

const bg3 = "/images/background/map-bg.png";
const bg4 =
  "https://res.cloudinary.com/asd-portal-media/image/upload/v1638987364/6_retake_355b18a44e.jpg";
var bg1 = "/images/background/bg1.jpg";
var bg2 = "/images/background/bg-video.png";

const url = "https://asd-portal-be.herokuapp.com";
const urlCloud = "https://res.cloudinary.com/asd-portal-media/image/upload";

function App({ ourServices, TestimonialDatas, ourTeams }) {
  console.log(TestimonialDatas);
  return (
    <div className="skin-1">
      <Head>
        <title>Home</title>
        <link rel="shortcut icon" href="kalbe.ico" />
      </Head>
      <Header></Header>
      <Parallax bgImage={bg4} strength={300}>
        <div className="hero-section pt-50 home-bnr1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                  <h1 className="title">ASD Portal Product Digitalization</h1>
                  <div className="description">
                    ASD Portal is a platform that helps people to reach their
                    business digitalization. Over million tickets completely
                    fixed/done by ASD Portal.
                  </div>
                  <div className="buttons">
                    <a href="">Read More</a>
                    <a href="">About Us</a>
                  </div>
                  <br></br>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <img src={""} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      <div className="section-full bg-gray content-inner">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title text-primary"> Our Services</h2>
            <p>
              There are many variations of services that could help you choose
              what kind of service that you might need.
            </p>
          </div>
          <div className="section-content row">
            {ourServices &&
              ourServices.slice(0, 6).map((ourservice, ourservicekey) => (
                <div
                  className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                  key={ourservice.id}
                >
                  <div className="icon-bx-wraper" data-name={ourservice.id}>
                    <div className="icon-lg">
                      <img src={ourservice.serviceImage.formats.small.url} />
                    </div>
                    <div className="icon-content">
                      <h2 className="dlab-tilte">{ourservice.serviceName}</h2>
                      <p>{ourservice.serviceDesc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        className="section-full overlay-black-dark bg-img-fix text-white content-inner"
        style={{ backgroundImage: "url(" + bg1 + ")" }}
      >
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div className="m-b30 dlab-box text-center counter-style-2">
                  <div className="icon-lg ">
                    <i className="flaticon-factory"></i>
                  </div>
                  <div className="text-blue">
                    <Counter count={7652} />
                  </div>
                  <span className="counter-text">Completed Projects</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div className="m-b30 dlab-box text-center counter-style-2">
                  <div className="icon-lg ">
                    <i className="flaticon-worker"></i>
                  </div>
                  <div className="text-blue">
                    <Counter count={4562} />
                  </div>
                  <span className="counter-text">Happy Clients</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div className="m-b30 dlab-box text-center counter-style-2">
                  <div className="icon-lg ">
                    <i className="flaticon-settings"></i>
                  </div>
                  <div className="text-blue">
                    <Counter count={3569} />
                  </div>
                  <span className="counter-text">Questions Answered</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div className="m-b10 dlab-box text-center counter-style-2">
                  <div className="icon-lg ">
                    <i className="flaticon-conveyor"></i>
                  </div>
                  <div className="text-blue">
                    <Counter count={2089} />
                  </div>
                  <span className="counter-text">Ordered Coffee's</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full bg-gray content-inner">
        <div
          className="section-full content-inner bg-white video-section"
          style={{ backgroundImage: "url(" + bg2 + ")" }}
        >
          <div className="container">
            <div className="section-content">
              <div className="row d-flex">
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="video-bx">
                    <img
                      src={
                        "https://res.cloudinary.com/asd-portal-media/image/upload/v1638987364/carousel_2_a5280729d3.jpg"
                      }
                      alt="Signature"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                  <div className="content-bx1">
                    <h2 className="m-b15 title">
                      ASD PORTAL
                      <br />
                      <span className="text-primary">service, maintenance</span>
                    </h2>
                    <p className="m-b30">
                      A helping platform to product digitalizing for user who
                      needed some dynamic modern feature on their services.
                      SIMPLY ORDER AND GO!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-block">
        <div className="section-full content-inner bg-white">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title"> Our Team</h2>
            </div>
            <div className="row">
              <div className="col-lg-6 m-b30">
                <div className="row">
                  {ourTeams &&
                    ourTeams.slice(0, 4).map((ourTeam, ourTeamKey) => (
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="dlab-box m-b30 dlab-team1">
                          <div className="dlab-media">
                            <img
                              width="358"
                              height="460"
                              alt=""
                              src={ourTeam.userId.userImage.formats.medium.url}
                            />
                          </div>
                          <div className="dlab-info">
                            <h4 className="dlab-title">
                              {ourTeam.userId.userName}
                            </h4>
                            <span className="dlab-position">
                              {ourTeam.userId.userPosition}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div clas="row">
                  <div className="section-head text-center">
                    <h2 className="title"> LeaderBoard</h2>
                  </div>
                </div>

                <div className="section-content box-sort-in m-b10 p-b0 button-example m-b12">
                  {ourTeams &&
                    ourTeams.slice(0, 8).map((ourTeam, ourTeamKey) => (
                      <ul className="list-cup red list-box">
                        <li> {ourTeam.userId.userName} </li>
                      </ul>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full bg-gray content-inner-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sort-title clearfix text-center">
                <h2 className="title">Testimonial</h2>
              </div>
            </div>
          </div>
          <div className="section-content">
            <Testimonial testimonialData={TestimonialDatas} />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;

export async function getServerSideProps() {
  const ourServiceRes = await axios(
    "https://asd-portal-be.herokuapp.com/our-services?_sort=serviceId"
  );
  const ourServices = ourServiceRes.data;

  const TestimonialData = await axios(
    "https://asd-portal-be.herokuapp.com/Testimonials"
  );
  const TestimonialDatas = TestimonialData.data;

  const ourTeamRes = await axios(
    "https://asd-portal-be.herokuapp.com/our-teams?_sort=id"
  );
  const ourTeams = ourTeamRes.data;

  return { props: { ourServices, TestimonialDatas, ourTeams } };
}
