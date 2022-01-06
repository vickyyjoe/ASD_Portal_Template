import { Component } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioCard from "../../components/element/PortfolioCard";
import Head from "next/head";
import axios from "axios";

const bg = "https://res.cloudinary.com/asd-portal-media/image/upload/v1638987364/6_retake_355b18a44e.jpg";

function Portofolio({ portofolios }) {
  // console.log(portofolios);
  return (
    <>
      <Head>
        <title>Portofolio</title>
        <link rel="shortcut icon" href="kalbe.ico" />
      </Head>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(" + bg + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Portfolio</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <PortfolioCard col="col-md-4" portfolios={portofolios} />
      </div>
      <Footer hideContactInfo displayNewsLetter/>
    </>
  );
}

export default Portofolio;

export async function getServerSideProps() {
  const portofolioRes = await axios(
    "https://asd-portal-be.herokuapp.com/portfolios"
  );
  const portofolios = portofolioRes.data;

  return { props: { portofolios } };
}
