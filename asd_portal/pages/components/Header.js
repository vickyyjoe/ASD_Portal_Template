import React, { Component } from "react";
import Link from "next/link";
import Sticky from "react-stickynode";

class Header extends Component {
  componentDidMount() {
    var searchBtn = document.getElementById("quik-search-btn");
    var searchPopup = document.querySelector(".dlab-quik-search");
    var closeBtn = document.getElementById("quik-search-remove");

    searchBtn.addEventListener("click", function () {
      searchPopup.style.display = "block";
      searchPopup.classList.add("On");
    });

    closeBtn.addEventListener("click", function () {
      searchPopup.style.display = "none";
      searchPopup.classList.remove("On");
    });

    // sidebar open/close

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
                      <img src={"/kalbe.jpg"} alt="" height={100} width={200} />
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

                  <div class="extra-nav">
                    <div class="extra-cell">
                      <button
                        id="quik-search-btn"
                        type="button"
                        class="site-button-link"
                      >
                        <i class="la la-search"></i>
                      </button>
                    </div>
                  </div>

                  <div class="dlab-quik-search ">
                    <form action="#">
                      <input
                        name="search"
                        value=""
                        type="text"
                        class="form-control"
                        placeholder="Type to search"
                      />
                      <span id="quik-search-remove">
                        <i class="ti-close"></i>
                      </span>
                    </form>
                  </div>

                  <div
                    class={`header-nav navbar-collapse collapse justify-content-end`}
                    id="navbarNavDropdown"
                  >
                    <div class="logo-header d-md-block d-lg-none">
                      <Link href={"/"}>
                        <img src={"/images/logo.png"} alt="" />
                      </Link>
                    </div>
                    <ul class="nav navbar-nav">
                      <li class="active has-mega-menu homedemo">
                        {" "}
                        <i class="fa fa-chevron-down">
                          <Link href={"#"} >Home</Link>
                        </i>
                        
                      </li>
                      <li class="has-mega-menu">
                        {" "}
                        <i class="fa fa-chevron-down">Pages</i>
                        <ul class="mega-menu">
                          <li>
                            Pages
                            <ul>
                              <li>About us 1</li>
                              <li>About us 2</li>
                              <li>Services 1</li>
                              <li>Services 2</li>
                              <li>Services Details</li>
                            </ul>
                          </li>
                          <li>
                            Pages
                            <ul>
                              <li>Team 1</li>
                              <li>Team 2</li>
                              <li>Faqs 1</li>
                              <li>Faqs 2</li>
                              <li>portfolio Grid 2</li>
                            </ul>
                          </li>
                          <li>
                            Pages
                            <ul>
                              <li>Portfolio Grid 3</li>
                              <li>Portfolio Grid 4</li>
                              <li>Portfolio Details</li>
                              <li>Error 403</li>
                            </ul>
                          </li>
                          <li>
                            Pages
                            <ul>
                              <li>Error 404</li>
                              <li>Error 405</li>
                              <li>Help Desk</li>
                              <li>Privacy Policy</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Shop<i class="fa fa-chevron-down"></i>
                        <ul class="sub-menu">
                          <li>Shop</li>
                          <li>Shop Sidebar</li>
                          <li>Product Details</li>
                          <li>Cart</li>
                          <li>Wishlist</li>
                          <li>Checkout</li>
                          <li>Login</li>
                          <li>Register</li>
                        </ul>
                      </li>
                      <li class="has-mega-menu">
                        <i class="fa fa-chevron-down">Blog</i>

                        <ul class="mega-menu">
                          <li>
                            {" "}
                            Blog
                            <ul>
                              <li>Half image</li>
                              <li>Half image sidebar</li>
                              <li>Half image sidebar left</li>
                              <li>Large image</li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            Blog
                            <ul>
                              <li>Large image sidebar</li>
                              <li>Large image sidebar left</li>
                              <li>Grid 2</li>
                              <li>Grid 2 sidebar</li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            Blog
                            <ul>
                              <li>Grid 2 sidebar left</li>
                              <li>Grid 3</li>
                              <li>Grid 3 sidebar</li>
                              <li>Grid 3 sidebar left</li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            Blog
                            <ul>
                              <li>Grid 4</li>
                              <li>Single</li>
                              <li>Single sidebar</li>
                              <li>Single sidebar right</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="has-mega-menu">
                        {" "}
                        <i class="fa fa-chevron-down">Element </i>
                        <ul class="mega-menu">
                          <li>
                            Element
                            <ul>
                              <li>
                                {" "}
                                <i class="ti-mouse"> Buttons</i>
                              </li>
                              <li>
                                {" "}
                                <i class="ti-layout-grid2">Icon box styles</i>
                              </li>
                              <li>
                                <i class="ti-layout-grid2-thumb">
                                  {" "}
                                  Pricing table
                                </i>
                              </li>
                              <li>
                                {" "}
                                <i class="ti-user">Team</i>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            Element
                            <ul>
                              <li>
                                {" "}
                                <i class="ti-image">Image box content</i>
                              </li>
                              <li>
                                {" "}
                                <i class="ti-timer">Counters</i>
                              </li>
                              <li>
                                <i class="ti-shopping-cart">Shop Widgets</i>
                              </li>
                              <li>
                                {" "}
                                <i class="ti-layout-list-post">Dividers</i>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            Element
                            <ul>
                              <li>
                                {" "}
                                <i class="ti-layout-media-overlay">
                                  Images effects
                                </i>
                              </li>
                              <li>
                                <i class="ti-comments">Testimonials</i>
                              </li>
                              <li>
                                <i class="ti-more">Pagination</i>
                              </li>
                              <li>
                                {" "}
                                <i class="ti-alert">Alert box</i>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            Element
                            <ul>
                              <li>
                                <i class="ti-layout-media-left-alt">
                                  Icon Box{" "}
                                </i>
                              </li>
                              <li>
                                {" "}
                                <i class="ti-list">List group</i>
                              </li>
                              <li>
                                <i class="ti-layout-line-solid">
                                  Title Separators
                                </i>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <i class="fa fa-chevron-down">Contact us</i>
                        <ul class="sub-menu right">
                          <li>Contact us 1</li>
                          <li>Contact us 2</li>
                          <li>Contact us 3</li>
                          <li>Contact us 4</li>
                        </ul>
                      </li>
                    </ul>

                    <div class="dlab-social-icon">
                      <ul>
                        <li>
                          {" "}
                          <div class="site-button circle fa fa-facebook"></div>
                        </li>
                        <li>
                          {" "}
                          <div class="site-button  circle fa fa-twitter"></div>
                        </li>
                        <li>
                          <div class="site-button circle fa fa-linkedin"></div>
                        </li>
                        <li>
                          {" "}
                          <div class="site-button circle fa fa-instagram"></div>
                        </li>
                      </ul>
                    </div>
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
