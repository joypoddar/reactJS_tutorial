import React, { Component } from "react";
import "./App.css";
import ComponentC from "./component/ComponentC";
import { UserProvider } from "./component/userContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="John">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}
export default App;
