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
      <div class="page-content bg-white">
        <div
          class="dlab-bnr-inr overlay-black-middle text-center bg-pt"
          style={{ backgroundImage: "url(" + bnr3 + ")" }}
        >
          <div class="container">
            <div class="dlab-bnr-inr-entry align-m text-center">
              <h1 class="text-white">About us</h1>
              <div class="breadcrumb-row">
                <ul class="list-inline">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>About us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content-block">
          <div
            class="section-full content-inner bg-white video-section"
            style={{ backgroundImage: "url(" + bg1 + ")" }}
          >
            <div class="container">
              <div class="section-content">
                <div class="row d-flex">
                  <div class="col-lg-6 col-md-12 m-b30">
                    <div class="video-bx">
                      <img
                        src={
                          "https://res.cloudinary.com/asd-portal-media/image/upload/v1638987364/carousel_2_a5280729d3.jpg"
                        }
                        alt="Signature"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                    <div class="content-bx1">
                      <h2 class="m-b15 title">
                        ASD PORTAL
                        <br />
                        <span class="text-primary">service, maintenance</span>
                      </h2>
                      <p class="m-b30">
                        A helping platform to product digitalizing for user who
                        needed some dynamic modern feature on their services.
                        ORDER AND GO!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-full bg-gray content-inner-2">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="sort-title clearfix text-center">
                    <h2 class="title">Partners</h2>
                  </div>
                </div>
              </div>
              <div class="section-content">
                <PartnersCarousel partners={partners} />
              </div>
            </div>
          </div>

          <div class="section-full content-inner">
            <div class="container">
              <div class="section-head text-black text-center">
                <h2 class="title">Our Team</h2>
              </div>
              <div class="row">
                {ourteams &&
                  ourteams.slice(0, 8).map((ourteam, ourteamKey) => (
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="dlab-box m-b30 dlab-team1">
                        <div class="dlab-media">
                          <img
                            width="358"
                            height="460"
                            alt=""
                            src={ourteam.userId.userImage.formats.medium.url}
                          />
                        </div>
                        <div class="dlab-info">
                          <h4 class="dlab-title">{ourteam.userId.userName}</h4>
                          <span class="dlab-position">
                            {ourteam.userId.userPosition}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
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
