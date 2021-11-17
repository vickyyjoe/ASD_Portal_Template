import Index from "./components/index.js";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Index></Index>
      </div>
    );
  }
}

export default App;
