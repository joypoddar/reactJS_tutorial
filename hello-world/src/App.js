import React, { Component } from 'react';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Greet name="Bruce" heroname="Batman">
            <p>This is children props</p>
          </Greet>
          <Greet name="Clark" heroname="Superman">
            <button>Action</button>
          </Greet>
          <Greet name="Diana" heroname="Wonder Woman"/> 
          <hr/>
          <Welcome name="Bruce" heroname="Batman" />
          <Welcome name="Clark" heroname="Superman"/>
          <Welcome name="Diana" heroname="Wonder Woman"/> 
          {/* <Hello/> */}
      </div>
    );
  }
}
// since there is no content inside <Greet></Greet> we make it self closing <Greet/> 
export default App;
