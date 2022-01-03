import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PartnersCarousel from "../components/element/PartnersCarousel";
import Head from "next/head";
import axios from "axios";

var bnr3 = "/images/banner/bnr3.jpg";
var bg1 = "/images/background/bg-video.png";
var bg2 = "/images/background/bg1.jpg";

function AboutUs({ partners, ourteams }) {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="shortcut icon" href="kalbe.ico" />
      </Head>
      <Header></Header>
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
          style={{ backgroundImage: "url(" + bnr3 + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry align-m text-center">
              <h1 className="text-white">About us</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>About us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div
            className="section-full content-inner bg-white video-section"
            style={{ backgroundImage: "url(" + bg1 + ")" }}
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
                        <span className="text-primary">
                          service, maintenance
                        </span>
                      </h2>
                      <p className="m-b30">
                        A helping platform to product digitalizing for user who
                        needed some dynamic modern feature on their services.
                        SIMPLY CHOOSE and ORDER!
                      </p>
                      <div className="row m-t10 m-l5">
                        <div className="col-lg-12 text-center ">
                          <Link href={"/Portofolio"}>
                            <button
                              className="site-button yellow m-r15 radius-xl box-shadow "
                              type="button"
                            >
                              Go To Portofolio
                            </button>
                          </Link>
                        </div>
                      </div>
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
                    <h2 className="title">Partners</h2>
                  </div>
                </div>
              </div>
              <div className="section-content">
                <PartnersCarousel partners={partners} />
              </div>
            </div>
          </div>

          <div className="section-full content-inner">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2 className="title">Our Team</h2>
              </div>
              <div className="row">
                {ourteams &&
                  ourteams.slice(0, 8).map((ourteam) => (
                    <div
                      className="col-lg-3 col-md-6 col-sm-6"
                      key={ourteam.id}
                    >
                      <div className="dlab-box m-b30 dlab-team1">
                        <div className="dlab-media">
                          <img
                            width="358"
                            height="460"
                            alt=""
                            src={ourteam.userId.userImage.formats.medium.url}
                          />
                        </div>
                        <div className="dlab-info">
                          <h4 className="dlab-title">
                            {ourteam.userId.userName}
                          </h4>
                          <span className="dlab-position">
                            {ourteam.userId.userPosition}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="row m-t10 m-l5">
                <div className="col-lg-12 text-center ">
                  <Link href={"/OurTeam"}>
                    <button
                      className="site-button yellow m-r15 radius-xl box-shadow "
                      type="button"
                    >
                      View All
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer hideContactInfo displayNewsLetter></Footer>
    </>
  );
}

export default AboutUs;
export async function getServerSideProps() {
  const partnerRes = await axios(
    "https://asd-portal-be.herokuapp.com/partners"
  );
  const partners = partnerRes.data;

  const ourteamRes = await axios(
    "https://asd-portal-be.herokuapp.com/our-teams?_sort=id"
  );
  const ourteams = ourteamRes.data;

  return { props: { partners, ourteams } };
}
