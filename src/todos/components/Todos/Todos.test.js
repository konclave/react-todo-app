import { render, screen } from '@testing-library/react';
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

const completed = 1;

test('renders todos', () => {
  render(<Todos todos={todosMock} completed={completed} onChange={() => {}}/>);
  const todos = screen.getAllByRole('listitem');
  expect(todos.length).toEqual(todosMock.length);
});

test('renders relevant title for todos has incomplete items', () => {
  render(<Todos todos={todosMock} completed={completed} onChange={() => {}}/>);
  const title = screen.getByText('What to do next');
  expect(title).toBeInTheDocument();
});

test('renders relevant title for empty todos', () => {
  render(<Todos todos={[]} completed={0} onChange={() => {}}/>);
  const title = screen.getByText('Nothing to do.');
  expect(title).toBeInTheDocument();
});

test('renders relevant title for completed todos', () => {
  const completedMock = todosMock.map((todo) => {
    todo.completed = true;
    return todo;
  });

  render(<Todos todos={completedMock} completed={completedMock.length} onChange={() => {}}/>);
  const title = screen.getByText('Everything is done!');
  expect(title).toBeInTheDocument();
});