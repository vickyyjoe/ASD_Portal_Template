import { Component } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "react-avatar";

const bg =
  "https://res.cloudinary.com/asd-portal-media/image/upload/v1638987364/6_retake_355b18a44e.jpg";
function ProjectDetails({ projects, clients, teams, images }) {
  console.log(clients);
  console.log(projects);

  return (
    <>
      <Head>
        <title>Project details</title>
        <link rel="shortcut icon" href="/kalbe.ico" />
      </Head>
      <Header></Header>
      <div className="page-content bg-white">
        <div
          class="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(" + bg + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Project Detail</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
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

        <div className="content-block">
          <div className="section-full content-inner bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-b30">
                  <h2 className="text-black font-weight-600 m-b15">
                    {projects.projectTitle}
                  </h2>
                  <p>{projects.projectDesc}</p>
                  <div className="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
                    {clients &&
                      clients.map((client) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                          <div className="pro-details">
                            <Avatar
                              src={client.projectteamImage.url}
                              round="50px"
                              size={75}
                            />
                            <strong> {client.projectRole}</strong>{" "}
                            {client.projectMember}
                          </div>
                        </div>
                      ))}
                  </div>
                  <h2 className="text-black font-weight-600 m-b15">
                    Project Team
                  </h2>
                  <p>{projects.projectteamDesc}</p>
                  <div className="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
                    {teams &&
                      teams.slice(0, 4).map((team) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                          <div className="pro-details">
                            <Avatar
                              src={team.projectteamImage.url}
                              round="50px"
                              size={75}
                            />
                            <strong> {team.projectRole}</strong>{" "}
                            {team.projectMember}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    {images &&
                      images.slice(0, 1).map((image) => (
                        <div className="col-lg-12 m-b30">
                          <img alt="" src={image.projectImage.url} />
                        </div>
                      ))}
                    {images &&
                      images.slice(1, 2).map((image) => (
                        <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                          <img alt="" src={image.projectImage.url} />
                        </div>
                      ))}
                    {images &&
                      images.slice(2, 3).map((image) => (
                        <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                          <img alt="" src={image.projectImage.url} />
                        </div>
                      ))}
                    {images &&
                      images.slice(3, 4).map((image) => (
                        <div className="col-lg-12 m-b30">
                          <img alt="" src={image.projectImage.url} />
                        </div>
                      ))}
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
    "https://asd-portal-be.herokuapp.com/projects"
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

  const ClientRes = await axios(
    "https://asd-portal-be.herokuapp.com/project-clients"
  );
  const clients = ClientRes.data;

  const teamRes = await axios(
    "https://asd-portal-be.herokuapp.com/project-details"
  );
  const teams = teamRes.data;

  const imageRes = await axios(
    "https://asd-portal-be.herokuapp.com/project-images"
  );
  const images = imageRes.data;

  return { props: { projects, clients, teams, images } };
}
