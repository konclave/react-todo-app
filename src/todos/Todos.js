import React from 'react';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
import './Todos.css';

export function Todos({ todos, completed, onChange }) {
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

  function renderTitle() {
    if (todos.length === 0) {
      return 'Nothing to do.';
    }
    if (todos.length === completed) {
      return 'Everything is done!';
    }
    return 'What to do next';
  }

  return (
    <div className="todos">
      <h2 className="todos__title">{renderTitle()}</h2>
      <ul className="todos__items todos-list">
        {todos.map((todo, index) => (
          <li className="todos-list__item" key={todo.id}>
            <Todo index={index + 1} todo={todo} onRemove={remove} onComplete={complete} />
          </li>
        ))}
      </ul>
      <AddTodo onAdd={add} />
    </div>
  );
}