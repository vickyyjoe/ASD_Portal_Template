import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioCard from "../components/element/PortfolioCard";
import Head from "next/head";
import axios from "axios";

const bg = "/images/banner/bnr4.jpg";

function Portofolio({ portofolio }) {
  return (
    <>
      <Head>
        <title>Portofolio</title>
        <link rel="shortcut icon" href="kalbe.ico" />
      </Head>
      <Header />
      <div class="page-content bg-white">
        <div
          class="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(" + bg + ")" }}
        >
          <div class="container">
            <div class="dlab-bnr-inr-entry">
              <h1 class="text-white">Portfolio</h1>
              <div class="breadcrumb-row">
                <ul class="list-inline">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <PortfolioCard portofolio={portofolio} col="col-md-4" />
      </div>
      <Footer />
    </>
  );
}

export default Portofolio;

export async function getServerSideProps() {
  const portofolioRes = await axios(
    "https://asd-portal-be.herokuapp.com/our-services?_sort=serviceId"
  );
  const portofolio = portofolioRes.data;

  return { props: { portofolio } };
}
