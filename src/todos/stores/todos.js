import { update, createStore, effect } from 'nanostores';
import { nanoid } from 'nanoid';

export const todos = createStore(() => {
  const stored = JSON.parse(localStorage.getItem('todos')) ?? [];
  todos.set(stored);
});

todos.listen((todos) => {
  effect(async () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });
});

export function addTodo(description) {
  const todo = {
    id: nanoid(),
    description,
    completed: false
  }
  update(todos, current => [ ...current, todo]);
}

export function removeTodo(id) {
  update(todos, current => current.filter((todo) => todo.id !== id));
}

export function completeTodo(id) {
  update(todos, current => current.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  }));
}