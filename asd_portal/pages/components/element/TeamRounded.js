import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

class TeamRounded extends Component {
  render() {
    return (
      <>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
            <div class="rounded-team">
              <div class="round-box bg-primary">
                <div class="team-mamber">
                  <div class="team-mamber">
                    <img
                      alt=""
                      src={("/images/our-team/pic5.jpg")}
                    />
                  </div>
                </div>
              </div>

              <div class="border-1 team-info text-center p-a20 p-t40">
                <h5 class="dlab-title">
                  <a href="javascript:;">Nashid Martines</a>
                </h5>
                <span>Director</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
            <div class="rounded-team">
              <div class="round-box bg-primary">
                <div class="team-mamber">
                  <div class="team-mamber">
                    <img
                      alt=""
                      src={("/images/our-team/pic6.jpg")}
                    />
                  </div>
                </div>
              </div>

              <div class="border-1 team-info text-center p-a20 p-t40">
                <h5 class="dlab-title">
                  <a href="javascript:;">Konne Backfield</a>
                </h5>
                <span>Manager</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
            <div class="rounded-team">
              <div class="round-box bg-primary">
                <div class="team-mamber">
                  <div class="team-mamber">
                    <img
                      alt=""
                      src={("/images/our-team/pic7.jpg")}
                    />
                  </div>
                </div>
              </div>

              <div class="border-1 team-info text-center p-a20 p-t40">
                <h5 class="dlab-title">
                  <a href="javascript:;">Marco Datella</a>
                </h5>
                <span>Developer</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
            <div class="rounded-team">
              <div class="round-box bg-primary">
                <div class="team-mamber">
                  <div class="team-mamber">
                    <img
                      alt=""
                      src={("/images/our-team/pic8.jpg")}
                    />
                  </div>
                </div>
              </div>

              <div class="border-1 team-info text-center p-a20 p-t40">
                <h5 class="dlab-title">
                  <a href="javascript:;">Hackson Willingham</a>
                </h5>
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TeamRounded;
