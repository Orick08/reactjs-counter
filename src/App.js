import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import reactDom from "react-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
