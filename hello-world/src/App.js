import React, { Component } from "react";
import "./App.css";
import FocusInput from "./component/FocusInput";
// import RefsDemo from "./component/RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <RefsDemo /> */}
        <FocusInput />
      </div>
    );
  }
}
export default App;
