import React from 'react';
import { useStore } from 'nanostores/react';
import { todos as todosStore } from '../../stores/todos';
import { completed as completedStore } from '../../stores/completed';
import { AddTodo } from '../AddTodo/AddTodo';
import { Todo } from '../Todo/Todo';
import './Todos.css';

export function Todos() {
  const todos = useStore(todosStore);
  const completed = useStore(completedStore);

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
            <Todo index={index + 1} todo={todo} />
          </li>
        ))}
      </ul>
      <AddTodo />
    </div>
  );
}