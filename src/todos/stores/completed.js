import { createDerived } from 'nanostores';
import { todos } from './todos';

export const completed = createDerived(
  todos,
  (entries) => entries.reduce((acc, todo) => acc += Number(todo.completed), 0)
);