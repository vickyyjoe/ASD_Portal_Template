import Footer from "./components/Footer";
import Header from "./components/Header";
import { Component } from "react";
import { Progress } from "reactstrap";
import Testmonial10 from "./components/element/Testimonial";
import { Badge } from "reactstrap";
import Avatar from "react-avatar";
import StarRatings from "react-star-ratings";


const bg1 = "/images/background/bg1.jpg";

const work1 = "/images/our-work/pic1.jpg";
export class ProfileDetails2 extends Component {
  render() {
    return (
      <>
        <Header></Header>
       
        <div class="page-content bg-gray ">
          <div class="section-full bg-gray m-b30">
            <div class="container">
              <div className="gambarlatar halamanmargin overlay-black-dark bg-img-fix "></div>
              <div className="container bayangan halamanmargin">
                <div className="row">
                  <div className="col-md-2 photo">
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
                </div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="dlab-tilte">Nashid Martines</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="putihtextcolor">
                      <Badge>Developer</Badge>
                    </p>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-sm-6"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h5>Experience</h5>
                    <Progress
                      className="borderradi"
                      color="success borderradi"
                      value={86}
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
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <h5>Recommendation Letter</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div class="dlab-box m-b30 dlab-team3">
                          <div class="dlab-media text-center">
                            <Avatar
                              src="/images/our-team/team-bx/pic1.jpg"
                              round="50px"
                              size={75}
                            />
                            <h5 class="dlab-title">Nashid Martines</h5>
                            <p>M.Ti</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div class="dlab-box m-b30 dlab-team3">
                          <div class="dlab-media text-center">
                            <Avatar
                              src="/images/our-team/team-bx/pic1.jpg"
                              round="50px"
                              size={75}
                            />
                            <h5 class="dlab-title">Nashid Martines</h5>
                            <p>M.Ti</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-full bg-gray m-b30">
            <div class="container">
              <div className="container bayangan halamanmargin">
                <div class="icon-bx-wraper">
                  <div className="icon-content">
                    <div className="row m-b30">
                      <div className="col-lg-2">
                        <h4 className="dlab-tilte">Status</h4>
                      </div>
                      <div className="col-lg-10">
                        <p className="putihtextcolor">
                          <Badge>Available</Badge>
                        </p>
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
          </div>

          <div class="section-full bg-gray m-b30">
            <div class="container">
              <div className="container bayangan halamanmargin">
                <div class="icon-bx-wraper">
                  <div className="icon-content">
                    <div className="row m-b30">
                      <div className="col">
                        <h4 className="dlab-tilte">Experience</h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-2">
                        <li>2020</li>
                        <div class="garisvl"></div>
                        <li>Present</li>
                      </div>
                      <div className="col-lg-10">
                        <h5 className="dlab-tilte">Developer</h5>
                        <p>
                          Mendevelop website yang dibutuhkan sesuai kebutuhan
                          para user Mendevelop website yang dibutuhkan sesuai
                          kebutuhan para user Mendevelop website yang dibutuhkan
                          sesuai kebutuhan para user Mendevelop website yang
                          dibutuhkan sesuai kebutuhan para user Mendevelop
                          website yang dibutuhkan sesuai kebutuhan para user
                          Mendevelop website yang dibutuhkan sesuai kebutuhan
                          para user
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-full bg-gray m-b30">
            <div class="container">
              <div className="row">
                <div className="col">
                  <div className="container bayangan halamanmargin">
                    <div class="icon-bx-wraper">
                      <div className="icon-content">
                        <div className="row ">
                          <div className="col ">
                            <h4 className="dlab-tilte ">Skills</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div class="text-center">
                              <div class="icon-bx-sm radius bg-primary m-b20">
                                <a href="/" class="icon-cell">
                                  <i class="ti-ruler-pencil"></i>
                                </a>
                              </div>
                              <div class="icon-content">
                                <p>Lorem ipsum dolor</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div class="text-center">
                              <div class="icon-bx-sm radius bg-primary m-b20">
                                <a href="/" class="icon-cell">
                                  <i class="ti-ruler-pencil"></i>
                                </a>
                              </div>
                              <div class="icon-content">
                                <p>Lorem ipsum dolor</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div class="text-center">
                              <div class="icon-bx-sm radius bg-primary m-b20">
                                <a href="/" class="icon-cell">
                                  <i class="ti-ruler-pencil"></i>
                                </a>
                              </div>
                              <div class="icon-content">
                                <p>Lorem ipsum dolor</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="container bayangan halamanmargin">
                    <div class="icon-bx-wraper">
                      <div className="icon-content">
                        <div className="row">
                          <div className="col">
                            <h4 className="dlab-tilte">Tools</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div class="text-center">
                              <div class="icon-bx-sm radius bg-primary m-b20">
                                <a href="/" class="icon-cell">
                                  <i class="ti-ruler-pencil"></i>
                                </a>
                              </div>
                              <div class="icon-content">
                                <p>Lorem ipsum dolor</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div class="text-center">
                              <div class="icon-bx-sm radius bg-primary m-b20">
                                <a href="/" class="icon-cell">
                                  <i class="ti-ruler-pencil"></i>
                                </a>
                              </div>
                              <div class="icon-content">
                                <p>Lorem ipsum dolor</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div class="text-center">
                              <div class="icon-bx-sm radius bg-primary m-b20">
                                <a href="/" class="icon-cell">
                                  <i class="ti-ruler-pencil"></i>
                                </a>
                              </div>
                              <div class="icon-content">
                                <p>Lorem ipsum dolor</p>
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
          </div>

          <div class="section-full bg-gray m-b30">
            <div class="container">
              <div className="container bayangan halamanmargin">
                <div>
                  <div class="icon-bx-wraper">
                    <div className="icon-content">
                      <div className="row m-b30">
                        <div className="col">
                          <h4 className="dlab-tilte">Projects History</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-11 m-l30">
                          <ul class="list-num-count red list-box">
                            <li>
                              <div className="row">
                                <div className="col-sm-3">
                                  <p>Game Web Design</p>
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-3">
                                  <StarRatings
                                    starDimension="25px"
                                    starSpacing="5px"
                                    rating={3}
                                    starRatedColor="black"
                                    numberOfStars={5}
                                    name="rating"
                                  />
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="row">
                                <div className="col-sm-3">
                                  <p>Game Web Design</p>
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-3">
                                  <StarRatings
                                    starDimension="25px"
                                    starSpacing="5px"
                                    rating={3}
                                    starRatedColor="black"
                                    numberOfStars={5}
                                    name="rating"
                                  />
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="row">
                                <div className="col-sm-3">
                                  <p>Game Web Design</p>
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-3">
                                  <StarRatings
                                    starDimension="25px"
                                    starSpacing="5px"
                                    rating={3}
                                    starRatedColor="black"
                                    numberOfStars={5}
                                    name="rating"
                                  />
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="row">
                                <div className="col-sm-3">
                                  <p>Game Web Design</p>
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-3">
                                  <StarRatings
                                    starDimension="25px"
                                    starSpacing="5px"
                                    rating={3}
                                    starRatedColor="black"
                                    numberOfStars={5}
                                    name="rating"
                                  />
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="row">
                                <div className="col-sm-3">
                                  <p>Game Web Design</p>
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-3">
                                  <StarRatings
                                    starDimension="25px"
                                    starSpacing="5px"
                                    rating={5}
                                    starRatedColor="black"
                                    numberOfStars={5}
                                    name="rating"
                                  />
                                </div>
                                <div className="col-sm-2">
                                  <p className="putihtextcolor">
                                    <Badge>Ciamik</Badge>
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-full bg-gray m-b30">
            <div class="container">
              <div className="container bayangan halamanmargin">
                <div>
                  <div class="icon-bx-wraper">
                    <div className="icon-content">
                      <div className="row m-b30">
                        <div className="col">
                          <h4 className="dlab-tilte">Appreciation</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-11 m-l30">
                          <ul class="list-num-count red list-box">
                            <li>
                              <div className="row">
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-1">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-9">
                                  <p>
                                    suatu hari saya kelarin projek tiba2
                                    ketiduran tetapi di backup oleh ces ku
                                    #bukanmaen
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="row">
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-1">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-9">
                                  <p>
                                    suatu hari saya kelarin projek tiba2
                                    ketiduran tetapi di backup oleh ces ku
                                    #bukanmaen
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="row">
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-1">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-9">
                                  <p>
                                    suatu hari saya kelarin projek tiba2
                                    ketiduran tetapi di backup oleh ces ku
                                    #bukanmaen
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="row">
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-1">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-9">
                                  <p>
                                    suatu hari saya kelarin projek tiba2
                                    ketiduran tetapi di backup oleh ces ku
                                    #bukanmaen
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="row">
                                <div className="col-sm-1">
                                  <Avatar
                                    src="/images/our-team/team-bx/pic1.jpg"
                                    round="50px"
                                    size={35}
                                  />
                                </div>
                                <div className="col-sm-1">
                                  <p>Bell</p>
                                </div>
                                <div className="col-sm-1">
                                  <p className="putihtextcolor">
                                    <Badge>Available</Badge>
                                  </p>
                                </div>
                                <div className="col-sm-9">
                                  <p>
                                    suatu hari saya kelarin projek tiba2
                                    ketiduran tetapi di backup oleh ces ku
                                    #bukanmaen
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-full bg-gray m-b30">
            <div class="container">
              <div className="container bayangan halamanmargin">
                <div class="section-content">
                  <Testmonial10></Testmonial10>
                  <div class="row m-t10 m-l5">
                    <div class="col-lg-12 text-center ">
                      <button
                        class="site-button yellow m-r15 radius-xl box-shadow "
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
          <div className="isimargin"></div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}
export default ProfileDetails2;
