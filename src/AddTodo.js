import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.props.addTodo(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input
            type="text"
            placeholder="Add to do here"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
