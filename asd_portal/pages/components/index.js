import { Component } from "react";
import { Parallax } from "react-parallax";
import Link from "next/link";
import Header from "./Header";
import CounterSection from "./element/CounterSection";
import Counter from "./element/Counter";
import Testimonial from "./element/Testimonial";
import Footer from "./Footer";

const bg = "/images/background/bg2.jpg";
const bg2 = "/images/background/bg4.jpg";
const bg3 = "/images/background/map-bg.png";
const bg4 = "/1.jpg";
var bg1 = "/images/background/bg1.jpg";

export class index extends Component {
  render() {
    return (
      <div className="skin-1">
        <Header></Header>
        <Parallax bgImage={bg4} strength={200}>
          <div className="hero-section pt-50 home-bnr1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="hero-content">
                    <h1 className="title">Lorem Ipsum Dolor Sit Amet</h1>
                    <div className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the.
                    </div>
                    <div className="buttons">
                      <a href="">Read More</a>
                      <a href="">About Us</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <img src={"/images/main-slider/slide7.png"} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="section-full bg-gray content-inner">
            <div class="container">
              <div class="section-head text-center">
                <h2 class="title"> Our Services</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  typesetting industry has been the industry's standard dummy
                  text ever since the been when an unknown printer.
                </p>
              </div>
              <div class="section-content row">
                <div
                  class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div class="icon-bx-wraper" data-name="01">
                    <div class="icon-lg">
                      <Link href="#" class="icon-cell">
                        <i class="flaticon-robot-arm"></i>
                      </Link>
                    </div>
                    <div class="icon-content">
                      <h2 class="dlab-tilte">Mechanical Works</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div class="icon-bx-wraper" data-name="02">
                    <div class="icon-lg">
                      <Link href="#" class="icon-cell">
                        <i class="flaticon-factory-1"></i>
                      </Link>
                    </div>
                    <div class="icon-content">
                      <h2 class="dlab-tilte">Power & Energy</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  <div class="icon-bx-wraper" data-name="03">
                    <div class="icon-lg">
                      <Link href="#" class="icon-cell">
                        <i class="flaticon-fuel-station"></i>
                      </Link>
                    </div>
                    <div class="icon-content">
                      <h2 class="dlab-tilte">Petroleum Refinery</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.8s"
                >
                  <div class="icon-bx-wraper" data-name="04">
                    <div class="icon-lg">
                      <Link href="#" class="icon-cell">
                        <i class="flaticon-fuel-truck"></i>
                      </Link>
                    </div>
                    <div class="icon-content">
                      <h2 class="dlab-tilte">Oil & Gas Industry</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div class="icon-bx-wraper" data-name="05">
                    <div class="icon-lg">
                      <Link href="#" class="icon-cell">
                        <i class="flaticon-conveyor-1"></i>
                      </Link>
                    </div>
                    <div class="icon-content">
                      <h2 class="dlab-tilte">Automative Manufacturing</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div class="icon-bx-wraper" data-name="06">
                    <div class="icon-lg">
                      <Link href="#" class="icon-cell">
                        <i class="flaticon-engineer-1"></i>
                      </Link>
                    </div>
                    <div class="icon-content">
                      <h2 class="dlab-tilte">Chemical Research</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <div
          class="section-full overlay-black-dark bg-img-fix text-white content-inner"
          style={{ backgroundImage: "url(" + bg1 + ")" }}
        >
          <div class="container">
            <div class="section-content">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                  <div class="m-b30 dlab-box text-center counter-style-2">
                    <div class="icon-lg ">
                      <i class="flaticon-factory"></i>
                    </div>
                    <div class="text-blue">
                      <Counter count={7652} />
                    </div>
                    <span class="counter-text">Completed Projects</span>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                  <div class="m-b30 dlab-box text-center counter-style-2">
                    <div class="icon-lg ">
                      <i class="flaticon-worker"></i>
                    </div>
                    <div class="text-blue">
                      <Counter count={4562} />
                    </div>
                    <span class="counter-text">Happy Clients</span>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                  <div class="m-b30 dlab-box text-center counter-style-2">
                    <div class="icon-lg ">
                      <i class="flaticon-settings"></i>
                    </div>
                    <div class="text-blue">
                      <Counter count={3569} />
                    </div>
                    <span class="counter-text">Questions Answered</span>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                  <div class="m-b10 dlab-box text-center counter-style-2">
                    <div class="icon-lg ">
                      <i class="flaticon-conveyor"></i>
                    </div>
                    <div class="text-blue">
                      <Counter count={2089} />
                    </div>
                    <span class="counter-text">Ordered Coffee's</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-full bg-gray content-inner">
          <div class="container">
            <div class="section-head text-left">
              <div class="blog-post blog-md clearfix">
                <div class="dlab-post-media dlab-img-effect zoom-slow">
                  <a href="blog-single">
                    <img src={"/images/blog/grid/pic1.jpg"} alt="" />
                  </a>
                </div>
                <div class="dlab-post-info">
                  <div class="dlab-post-title">
                    <h4 class="post-title">
                      <a href="blog-single">Franchise</a>
                    </h4>
                  </div>
                  <div class="dlab-post-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque ultricies, diam sed semper dignissim, ex
                      purus molestie nisl, id rhoncus arcu eros sit amet odio.
                      Praesent arcu lacus, interdum in tellus ut, fringilla
                      volutpat tellus. Curabitur eget ex vel ex egestas volutpat
                      eget eget leo. Praesent non rutrum enim. Donec in leo
                      vitae mi viverra gravida. Integer a egestas dolor, ac
                      volutpat felis. Sed mattis arcu nunc, sed scelerisque
                      sapien gravida vel. Nam at mi massa. Pellentesque dapibus
                      arcu sollicitudin, cursus lorem et, sollicitudin orci.
                      Proin vulputate, sem at viverra consequat, velit nibh
                      condimentum velit, sit amet porttitor lorem diam sed
                      massa. Nunc a varius lectus. Vivamus in metus molestie,
                      viverra leo a, lobortis mi.
                    </p>
                  </div>
                  <div class="dlab-post-readmore">
                    <button
                      class="site-button orange gradient m-r15"
                      type="button"
                    >
                      Go To Franchise
                    </button>
                    <button
                      class="site-button yellow gradient m-r15"
                      type="button"
                    >
                      Porfotoflio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>Diisi scoreboard</div>

        <div class="section-full bg-gray content-inner-2">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="sort-title clearfix text-center">
                  <h2 class="title">Testimonial</h2>
                </div>
              </div>
            </div>
            <div class="section-content">
              <Testimonial />
            </div>
          </div>
        </div>


        <Footer></Footer>
      </div>
    );
  }
}

export default index;
