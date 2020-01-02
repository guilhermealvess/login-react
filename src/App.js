import React, { Component } from "react";

import "./App.css";
//import Header from "./components/Header";
//import Footer from "./components/Footer";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App text-center font-weight-bold">
        {/*         <Routes /> */}
        {/* <Header title="Hello World!"></Header> */}
        <Routes />
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;
