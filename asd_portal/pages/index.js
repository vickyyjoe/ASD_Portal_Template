import Index from "./components/index.js";
import Portfolio from "./components/PortfolioGrid3.js";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Index></Index> */}
        <Portfolio></Portfolio>
      </div>
    );
  }
}

export default App;
