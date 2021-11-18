import Services from "./components/services.js";
import Head from "next/head";

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export class service extends Component {
  render() {
    return (
      
      <div className="service">
        <Head>
          <title>Service</title>
          <link rel="shortcut icon" href="kalbe.ico" />
        </Head>
        <Services></Services>
      </div>
    );
  }
}

export default service;
