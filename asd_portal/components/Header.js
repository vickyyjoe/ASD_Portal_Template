import React, { Component } from "react";
import Link from "next/link";
import Sticky from "react-stickynode";

class Header extends Component {
  // componentDidMount() {
  //   var searchBtn = document.getElementById("quik-search-btn");
  //   var searchPopup = document.querySelector(".dlab-quik-search");
  //   var closeBtn = document.getElementById("quik-search-remove");

  //   searchBtn.addEventListener("click", function () {
  //     searchPopup.style.display = "block";
  //     searchPopup.classList.add("On");
  //   });

  //   closeBtn.addEventListener("click", function () {
  //     searchPopup.style.display = "none";
  //     searchPopup.classList.remove("On");
  //   });

  //   // sidebar open/close

  //   var btn = document.querySelector(".navicon");
  //   var nav = document.querySelector(".header-nav");

  //   function toggleFunc() {
  //     btn.classList.toggle("open");
  //     nav.classList.toggle("show");
  //   }

  //   btn.addEventListener("click", toggleFunc);

  //   // Sidenav li open close
  //   var navUl = [].slice.call(
  //     document.querySelectorAll(".header-nav > ul > li")
  //   );
  //   for (var y = 0; y < navUl.length; y++) {
  //     navUl[y].addEventListener("click", function () {
  //       checkLi(this);
  //     });
  //   }

  //   function checkLi(current) {
  //     const active = current.classList.contains("open");
  //     navUl.forEach((el) => el.classList.remove("open"));
  //     //current.classList.add('open');

  //     if (active) {
  //       current.classList.remove("open");
  //       console.log("active");
  //     } else {
  //       current.classList.add("open");
  //       console.log("close");
  //     }
  //   }
  // }
  componentDidMount() {
    var btn = document.querySelector(".navicon");
    var nav = document.querySelector(".header-nav");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Sidenav li open close
    var navUl = [].slice.call(
      document.querySelectorAll(".header-nav > ul > li")
    );
    for (var y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      const active = current.classList.contains("open");
      navUl.forEach((el) => el.classList.remove("open"));
      //current.classList.add('open');

      if (active) {
        current.classList.remove("open");
        console.log("active");
      } else {
        current.classList.add("open");
        console.log("close");
      }
    }
  }
  render() {
    return (
      <>
        <header class="site-header mo-left header">
          <Sticky innerZ={999} enabled={true}>
            <div class="sticky-header main-bar-wraper navbar-expand-lg">
              <div class="main-bar clearfix ">
                <div class="container clearfix">
                  <div class="logo-header mostion">
                    <Link href={"/"}>
                      <img src={"/kalbe.jpg"} alt="" height={30}/>
                    </Link>
                  </div>

                  <button
                    class="navbar-toggler navicon justify-content-end"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>

                  <div
                    class={`header-nav navbar-collapse collapse justify-content-end`}
                    id="navbarNavDropdown"
                  >
                    <div class="logo-header d-md-block d-lg-none">
                      <Link href={"/"}>
                        <img src={"kalbe.jpg"} alt="" height={50}/>
                      </Link>
                    </div>

                    <ul class="nav navbar-nav">
                      <li
                        class={
                          this.props.contactUsPage
                            ? "active has-mega-menu"
                            : "has-mega-menu"
                        }
                      >
                        <Link href={"/"}>Home</Link>
                      </li>

                      <li
                        class={
                          this.props.contactUsPage
                            ? "active has-mega-menu"
                            : "has-mega-menu"
                        }
                      >
                        <Link href={"/services"}>Service</Link>
                      </li>
                      <li
                        class={
                          this.props.contactUsPage
                            ? "active has-mega-menu"
                            : "has-mega-menu"
                        }
                      >
                        <Link href={"/Portofolio/Portofolio"}>Portofolio</Link>
                      </li>

                      <li
                        class={
                          this.props.contactUsPage
                            ? "active has-mega-menu"
                            : "has-mega-menu"
                        }
                      >
                        <Link href={"/franchise"}>Franchise</Link>
                      </li>
                      <li
                        class={
                          this.props.contactUsPage
                            ? "active has-mega-menu"
                            : "has-mega-menu"
                        }
                      >
                        <Link href={"/AboutUs"}>About Us</Link>
                      </li>

                      <li
                        class={
                          this.props.contactUsPage
                            ? "active has-mega-menu"
                            : "has-mega-menu"
                        }
                      >
                        <Link href={"/ProfileDetails2"}>Profile</Link>
                      </li>
                      <li
                        class={
                          this.props.contactUsPage
                            ? "active has-mega-menu"
                            : "has-mega-menu"
                        }
                      >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
        </header>
      </>
    );
  }
}
export default Header;
