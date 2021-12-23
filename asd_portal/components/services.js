import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import ServicesSlider3 from "./element/servicesSlider3";


const bg = "/images/banner/bnr2.jpg";
const bg2 = "/images/background/bg4.jpg";
const bg3 = "/images/background/map-bg.png";
const bg4 = "/1.jpg";
var bg1 = "/images/background/bg1.jpg";

function services({ ourServices, toolDatas }) {
  console.log(toolDatas);
  return (
    <div className="skin-1">
      <Header></Header>
      <div
        class="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <div class="container">
          <div class="dlab-bnr-inr-entry">
            <h1 class="text-white">Services</h1>
            <div class="breadcrumb-row">
              <ul class="list-inline">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="section-full content-inner bg-gray">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-12">
                <div class="section-head text-black">
                  <h2 class="title">Our Services</h2>
                  <p>
                    There are many variations of services that could help you
                    choose what kind of service that you might need.
                  </p>
                </div>
                <div class="section-content row">
                  {ourServices &&
                    ourServices.slice(0, 6).map((ourservice, ourservicekey) => (
                      <div class="col-lg-6 col-md-6 service-box style3">
                        <div class="icon-bx-wraper" data-name={ourservice.id}>
                          <div class="icon-lg">
                            <img
                              src={ourservice.serviceImage.formats.small.url}
                            />
                          </div>
                          <div class="icon-content">
                            <h2 class="dlab-tilte">{ourservice.serviceName}</h2>
                            <p>{ourservice.serviceDesc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="sticky-top m-b30">
                  <form class="inquiry-form inner">
                    <h3 class="title m-t0 m-b10">
                      Let's Convert Your Idea into Reality
                    </h3>
                    <p>
                      Let's Convert Your Idea into Reality by clicking this
                      button down below!!!
                    </p>
                    <button name="submit" class="site-button button-lg">
                      {" "}
                      Go to franchise{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="section-full content-inner bg-gray wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.6s"
      >
        <div class="container">
          <div class="section-head text-black text-center">
            <h2 class="title">Tools</h2>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ServicesSlider3
                toolDatas={toolDatas}
                iconWrapperCls="icon-xl m-b10 text-primary radius"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default services;
