import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="site-footer style1">
          {this.props.displayNewsLetter && (
            <div className="dlab-newsletter">
              <div className="container">
                <div
                  className="ft-contact wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  <div className="ft-contact-bx">
                    <img src={"/images/icon/icon1.png"} alt="" />
                    <h4 className="title">Address</h4>
                    <p className="op7">
                      Jl. Let. Jend Suprapto Kav 4 Jakarta 10510 - Indonesia
                    </p>
                  </div>
                  <div className="ft-contact-bx">
                    <img src={"/images/icon/icon2.png"} alt="" />
                    <h4 className="title">Phone</h4>
                    <p className="m-b0 op7">Mobile : 6221-42873888-89</p>
                    <p className="op7">Phone : 6221-4256326</p>
                  </div>
                  <div className="ft-contact-bx">
                    <img src={"/images/icon/icon3.png"} alt="" />
                    <h4 className="title">Email Contact</h4>
                    <p className="m-b0 op7">Corp.Comm@kalbe.co.id</p>
                    <p className="op7">asd_portal@kalbe.co.id</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!this.props.hideContactInfo && (
            <div className="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm">
                            <i className="ti-location-pin"></i>
                          </span>
                          Company Address
                        </h5>
                        <p className="op7">
                          Jl. Let. Jend Suprapto Kav 4 Jakarta 10510 - Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm">
                            <i className="ti-email"></i>
                          </span>
                          E-mail
                        </h5>
                        <p className="m-b0 op7">Corp.Comm@kalbe.co.id</p>
                        <p className="op7">asd_portal@kalbe.co.id</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm">
                            <i className="ti-mobile"></i>
                          </span>
                          Phone Numbers
                        </h5>
                        <p className="m-b0 op7">Mobile : 6221-42873888-89</p>
                        <p className="op7">Phone : 6221-4256326</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm">
                            <i className="ti-alarm-clock"></i>
                          </span>
                          Office Hours
                        </h5>
                        <p className="m-b0 op7">Mon To Fri - 07.30-16.00</p>
                        <p className="op7">Weekend - Close</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="widget widget_about">
                    <h4 className="footer-title">About Us</h4>
                    <p>
                      A helping platform to product digitalizing for user who
                      needed some dynamic modern feature on their services.
                    </p>
                    Read More In <Link href={"/AboutUs"}>About Us</Link> Page
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="widget">
                    <h4 className="footer-title">Pages</h4>
                    <ul className="list-2 changeunderline">
                      <li>
                        <a href={"/AboutUs"}>About Us</a>
                      </li>
                      <li>
                        <a href={"/"}>Home</a>
                      </li>
                      <li>
                        <a href={"/Service"}>Service</a>
                      </li>
                      <li>
                        <a href={"/Franchise"}>Franchise</a>
                      </li>
                      <li>
                        <a href={"/Portfolio"}>Portfolio</a>
                      </li>
                      <li>
                        <a href={"/ProfileDetails2"}>Profile</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="widget widget_subscribe">
                    <h4 className="footer-title">NewsLetter</h4>
                    <p>
                      Subscribe to our newsletter to get notifications about our
                      latest products.
                    </p>
                    <form
                      className="dzSubscribe"
                      action="script/mailchamp.php"
                      method="post"
                    >
                      <div className="dzSubscribeMsg"></div>
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            name="dzEmail"
                            d="d"
                            type="email"
                            className="form-control"
                            placeholder="Your Email Address"
                          />
                          <div className="input-group-addon">
                            <button
                              name="submit"
                              value="Submit"
                              type="submit"
                              className="site-button fa fa-paper-plane-o"
                            ></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom footer-line">
            <div className="container">
              <div className="footer-bottom-in">
                <div className="footer-bottom-logo">
                  <Link href={"/"}>
                    <img src={"logo white.png"} alt="" width={75} />
                  </Link>
                </div>
                <div className="footer-bottom-social">
                  <ul className="dlab-social-icon dez-border">
                    <li>
                      <a
                        href={"https://id.linkedin.com/company/pt-kalbe-farma"}
                      >
                        <div className="fa fa-linkedin"></div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCGwTgp5lmU7bdCKEFLxidtA">
                        <div className="fa fa-youtube-play"></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
