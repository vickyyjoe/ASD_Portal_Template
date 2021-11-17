import Franchise from "./components/franchise.js";

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export class franchise extends Component {
  render() {
    return (
      <div className="franchise">
        <Franchise></Franchise>
      </div>
    );
  }
}

export default franchise;
