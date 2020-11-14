import React, { Component } from "react";
import "./App.css";
import CounterProp from "./component/CounterProp";
import HoverCounterTwo from "./component/HoverCounterTwo";
import ClickCounter2 from "./component/ClickCounter2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterProp>
          {(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        </CounterProp>

        <CounterProp>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterProp>
      </div>
    );
  }
}
export default App;
