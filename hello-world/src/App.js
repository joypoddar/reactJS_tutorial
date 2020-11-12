import React, { Component } from "react";
import "./App.css";
// import PureComp from './component/PureComp'
import PureParentComp from "./component/PureParentComp";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FragmentDemo/> */}
        {/* <Table /> */}
        {/* <PureComp/> */}
        <PureParentComp/>
      </div>
    );
  }
}
export default App;
