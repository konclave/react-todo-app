import React from 'react';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';

export function Todos({ todos, onChange }) {
  function remove(removedId) {
    const updated = todos.filter((todo) => todo.id !== removedId);
    onChange(updated);
  }

  function complete(completedId) {
    const updated = todos.map(
      (todo) => {
        if (todo.id === completedId) {
          todo.completed = !todo.completed;
        }
        return todo;
      }
    );
    onChange(updated);
  }

  function add(description) {
    const id = todos.reduce((acc, todo) => Math.max(todo.id, acc), 0) + 1;
    onChange([...todos, { id, description, completed: false } ]);
  }

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
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <Todo index={index + 1} todo={todo} onRemove={remove} onComplete={complete} />
            </tr>
          ))}
          <tr>
            <td colSpan="3">
              <AddTodo onAdd={add} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}