import Services from "./components/services.js";

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export class service extends Component {
  render() {
    return (
      <div className="service">
        <Services></Services>
      </div>
    );
  }
}

export default service;
