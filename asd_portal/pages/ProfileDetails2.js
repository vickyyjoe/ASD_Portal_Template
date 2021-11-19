import Footer from "./components/Footer";
import Header from "./components/Header";
import { Component } from "react";
import { Progress } from "reactstrap";

import Testmonial10 from "./components/element/Testimonial";

const work1 = "/images/our-work/pic1.jpg";
export class ProfileDetails2 extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div class="page-content bg-white">
          <div className="container clearfix paddingnull boxshadow m-b30">
            <div className="bgimage1 tinggi overlay-black-dark bg-img-fix "></div>
            <div className=" container main1 clearfix ">
              <div className="row clearfix">
                <div className="left1 col-lg-4">
                  <div className="photo clearfix">
                    <div class="dlab-box m-b30 dlab-team4">
                      <div class="dlab-media">
                        <a href="/">
                          <img
                            alt=""
                            src={"/images/our-team/team-bx/pic1.jpg"}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h4 className="name1">Nashid Martines</h4>
                  <p class="desc-stat">Developer</p>
                  <h5>Experience</h5>
                  <Progress
                    className="borderradi"
                    color="success borderradi"
                    value={50}
                  />
                  <div class="stats row">
                    <div class="col-sm-4">
                      <p class="desc-stat">Projects</p>
                      <h5 class="number-stat">21</h5>
                    </div>
                    <div class="col-sm-4">
                      <p class="desc-stat">Appreciation</p>
                      <h5 class="number-stat">42</h5>
                    </div>
                    <div class="col-sm-4">
                      <p class="desc-stat">Testimonials</p>
                      <h5 class="number-stat">38</h5>
                    </div>
                  </div>
                </div>
                <div className="right1 col-lg-8 m-b30">
                  <div className="recletter">
                    <h5 class="name1">Recommendation Letter</h5>
                    <div class="row">
                      <div class="col-lg-4">
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
                            <span class="dlab-position">Director</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
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
                            <span class="dlab-position">Director</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container clearfix paddingnull">
            <div
              className="service-box style3 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div class="icon-bx-wraper" data-name="01">
                <div className="icon-content">
                  <div className="row m-b30">
                    <div className="col-lg-2">
                      <h4 className="dlab-tilte">Status</h4>
                    </div>
                    <div className="col-lg-10">
                      <p>Available</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                      <h5 className="dlab-tilte">Game Web Design</h5>
                    </div>
                    <div className="col-lg-3">
                      <p>Developer</p>
                    </div>
                    <div className="col-lg-6">
                      <h5 className="dlab-tilte">
                        September 2021 - Desember 2021
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container clearfix paddingnull">
            <div
              className="service-box style3 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div class="icon-bx-wraper" data-name="02">
                <div className="icon-content">
                  <div className="row m-b30">
                    <div className="col">
                      <h4 className="dlab-tilte">Experience</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2">
                      <p>2020 - present</p>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="dlab-tilte">Developer</h5>
                      <p>
                        Mendevelop website yang dibutuhkan sesuai kebutuhan para
                        user Mendevelop website yang dibutuhkan sesuai kebutuhan
                        para user Mendevelop website yang dibutuhkan sesuai
                        kebutuhan para user Mendevelop website yang dibutuhkan
                        sesuai kebutuhan para user Mendevelop website yang
                        dibutuhkan sesuai kebutuhan para user Mendevelop website
                        yang dibutuhkan sesuai kebutuhan para user
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container clearfix paddingnull">
            <div className="row">
              <div className="col">
                <div
                  className="service-box style3 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div class="icon-bx-wraper" data-name="03">
                    <div className="icon-content">
                      <div className="row m-b30">
                        <div className="col ">
                          <h4 className="dlab-tilte ">Skills</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div class="icon-bx-wraper1 center">
                            <div class="icon-bx-sm radius bg-primary m-b20">
                              <a href="/" class="icon-cell">
                                <i class="ti-ruler-pencil"></i>
                              </a>
                            </div>
                            <div class="icon-content">
                              <p className="pcolor">Lorem ipsum dolor</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div class="icon-bx-wraper1 center">
                            <div class="icon-bx-sm radius bg-primary m-b20">
                              <a href="/" class="icon-cell">
                                <i class="ti-ruler-pencil"></i>
                              </a>
                            </div>
                            <div class="icon-content">
                              <p className="pcolor">Lorem ipsum dolor</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div class="icon-bx-wraper1 center">
                            <div class="icon-bx-sm radius bg-primary m-b20">
                              <a href="/" class="icon-cell">
                                <i class="ti-ruler-pencil"></i>
                              </a>
                            </div>
                            <div class="icon-content">
                              <p className="pcolor">Lorem ipsum dolor</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="service-box style3 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div class="icon-bx-wraper" data-name="04">
                    <div className="icon-content">
                      <div className="row m-b30">
                        <div className="col">
                          <h4 className="dlab-tilte">Experience</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div class="icon-bx-wraper1 center">
                            <div class="icon-bx-sm radius bg-primary m-b20">
                              <a href="/" class="icon-cell">
                                <i class="ti-ruler-pencil"></i>
                              </a>
                            </div>
                            <div class="icon-content">
                              <p className="pcolor">Lorem ipsum dolor</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div class="icon-bx-wraper1 center">
                            <div class="icon-bx-sm radius bg-primary m-b20">
                              <a href="/" class="icon-cell">
                                <i class="ti-ruler-pencil"></i>
                              </a>
                            </div>
                            <div class="icon-content">
                              <p className="pcolor">Lorem ipsum dolor</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div class="icon-bx-wraper1 center">
                            <div class="icon-bx-sm radius bg-primary m-b20">
                              <a href="/" class="icon-cell">
                                <i class="ti-ruler-pencil"></i>
                              </a>
                            </div>
                            <div class="icon-content">
                              <p className="pcolor">Lorem ipsum dolor</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container clearfix paddingnull">
            <div
              className="service-box style3 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div class="icon-bx-wraper" data-name="05">
                <div className="icon-content">
                  <div className="row m-b30">
                    <div className="col">
                      <h4 className="dlab-tilte">Projects History</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-11 m-l30">
                      <ul class="list-num-count red list-box">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Aorem ipsum dolor sit amet</li>
                        <li>Borem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Aorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container clearfix paddingnull">
            <div
              className="service-box style3 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div class="icon-bx-wraper" data-name="06">
                <div className="icon-content">
                  <div className="row m-b30">
                    <div className="col">
                      <h4 className="dlab-tilte">Appreciation</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-11 m-l30">
                      <ul class="list-num-count red list-box">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Aorem ipsum dolor sit amet</li>
                        <li>Borem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Aorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-full bg-gray content-inner-2">
            <div class="container">
              <div class="section-content">
                <Testmonial10></Testmonial10>
                <div class="row m-t10 m-l5">
                  <div class="col-lg-12 midaligner ">
                    <button
                      class="site-button green m-r15 radius-xl box-shadow "
                      type="button"
                    >
                      View All
                    </button>
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
export default ProfileDetails2;
