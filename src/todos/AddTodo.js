import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    defaultValue: "",
    description: this.props.addTodoDescription
  }

  render() {
    return (
      <div className="child">
        <input type="text" id="todoDescription" placeholder="Todo description" />
        <div>
          <button type="button" id="buttonAddTodo">Add Todo</button>
        </div>
      </div>
    );
  }
}
