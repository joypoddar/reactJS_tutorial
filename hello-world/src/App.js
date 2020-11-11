import React, { Component } from 'react';
import './App.css';
// import Greet from './component/Greet';
// import Welcome from './component/Welcome';
// import Message from './component/Message';
// import Counter from './component/Counter';
// import FunctionClick from './component/FunctionClick';
// import ClassClick from './component/ClassClick';
// import Hello from './component/Hello';
// import EventBind from './component/EventBind';
// import ParentComponent from './component/ParentComponent';
// import UserGreeting from './component/UserGreeting';
// import NameList from './component/NameList';
// import Stylesheet from './component/Stylesheet';
// import Inline from './component/Inline';
import Form from './component/Form';
import './component/appStyles.css';
import styles from './component/appStyles.module.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Form/>
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
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
