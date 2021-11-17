import { Component } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PartnersCarousel from "./components/element/PartnersCarousel";

var bnr3 = "/images/banner/bnr3.jpg";
var bg1 = "/images/background/bg-video.png";
var bg2 = "/images/background/bg1.jpg";

export class ProjectDetails2 extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div class="page-content bg-white">
          <div
            class="dlab-bnr-inr overlay-black-middle text-center bg-pt"
            style={{ backgroundImage: "url(" + bnr3 + ")" }}
          >
            <div class="container">
              <div class="dlab-bnr-inr-entry align-m text-center">
                <h1 class="text-white">About us 1</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About us 1</li>
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
                        <img src={"/images/about/pic5.jpg"} alt="Signature" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                      <div class="content-bx1">
                        <h2 class="m-b15 title">
                          PT Kalbe Farma Tbk.
                          <br />
                          <span class="text-primary">service, maintenance</span>
                        </h2>
                        <p class="m-b30">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an.
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
                  <PartnersCarousel />
                </div>
              </div>
            </div>

            <div class="section-full content-inner">
              <div class="container">
                <div class="section-head text-black text-center">
                  <h2 class="title">Our Team</h2>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={"/images/our-team/pic1.jpg"}
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">Nashid Martines</h4>
                        <span class="dlab-position">Direchrefr</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={"/images/our-team/pic1.jpg"}
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">Nashid Martines</h4>
                        <span class="dlab-position">Direchrefr</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={"/images/our-team/pic1.jpg"}
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">Nashid Martines</h4>
                        <span class="dlab-position">Direchrefr</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={"/images/our-team/pic1.jpg"}
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">Nashid Martines</h4>
                        <span class="dlab-position">Direchrefr</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={"/images/our-team/pic1.jpg"}
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">Nashid Martines</h4>
                        <span class="dlab-position">Direchrefr</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={"/images/our-team/pic1.jpg"}
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">Nashid Martines</h4>
                        <span class="dlab-position">Direchrefr</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={"/images/our-team/pic1.jpg"}
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">Nashid Martines</h4>
                        <span class="dlab-position">Direchrefr</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="dlab-box m-b30 dlab-team1">
                      <div class="dlab-media">
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={"/images/our-team/pic1.jpg"}
                        />
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">Nashid Martines</h4>
                        <span class="dlab-position">Direchrefr</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default ProjectDetails2;
