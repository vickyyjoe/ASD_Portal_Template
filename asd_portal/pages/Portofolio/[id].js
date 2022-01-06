import { Component } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useParams } from "react-router-dom";
import axios from "axios";

const bg = "/images/banner/bnr4.jpg";
function ProjectDetails({ projects }) {
  console.log(projects);
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
                    {projects.projectTitle}
                  </h2>
                  <p>{projects.projectDesc}</p>
                  <div class="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                      <div class="pro-details">
                        <i class="ti ti-user"></i>
                        <strong>
                          {" "}
                          {projects.projectdetailId.projectRole}
                        </strong>{" "}
                        {projects.projectdetailId.projectMember}
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                      <div class="pro-details">
                        <i class="ti ti-location-pin"></i>
                        <strong>
                          {" "}
                          {projects.projectdetailId.projectRole}
                        </strong>{" "}
                        {projects.projectdetailId.projectMember}
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                      <div class="pro-details">
                        <i class="ti ti-ruler-alt-2"></i>
                        <strong>
                          {" "}
                          {projects.projectdetailId.projectRole}
                        </strong>{" "}
                        {projects.projectdetailId.projectMember}
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                      <div class="pro-details">
                        <i class="ti ti-home"></i>
                        <strong>
                          {" "}
                          {projects.projectdetailId.projectRole}
                        </strong>{" "}
                        {projects.projectdetailId.projectMember}
                      </div>
                    </div>
                  </div>
                  <h2 class="text-black font-weight-600 m-b15">Project Team</h2>
                  <p>{projects.projectteamDesc}</p>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-lg-12 m-b30">
                      <img alt="" src={""} />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                      <img alt="" src={"/images/our-services/pic2.jpg"} />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                      <img alt="" src={"/images/our-services/pic3.jpg"} />
                    </div>
                    <div class="col-lg-12 m-b30">
                      <img alt="" src={"/images/about/about2.jpg"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer hideContactInfo displayNewsLetter></Footer>
    </>
  );
}

export default ProjectDetails;

export async function getStaticPaths() {
  const portofolioRes = await axios(
    "https://asd-portal-be.herokuapp.com/portfolios"
  );
  const portofolios = portofolioRes.data;

  const paths = portofolios.map((portofolios) => {
    return {
      params: { id: portofolios.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await axios("https://asd-portal-be.herokuapp.com/projects/" + id);
  const projects = res.data;

  return { props: { projects } };
}
