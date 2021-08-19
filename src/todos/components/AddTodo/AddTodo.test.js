import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { AddTodo } from './AddTodo';

test('renders AddTodo', () => {
  render(<AddTodo onAdd={() => {}} />);
  const inputElement = screen.getByPlaceholderText('Add a todo');
  expect(inputElement).toBeInTheDocument();
});

test('calls add callback on todo add', () => {
  const addMock = jest.fn();
  const newTodo = 'new todo';
  render(<AddTodo onAdd={addMock} />);
  userEvent.type(screen.getByPlaceholderText('Add a todo'), newTodo);
  userEvent.click(screen.getByText('＋'));
  expect(addMock).toBeCalledWith(newTodo);
});

test('does not call add callback with empty todo passed', () => {
  const addMock = jest.fn();
  const newTodo = '';
  render(<AddTodo onAdd={addMock} />);
  userEvent.type(screen.getByPlaceholderText('Add a todo'), newTodo);
  userEvent.click(screen.getByText('＋'));
  expect(addMock).not.toBeCalled();
});