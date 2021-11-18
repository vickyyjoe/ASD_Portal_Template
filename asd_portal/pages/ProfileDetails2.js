import Footer from "./components/Footer";
import Header from "./components/Header";
import { Component } from "react";
import { Progress } from "reactstrap";

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

          <div className="container clearfix boxshadow m-b30">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <h4 class="name1">Status</h4>
                </div>
                <div className="col-lg-10">
                  <p class="name1">Available</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <h5>Game Web Design</h5>
                </div>
                <div className="col-lg-3">
                  <p>Developer</p>
                </div>
                <div className="col-lg-6">
                  <h5>September 2021 - Desember 2021</h5>
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
