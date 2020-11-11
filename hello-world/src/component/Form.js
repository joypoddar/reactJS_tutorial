import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUsenameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault()
  };

  render() {
      const {username, comments, topic} = this.state
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsenameChange}
          />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            onChange={this.handleCommentsChange}
            value={comments}
            name=""
            id=""
          />
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select
            value={topic}
            onChange={this.handleTopicChange}
            name=""
            id=""
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type ="submit">Submit</button>
      </form>
    );
  }
}

export default Form;