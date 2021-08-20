import { render, screen } from '@testing-library/react';
import { getValue, cleanStores, keepActive } from 'nanostores';
import { todos as todosStore } from '../../stores/todos';
import { completed as completedStore } from '../../stores/completed';
import { Todos } from './Todos';

const todosMock = [
  {
    id: 1,
    description: 'foo',
    completed: false
  },
  {
    id: 2,
    description: 'bar',
    completed: false
  },
  {
    id: 3,
    description: 'baz',
    completed: true
  }
];

beforeEach(() => {
  keepActive(todosStore);
  keepActive(completedStore);
});

afterEach(() => {
  cleanStores(todosStore, completedStore);
});

test('renders todos', () => {
  todosStore.set(todosMock);
  completedStore.set(1);
  render(<Todos />);
  const todos = screen.getAllByRole('listitem');
  expect(todos.length).toEqual(todosMock.length);
});

test('renders relevant title for todos has incomplete items', () => {
  todosStore.set(todosMock);
  completedStore.set(1);
  render(<Todos />);
  const title = screen.getByText('What to do next');
  expect(title).toBeInTheDocument();
});

test('renders relevant title for empty todos', () => {
  todosStore.set([]);
  render(<Todos />);
  const title = screen.getByText('Nothing to do.');
  expect(title).toBeInTheDocument();
});

test('renders relevant title for completed todos', () => {
  const completedMock = todosMock.map((todo) => {
    todo.completed = true;
    return todo;
  });
  todosStore.set(completedMock);
  completedStore.set(todosMock.length);
  render(<Todos />);
  const title = screen.getByText('Everything is done!');
  expect(title).toBeInTheDocument();
});