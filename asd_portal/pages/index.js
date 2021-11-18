import Index from "./components/index.js";
import React, { Component } from "react";
import Head from "next/head";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Head>
          <title>Home</title>
          <link rel="shortcut icon" href="kalbe.ico" />
        </Head>
        <Index></Index>
      </div>
    );
  }
}

export default App;
