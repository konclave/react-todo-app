import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Todo } from './Todo';

const todoMock = {
  id: 1,
  description: 'foo',
  completed: false
}

const onCompleteMock = jest.fn();
const onRemoveMock = jest.fn();

test('renders todo', () => {
  render(<Todo todo={todoMock} onRemove={onRemoveMock} onComplete={onCompleteMock} />);
  const todoDescriptionElement = screen.getByText(todoMock.description);
  const checkBox = screen.getByLabelText(todoMock.description);
  expect(todoDescriptionElement).toBeInTheDocument();
  expect(checkBox.checked).toEqual(todoMock.completed);
});

test('calls onComplete callback on todo complete', () => {
  render(<Todo todo={todoMock} onRemove={onRemoveMock} onComplete={onCompleteMock} />);
  userEvent.click(screen.getByLabelText(todoMock.description));
  expect(onCompleteMock).toBeCalledWith(todoMock.id);
});

test('calls onRemove callback on todo remove', () => {
  render(<Todo todo={todoMock} onRemove={onRemoveMock} onComplete={onCompleteMock} />);
  userEvent.click(screen.getByText('❌'));
  expect(onRemoveMock).toBeCalledWith(todoMock.id);
});