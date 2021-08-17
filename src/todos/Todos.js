import React, { Component } from 'react';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';

export class Todos extends Component {

  //Component state with default values
  state = {
    addTodoDescription: "",
    todos: [
      {
        id: 1,
        description: "Lorem ipsum dolor sit amet",
        completed: false
      },
      {
        id: 2,
        description: "consectetur adipiscing elit",
        completed: true
      },
      {
        id: 3,
        description: "tsed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="child">
        <table className="table">
          <thead>
            <tr>
              <td></td>
              <td>What to do next</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo, index) => (
              <tr key={todo.id}>
                <Todo index={index + 1} todo={todo} />
              </tr>
            ))}
            <tr>
              <td colSpan="3">
                <AddTodo addTodoDescription={this.state.addTodoDescription} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}