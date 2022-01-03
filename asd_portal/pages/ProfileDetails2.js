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
  return (
    <>
      <Header></Header>
      {profileDatas &&
        profileDatas.map((profileData) => (
          <div className="page-content bg-gray " key={profileData.id}>
            <div className="section-full bg-gray m-b30">
              <div className="container">
                <div className="gambarlatar halamanmargin overlay-black-light bg-img-fix "></div>
                <div className="container bayangan halamanmargin">
                  <div className="row">
                    <div className="col-md-2 photo">
                      <div className="dlab-box m-b30 dlab-team4">
                        <div className="dlab-media">
                          <a href="/">
                            <img
                              alt=""
                              src={profileData.userImage.formats.medium.url}
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
                      <div className="stats row">
                        <div className="col-sm-4">
                          <p className="desc-stat">Projects</p>
                          <h5 className="number-stat">{projectCounts}</h5>
                        </div>
                        <div className="col-sm-4">
                          <p className="desc-stat">Appreciation</p>
                          <h5 className="number-stat">{appreCounts}</h5>
                        </div>
                        <div className="col-sm-4">
                          <p className="desc-stat">Testimonials</p>
                          <h5 className="number-stat">{testiCounts}</h5>
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
                        {profileData.appreId.slice(2, 4).map((appreData) => (
                          <div className="col-sm-4">
                            <div className="dlab-box m-b30 dlab-team3">
                              <div className="dlab-media text-center">
                                <Avatar
                                  src={
                                    appreData.appreImage.formats.thumbnail.url
                                  }
                                  round="50px"
                                  size={75}
                                />
                                <h5 className="dlab-title">
                                  {appreData.appreUser}
                                </h5>
                                <p>{appreData.appreRole}</p>
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

            <div className="section-full bg-gray m-b30">
              <div className="container">
                <div className="container bayangan halamanmargin">
                  <div className="icon-bx-wraper">
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

            <div className="section-full bg-gray m-b30">
              <div className="container">
                <div className="container bayangan halamanmargin">
                  <div className="icon-bx-wraper">
                    <div className="icon-content">
                      <div className="row m-b30">
                        <div className="col">
                          <h4 className="dlab-tilte">Experience</h4>
                        </div>
                      </div>{" "}
                      {profileData.expId.slice(0, 1).map((expData) => (
                        <div className="row m-b10">
                          <div className="col-lg-2">
                            <li>{expData.expStart}</li>
                            <div className="garisvl"></div>
                            <li>{expData.expEnd}</li>
                          </div>
                          <div className="col-lg-10">
                            <h5 className="dlab-tilte">{expData.expRole}</h5>
                            <p>{expData.expDesc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-full bg-gray m-b30">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="container bayangan halamanmargin">
                      <div className="icon-bx-wraper">
                        <div className="icon-content">
                          <div className="row ">
                            <div className="col ">
                              <h4 className="dlab-tilte ">Skills</h4>
                            </div>
                          </div>
                          <div className="row">
                            {profileData.skillId
                              .slice(1, 4)
                              .map((skillData) => (
                                <div className="col-lg-4">
                                  <div className="text-center">
                                    <div className="icon-bx-sm radius m-b20">
                                      <a className="icon-cell">
                                        <Avatar
                                          src={
                                            skillData.skillImage.formats
                                              .thumbnail.url
                                          }
                                          round="50px"
                                          size={75}
                                        />
                                      </a>
                                    </div>
                                    <div className="icon-content">
                                      <p>{skillData.skillName}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="container bayangan halamanmargin">
                      <div className="icon-bx-wraper">
                        <div className="icon-content">
                          <div className="row">
                            <div className="col">
                              <h4 className="dlab-tilte">Tools</h4>
                            </div>
                          </div>
                          <div className="row">
                            {profileData.toolId.slice(0, 3).map((toolData) => (
                              <div className="col-lg-4">
                                <div className="text-center">
                                  <div className="icon-bx-sm radius m-b20">
                                    <a  className="icon-cell">
                                      <Avatar
                                        src={
                                          toolData.toolImage.formats.thumbnail
                                            .url
                                        }
                                        round="50px"
                                        size={75}
                                      />
                                    </a>
                                  </div>
                                  <div className="icon-content">
                                    <p>{toolData.toolName}</p>
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
            </div>

            <div className="section-full bg-gray m-b30">
              <div className="container">
                <div className="container bayangan halamanmargin">
                  <div>
                    <div className="icon-bx-wraper">
                      <div className="icon-content">
                        <div className="row m-b30">
                          <div className="col">
                            <h4 className="dlab-tilte">Projects History</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-11 m-l30">
                            <ul className="list-num-count red list-box">
                              {profileData.projecthistoryId
                                .slice(0, 5)
                                .map((phData) => (
                                  <li>
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <p>{phData.projecthistoryJob}</p>
                                      </div>
                                      <div className="col-sm-2">
                                        <p className="putihtextcolor">
                                          <Badge>
                                            {phData.projecthistoryRole}
                                          </Badge>
                                        </p>
                                      </div>
                                      <div className="col-sm-1">
                                        <Avatar
                                          src={
                                            phData.projecthistoryImage.formats
                                              .thumbnail.url
                                          }
                                          round="50px"
                                          size={35}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        <p>{phData.projecthistoryUser}</p>
                                      </div>
                                      <div className="col-sm-3">
                                        <StarRatings
                                          starDimension="25px"
                                          starSpacing="5px"
                                          rating={phData.projecthistoryRating}
                                          starRatedColor="black"
                                          numberOfStars={5}
                                          name="rating"
                                        />
                                      </div>
                                      <div className="col-sm-2">
                                        <p className="putihtextcolor">
                                          <Badge>
                                            {phData.projecthistoryDesc}
                                          </Badge>
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-full bg-gray m-b30">
              <div className="container">
                <div className="container bayangan halamanmargin">
                  <div>
                    <div className="icon-bx-wraper">
                      <div className="icon-content">
                        <div className="row m-b30">
                          <div className="col">
                            <h4 className="dlab-tilte">Appreciation</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-11 m-l30">
                            <ul className="list-num-count red list-box">
                              {profileData.appreId
                                .slice(0, 5)
                                .map((appreData) => (
                                  <li>
                                    <div className="row">
                                      <div className="col-sm-1">
                                        <Avatar
                                          src={
                                            appreData.appreImage.formats
                                              .thumbnail.url
                                          }
                                          round="50px"
                                          size={35}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        <p>{appreData.appreUser}</p>
                                      </div>
                                      <div className="col-sm-2">
                                        <p className="putihtextcolor">
                                          <Badge>{appreData.appreRole}</Badge>
                                        </p>
                                      </div>
                                      <div className="col-sm-8">
                                        <p>{appreData.appreDesc}</p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-full bg-gray m-b30">
              <div className="container">
                <div className="container bayangan halamanmargin">
                  <div className="section-content">
                    <Testmonial10
                      testimonialData={TestimonialDatas}
                    ></Testmonial10>
                  </div>
                </div>
              </div>
            </div>
            <div className="isimargin"></div>
          </div>
        ))}

      <Footer hideContactInfo displayNewsLetter></Footer>
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
