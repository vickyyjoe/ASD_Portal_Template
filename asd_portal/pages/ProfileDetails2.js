import Footer from "./components/Footer";
import Header from "./components/Header";
import { Component } from "react";

export class ProfileDetails2 extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div class="page-content bg-white">
          <div className="container tinggi borderer paddingnull">
            <div className="bg-image overlay-primary-dark">
              <div className="container">
                <div className="row">
                  <div class="col-lg-3 positioned">
                    <div class="dlab-box m-b30 dlab-team4">
                      <div class="dlab-media">
                        <a href="/">
                          <img
                            alt=""
                            src={"/images/our-team/team-bx/pic1.jpg"}
                          />
                        </a>
                      </div>
                      <div class="dlab-info">
                        <h4 class="dlab-title">
                          <a href="/">Nashid Martines</a>
                        </h4>
                        <span class="dlab-position">Director</span>
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
export default ProfileDetails2;
