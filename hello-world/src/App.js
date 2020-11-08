import React, { Component } from 'react';
import './App.css';
import Greet from './component/Greet';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Greet/> 
      </div>
    );
  }
}
// since there is no content inside <Greet></Greet> we make it self closing <Greet/> 
export default App;
