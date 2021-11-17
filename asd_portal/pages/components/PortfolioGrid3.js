import { Component } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Portfolio from "./element/portfolio";

const bg = "/images/banner/bnr4.jpg";

export class PortfolioGrid3 extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="page-content bg-white">
          <div
            class="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(" + bg + ")" }}
          >
            <div class="container">
              <div class="dlab-bnr-inr-entry">
                <h1 class="text-white">Portfolio Grid 3 Icon</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Portfolio Grid 3 Icon</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Portfolio col="col-md-4" />
        </div>
        <Footer />
      </>
    );
  }
}
export default PortfolioGrid3;
