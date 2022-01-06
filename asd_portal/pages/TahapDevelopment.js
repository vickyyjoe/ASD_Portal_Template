import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import axios from "axios";

const bg =
  "https://res.cloudinary.com/asd-portal-media/image/upload/v1638987364/6_retake_355b18a44e.jpg";

function TahapDevelopment() {
  return (
    <>
      <Head>
        <title>!On Construction!</title>
        <link rel="shortcut icon" href="kalbe.ico" />
      </Head>

      <div
        className="dlab-bnr-inr full-height overlay-black-dark"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row max-w700 dlab-bnr-inr-entry dz_error-404-area align-m dz_error-404 text-white m-auto">
            <div className="col-lg-4 col-md-4 m-tb30">
              <div className="bg-primary dz_error">!</div>
            </div>
            <div className="col-lg-8 col-md-8 m-b30 text-left">
              <h2 className="error-head">Under Construction !</h2>
              <p className="font-16">
                We are currently working on this feature and will launch soon!
              </p>
              <p className="font-16">
                You can go back to the Main Page by clicking the button.
              </p>
              <Link href={"/"}>
                <a className="site-button"> Go To Home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TahapDevelopment;
