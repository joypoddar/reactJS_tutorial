import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./component/ErrorBoundary";
import Hero from "./component/Hero";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName="Batman" />
          <Hero heroName="Superman" />
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
