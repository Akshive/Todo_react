import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [],
    g_id: 1,
  };
  deleteTodo = (id) => {
    const updated_todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: updated_todos,
    });
  };
  addTodo = (todo) => {
    todo.id = this.state.g_id++;
    console.log(todo.id);
    const updated_todos = [...this.state.todos, todo];
    this.setState({
      todos: updated_todos,
    });
  };
  render() {
    return (
      <div className="to-do container">
        <h1 className="center blue-text">Todo's</h1>
        <h5 className="center blue-text">Add Todos</h5>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
