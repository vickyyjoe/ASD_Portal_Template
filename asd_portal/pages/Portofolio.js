import { Component } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioCard from "./components/element/PortfolioCard";
import Head from "next/head";

const bg = "/images/banner/bnr4.jpg";

export class Portofolio extends Component {
  render() {
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

          <PortfolioCard col="col-md-4" />
        </div>
        <Footer />
      </>
    );
  }
}
export default Portofolio;
