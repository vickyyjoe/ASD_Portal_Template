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
                          Demo address #8901 Marmora Road Chi Minh City, Vietnam
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
                        <p class="m-b0 op7">info@example.com</p>
                        <p class="op7">company@example.com</p>
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
                        <p class="m-b0 op7">Mobile : +00 234 678 9012</p>
                        <p class="op7">Phone : +00 1234 5678 90</p>
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
                        <p class="m-b0 op7">Mon To Sat - 08.00-18.00</p>
                        <p class="op7">Sunday - Close</p>
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
                    <h4 class="footer-title">About Industry</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard.
                    </p>
                    Read More
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="widget">
                    <h4 class="footer-title">Usefull div</h4>
                    <ul class="list-2">
                      <li>About Us</li>
                      <li>Blog</li>
                      <li>Services</li>
                      <li>Privacy Policy</li>
                      <li>Projects</li>
                      <li>Help Desk</li>
                      <li>Shop</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="widget widget_subscribe">
                    <h4 class="footer-title">Usefull div</h4>
                    <p>
                      If you have any questions. Subscribe to our newsletter to
                      get our latest products.
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
                    <img src={"kalbe.jpg"} alt="" width={150} height={100}/>
                  </Link>
                </div>
                <div class="footer-bottom-social">
                  <ul class="dlab-social-icon dez-border">
                    <li>
                      <Link href={"/#"}>
                        <a>
                          <div className="fa fa-linkedin"></div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a>
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
