import { Component } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";


const bg = ('/images/banner/bnr4.jpg')
export class ProjectDetails extends Component {
  render() {
    return (
      <>
      <Head>
          <title>Project Detail</title>
          <link rel="shortcut icon" href="kalbe.ico" />
        </Head>
        <Header></Header>
        <div class="page-content bg-white">
          <div
            class="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(" + bg + ")" }}
          >
            <div class="container">
              <div class="dlab-bnr-inr-entry">
                <h1 class="text-white">Project Detail</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Project</li>
                    <li>Project Detail</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 m-b30">
                    <h2 class="text-black font-weight-600 m-b15">
                      Project Information
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the when an printer took a
                      galley of type and scrambled it to make.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the when an printer took a
                      galley of type and scrambled it to make.
                    </p>
                    <div class="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                        <div class="pro-details">
                          <i class="ti ti-user"></i>
                          <strong>CLIENT</strong> Martin Stewart
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                        <div class="pro-details">
                          <i class="ti ti-location-pin"></i>
                          <strong>LOCATION</strong>London, UK
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                        <div class="pro-details">
                          <i class="ti ti-ruler-alt-2"></i>
                          <strong>SIZE</strong>1,200m<sup>2</sup>
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                        <div class="pro-details">
                          <i class="ti ti-home"></i>
                          <strong>TYPE</strong>Residential Project
                        </div>
                      </div>
                    </div>
                    <h2 class="text-black font-weight-600 m-b15">
                      Scoope Of Work
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the when an printer took a
                      galley of type and scrambled it to make.
                    </p>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="icon-bx-wraper m-b30 left">
                          <div class="icon-md">
                            <Link href="#" class="icon-cell text-primary">
                              <i class="flaticon-factory"></i>
                            </Link>
                          </div>
                          <div class="icon-content">
                            <h5 class="dlab-tilte">Material Engineering</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod..
                            </p>
                          </div>
                        </div>
                        <div class="icon-bx-wraper m-b30 left">
                          <div class="icon-md">
                            <Link href="#" class="icon-cell text-primary">
                              <i class="flaticon-settings"></i>
                            </Link>
                          </div>
                          <div class="icon-content">
                            <h5 class="dlab-tilte">Chemical Research</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod..
                            </p>
                          </div>
                        </div>
                        <div class="icon-bx-wraper left">
                          <div class="icon-md">
                            <Link href="#" class="icon-cell text-primary">
                              <i class="flaticon-worker"></i>
                            </Link>
                          </div>
                          <div class="icon-content">
                            <h5 class="dlab-tilte">Petroleum Engineering</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod..
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-lg-12 m-b30">
                        <img
                          alt=""
                          src={("/images/about/pic3.jpg")}
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                        <img
                          alt=""
                          src={("/images/our-services/pic2.jpg")}
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                        <img
                          alt=""
                          src={("/images/our-services/pic3.jpg")}
                        />
                      </div>
                      <div class="col-lg-12 m-b30">
                        <img
                          alt=""
                          src={("/images/about/about2.jpg")}
                        />
                      </div>
                    </div>
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

export default ProjectDetails;
