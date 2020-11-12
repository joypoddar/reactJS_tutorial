import React, { Component } from "react";
import "./App.css";
// import FragmentDemo from "./component/FragmentDemo";
import Table from "./component/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FragmentDemo/> */}
        <Table />
      </div>
    );
  }
}
export default App;
