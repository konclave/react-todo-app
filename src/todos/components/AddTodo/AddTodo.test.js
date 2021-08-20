import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { addTodo } from '../../stores/todos';
import { AddTodo } from './AddTodo';

jest.mock('../../stores/todos');

beforeEach(() => {
  addTodo.mockClear();
});


test('renders AddTodo', () => {
  render(<AddTodo />);
  const inputElement = screen.getByPlaceholderText('Add a todo');
  expect(inputElement).toBeInTheDocument();
});

test('calls add callback on todo add', () => {
  const newTodo = 'new todo';
  render(<AddTodo />);
  userEvent.type(screen.getByPlaceholderText('Add a todo'), newTodo);
  userEvent.click(screen.getByText('＋'));
  expect(addTodo).toBeCalledWith(newTodo);
});

test('does not call add callback with empty todo passed', () => {
  const addMock = jest.fn();
  const newTodo = '';
  render(<AddTodo />);
  userEvent.type(screen.getByPlaceholderText('Add a todo'), newTodo);
  userEvent.click(screen.getByText('＋'));
  expect(addTodo).not.toBeCalled();
});