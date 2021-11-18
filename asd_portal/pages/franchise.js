import Franchise from "./components/franchise.js";
import Head from "next/head";

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export class franchise extends Component {
  render() {
    return (
      <div className="franchise">
        <Head>
          <title>Franchise</title>
          <link rel="shortcut icon" href="kalbe.ico" />
        </Head>
        <Franchise></Franchise>
      </div>
    );
  }
}

export default franchise;
