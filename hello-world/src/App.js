import React, { Component } from 'react';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import Hello from './component/Hello';
import EventBind from './component/EventBind';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        <EventBind/>
          {/* <Greet name="Bruce" heroname="Batman">
            <p>This is children props</p>
          </Greet>
          <Greet name="Clark" heroname="Superman">
            <button>Action</button>
          </Greet>
          <Greet name="Diana" heroname="Wonder Woman"/> 
          <hr/>
          <Welcome name="Bruce" heroname="Batman" />
          <Welcome name="Clark" heroname="Superman"/>
          <Welcome name="Diana" heroname="Wonder Woman"/> */}
          {/* <Hello/> */}
          {/* <Greet name="Bruce" heroname="Batman" /> */}
          {/* <Welcome name="Clark" heroname="Superman"/> */}
        </div>
    );
  }
}
export default App;
