import React, { Component } from "react";
import Counter from "./Counter";
import ModalVideo from "react-modal-video";

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { backgroundImage } = this.props;
    return (
      <div
        class="section-full text-white bg-img-fix content-inner overlay-black-dark counter-staus-box"
        style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      >
        <div class="container">
          <div class="row ">
            <div class="col-lg-8 col-md-12 col-sm-12">
              <div class="row sp20 center">
                <div
                  class="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div class="icon-bx-wraper center counter-style-5">
                    <div class="icon-xl m-b20">
                      <span class="icon-cell">
                        <i class="flaticon-worker"></i>
                      </span>
                    </div>
                    <div class="icon-content">
                      <div class="dlab-separator bg-primary"></div>
                      <Counter count={1226} />
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div class="icon-bx-wraper center counter-style-5">
                    <div class="icon-xl m-b20">
                      <span class="icon-cell">
                        <i class="flaticon-settings"></i>
                      </span>
                    </div>
                    <div class="icon-content">
                      <div class="dlab-separator bg-primary"></div>
                      <Counter count={1552} />
                      <p>Workers Hand</p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  <div class="icon-bx-wraper center counter-style-5">
                    <div class="icon-xl m-b20">
                      <span class="icon-cell">
                        <i class="flaticon-conveyor-1"></i>
                      </span>
                    </div>
                    <div class="icon-content">
                      <div class="dlab-separator bg-primary"></div>
                      <Counter count={1156} />
                      <p>Active Experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterSection;
