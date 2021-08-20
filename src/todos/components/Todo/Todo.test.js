import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { removeTodo, completeTodo } from '../../stores/todos';
import { Todo } from './Todo';

jest.mock('../../stores/todos');

const todoMock = {
  id: 1,
  description: 'foo',
  completed: false
}

test('renders todo', () => {
  render(<Todo todo={todoMock} />);
  const todoDescriptionElement = screen.getByText(todoMock.description);
  const checkBox = screen.getByLabelText(todoMock.description);
  expect(todoDescriptionElement).toBeInTheDocument();
  expect(checkBox.checked).toEqual(todoMock.completed);
});

test('calls onComplete callback on todo complete', () => {
  render(<Todo todo={todoMock} />);
  userEvent.click(screen.getByLabelText(todoMock.description));
  expect(completeTodo).toBeCalledWith(todoMock.id);
});

test('calls onRemove callback on todo remove', () => {
  render(<Todo todo={todoMock} />);
  userEvent.click(screen.getByText('❌'));
  expect(removeTodo).toBeCalledWith(todoMock.id);
});
