import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    return (
      <>
        <footer class="site-footer style1">
          {this.props.displayNewsLetter && (
            <div class="dlab-newsletter">
              <div class="container">
                <div
                  class="ft-contact wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  <div class="ft-contact-bx">
                    <img src={"/images/icon/icon1.png"} alt="" />
                    <h4 class="title">Address</h4>
                    <p>8901 Marmora Road Chi Minh City, Vietnam</p>
                  </div>
                  <div class="ft-contact-bx">
                    <img src={"/images/icon/icon2.png"} alt="" />
                    <h4 class="title">Phone</h4>
                    <p>8901 Marmora Road Chi Minh City, Vietnam</p>
                  </div>
                  <div class="ft-contact-bx">
                    <img src={"/images/icon/icon3.png"} alt="" />
                    <h4 class="title">Email Contact</h4>
                    <p>8901 Marmora Road Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!this.props.hideContactInfo && (
            <div class="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                      <div class="icon-content">
                        <h5 class="dlab-tilte">
                          <span class="icon-sm">
                            <i class="ti-location-pin"></i>
                          </span>
                          Company Address
                        </h5>
                        <p class="op7">
                          Jl. Let. Jend Suprapto Kav 4 Jakarta 10510 - Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                      <div class="icon-content">
                        <h5 class="dlab-tilte">
                          <span class="icon-sm">
                            <i class="ti-email"></i>
                          </span>
                          E-mail
                        </h5>
                        <p class="m-b0 op7">Corp.Comm@kalbe.co.id</p>
                        <p class="op7">asd_portal@kalbe.co.id</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                      <div class="icon-content">
                        <h5 class="dlab-tilte">
                          <span class="icon-sm">
                            <i class="ti-mobile"></i>
                          </span>
                          Phone Numbers
                        </h5>
                        <p class="m-b0 op7">Mobile : 6221-42873888-89</p>
                        <p class="op7">Phone : 6221-4256326</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div class="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                      <div class="icon-content">
                        <h5 class="dlab-tilte">
                          <span class="icon-sm">
                            <i class="ti-alarm-clock"></i>
                          </span>
                          Office Hours
                        </h5>
                        <p class="m-b0 op7">Mon To Fri - 07.30-16.00</p>
                        <p class="op7">Weekend - Close</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <div class="widget widget_about">
                    <h4 class="footer-title">About Us</h4>
                    <p>
                      A helping platform to product digitalizing for user who
                      needed some dynamic modern feature on their services.
                    </p>
                    Read More In <Link href={"/AboutUs"}>About Us</Link> Page
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="widget">
                    <h4 class="footer-title">Pages</h4>
                    <ul class="list-2 changeunderline">
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
                <div class="col-md-4 col-sm-12">
                  <div class="widget widget_subscribe">
                    <h4 class="footer-title">NewsLetter</h4>
                    <p>
                      Subscribe to our newsletter to get notifications about our
                      latest products.
                    </p>
                    <form
                      class="dzSubscribe"
                      action="script/mailchamp.php"
                      method="post"
                    >
                      <div class="dzSubscribeMsg"></div>
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            name="dzEmail"
                            d="d"
                            type="email"
                            class="form-control"
                            placeholder="Your Email Address"
                          />
                          <div class="input-group-addon">
                            <button
                              name="submit"
                              value="Submit"
                              type="submit"
                              class="site-button fa fa-paper-plane-o"
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

          <div class="footer-bottom footer-line">
            <div class="container">
              <div class="footer-bottom-in">
                <div class="footer-bottom-logo">
                  <Link href={"/"}>
                    <img src={"logo white.png"} alt="" width={70} />
                  </Link>
                </div>
                <div class="footer-bottom-social">
                  <ul class="dlab-social-icon dez-border">
                    <li>
                      <Link
                        href={"https://id.linkedin.com/company/pt-kalbe-farma"}
                      >
                        <a>
                          <div className="fa fa-linkedin"></div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCGwTgp5lmU7bdCKEFLxidtA">
                        <div class="fa fa-youtube-play" to={"/#"}></div>
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
