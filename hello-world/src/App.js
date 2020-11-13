import React, { Component } from "react";
import "./App.css";
import FRParentInput from "./component/FRParentInput";
// import FocusInput from "./component/FocusInput";
// import RefsDemo from "./component/RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FRParentInput />
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
      </div>
    );
  }
}
export default App;
