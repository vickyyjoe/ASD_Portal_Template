import Footer from "../components/Footer";
import Header from "../components/Header";
import { Component } from "react";
import { Progress } from "reactstrap";
import Testmonial10 from "../components/element/Testimonial";
import { Badge } from "reactstrap";
import Avatar from "react-avatar";
import StarRatings from "react-star-ratings";
import axios from "axios";

const bg1 = "/images/background/bg1.jpg";

const work1 = "/images/our-work/pic1.jpg";
function ProfileDetails2({
  TestimonialDatas,
  profileDatas,
  projectCounts,
  appreCounts,
  testiCounts,
}) {
  // console.log(profileDatas);

  return (
    <>
      <Header></Header>
      {profileDatas &&
        profileDatas.map((profileData) => (
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
                              src={profileData.userImage.formats.small.url}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <h4 className="dlab-tilte">{profileData.userName}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="putihtextcolor">
                        <Badge>{profileData.userPosition}</Badge>
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
                          <h5 class="number-stat">{projectCounts}</h5>
                        </div>
                        <div class="col-sm-4">
                          <p class="desc-stat">Appreciation</p>
                          <h5 class="number-stat">{appreCounts}</h5>
                        </div>
                        <div class="col-sm-4">
                          <p class="desc-stat">Testimonials</p>
                          <h5 class="number-stat">{testiCounts}</h5>
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
                                src={
                                  profileData.appreId[0].appreImage.formats
                                    .small.url
                                }
                                round="50px"
                                size={75}
                              />
                              <h5 class="dlab-title">
                                {profileData.appreId[0].appreUser}
                              </h5>
                              <p>{profileData.appreId[0].appreRole}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div class="dlab-box m-b30 dlab-team3">
                            <div class="dlab-media text-center">
                              <Avatar
                                src={
                                  profileData.appreId[2].appreImage.formats
                                    .small.url
                                }
                                round="50px"
                                size={75}
                              />
                              <h5 class="dlab-title">
                                {profileData.appreId[2].appreUser}
                              </h5>
                              <p>{profileData.appreId[2].appreRole}</p>
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
                            <Badge>{profileData.statusId.status}</Badge>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3">
                          <h5 className="dlab-tilte">
                            {profileData.statusId.statusJob}
                          </h5>
                        </div>
                        <div className="col-lg-3">
                          <p>{profileData.statusId.statusPosition}</p>
                        </div>
                        <div className="col-lg-6">
                          <h5 className="dlab-tilte">
                            {profileData.statusId.statusStart} -{" "}
                            {profileData.statusId.statusEnd}
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
                          <li>{profileData.expId[0].expStart}</li>
                          <div class="garisvl"></div>
                          <li>{profileData.expId[0].expEnd}</li>
                        </div>
                        <div className="col-lg-10">
                          <h5 className="dlab-tilte">
                            {profileData.expId[0].expRole}
                          </h5>
                          <p>{profileData.expId[0].expDesc}</p>
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
                                <div class="icon-bx-sm radius m-b20">
                                  <a href="/" class="icon-cell">
                                    <Avatar
                                      src={
                                        profileData.skillId[3].skillImage.url
                                      }
                                      round="50px"
                                      size={75}
                                    />
                                  </a>
                                </div>
                                <div class="icon-content">
                                  <p>{profileData.skillId[3].skillName}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div class="text-center">
                                <div class="icon-bx-sm radius m-b20">
                                  <a href="/" class="icon-cell">
                                    <Avatar
                                      src={
                                        profileData.skillId[1].skillImage.url
                                      }
                                      round="50px"
                                      size={75}
                                    />
                                  </a>
                                </div>
                                <div class="icon-content">
                                  <p>{profileData.skillId[1].skillName}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div class="text-center">
                                <div class="icon-bx-sm radius m-b20">
                                  <a href="/" class="icon-cell">
                                    <Avatar
                                      src={
                                        profileData.skillId[2].skillImage.url
                                      }
                                      round="50px"
                                      size={75}
                                    />
                                  </a>
                                </div>
                                <div class="icon-content">
                                  <p>{profileData.skillId[2].skillName}</p>
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
                                <div class="icon-bx-sm radius m-b20">
                                  <a href="/" class="icon-cell">
                                    <Avatar
                                      src={profileData.toolId[0].toolImage.url}
                                      round="50px"
                                      size={75}
                                    />
                                  </a>
                                </div>
                                <div class="icon-content">
                                  <p>{profileData.toolId[0].toolName}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div class="text-center">
                                <div class="icon-bx-sm radius m-b20">
                                  <a href="/" class="icon-cell">
                                    <Avatar
                                      src={profileData.toolId[1].toolImage.url}
                                      round="50px"
                                      size={75}
                                    />
                                  </a>
                                </div>
                                <div class="icon-content">
                                  <p>{profileData.toolId[1].toolName}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div class="text-center">
                                <div class="icon-bx-sm radius m-b20">
                                  <a href="/" class="icon-cell">
                                    <Avatar
                                      src={profileData.toolId[2].toolImage.url}
                                      round="50px"
                                      size={75}
                                    />
                                  </a>
                                </div>
                                <div class="icon-content">
                                  <p>{profileData.toolId[2].toolName}</p>
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
                    <Testmonial10
                      testimonialData={TestimonialDatas}
                    ></Testmonial10>
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
        ))}

      <Footer></Footer>
    </>
  );
}

export default ProfileDetails2;

export async function getServerSideProps() {
  const TestimonialData = await axios(
    "https://asd-portal-be.herokuapp.com/Testimonials"
  );
  const TestimonialDatas = TestimonialData.data;

  const profileData = await axios(
    "https://asd-portal-be.herokuapp.com/user-profiles?id=1"
  );
  const profileDatas = profileData.data;

  const projectCount = await axios(
    "https://asd-portal-be.herokuapp.com/projects/count"
  );
  const projectCounts = projectCount.data;

  const appreCount = await axios(
    "https://asd-portal-be.herokuapp.com/appreciations/count"
  );
  const appreCounts = appreCount.data;

  const testiCount = await axios(
    "https://asd-portal-be.herokuapp.com/testimonials/count"
  );
  const testiCounts = testiCount.data;
  return {
    props: {
      TestimonialDatas,
      profileDatas,
      projectCounts,
      appreCounts,
      testiCounts,
    },
  };
}
