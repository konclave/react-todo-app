import React, { Component } from 'react';
import './Todo.css';

export class Todo extends Component {

  render() {
    return (
      <React.Fragment >
        <td style={{ width: 15 }}>
          <input type="checkbox" />
        </td>
        <td>
          {
            this.renderTodo()
          }
        </td>
        <td style={{ width: 100 }}>
          <button>Delete</button>
        </td>
      </React.Fragment>
    );
  }

  renderTodo() {
    if (this.props.todo.completed)
      return <s>{this.props.todo.description}</s>;
    else
      return this.props.todo.description;
  }
}