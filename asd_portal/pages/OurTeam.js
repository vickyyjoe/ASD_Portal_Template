import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import axios from "axios";

var bnr3 = "https://res.cloudinary.com/asd-portal-media/image/upload/v1638987364/6_retake_355b18a44e.jpg";
function OurTeam({ ourTeamHead, ourTeamIntern }) {
  return (
    <>
      <Head>
        <title>Meet Our Team</title>
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
              <h1 class="text-white">Meet Our Team</h1>
              <div class="breadcrumb-row">
                <ul class="list-inline">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>OurTeam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="section-full content-inner">
          <div class="container">
            <div class="section-head text-black text-center">
              <h2 class="title">Head...</h2>
            </div>

            <div class="row">
              {ourTeamHead &&
                ourTeamHead.map((ourTeamHead, ourTeamHeadKey) => (
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={ourTeamHead.userId.userImage.formats.medium.url}
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">
                          {ourTeamHead.userId.userName}
                        </h4>
                        <span class="dlab-position">
                          {ourTeamHead.userId.userPosition}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div class="section-full content-inner">
          <div class="container">
            <div class="section-head text-black text-center">
              <h2 class="title">Intern</h2>
            </div>
            <div class="row">
              {ourTeamIntern &&
                ourTeamIntern.map((ourTeamIntern, ourTeamInternKey) => (
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={
                            ourTeamIntern.userId.userImage.formats.medium.url
                          }
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">
                          {ourTeamIntern.userId.userName}
                        </h4>
                        <span class="dlab-position">
                          {ourTeamIntern.userId.userPosition}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer hideContactInfo displayNewsLetter></Footer>
    </>
  );
}

export default OurTeam;

export async function getServerSideProps() {
  const ourTeamHeadRes = await axios(
    "https://asd-portal-be.herokuapp.com/our-teams?_ourteamRole=Head"
  );
  const ourTeamHead = ourTeamHeadRes.data;

  const ourTeamInternRes = await axios(
    "https://asd-portal-be.herokuapp.com/our-teams?_ourteamRole=Intern"
  );
  const ourTeamIntern = ourTeamInternRes.data;

  return { props: { ourTeamHead, ourTeamIntern } };
}
