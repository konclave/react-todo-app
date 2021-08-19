import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Todo } from './Todo';

const todoMock = {
  id: 1,
  description: 'foo',
  completed: false
}

test('renders todo', () => {
  render(<Todo todo={todoMock} onRemove={() => {}} onComplete={() => {}} />);
  const todoDescriptionElement = screen.getByText(todoMock.description);
  const checkBox = screen.getByLabelText(todoMock.description);
  expect(todoDescriptionElement).toBeInTheDocument();
  expect(checkBox.checked).toEqual(todoMock.completed);
});

test('calls onComplete callback on todo complete', () => {
  const onCompleteMock = jest.fn();
  render(<Todo todo={todoMock} onRemove={() => {}} onComplete={onCompleteMock} />);
  userEvent.click(screen.getByLabelText(todoMock.description));
  expect(onCompleteMock).toBeCalledWith(todoMock.id);
});

test('calls onRemove callback on todo remove', () => {
  const onRemoveMock = jest.fn();
  render(<Todo todo={todoMock} onRemove={onRemoveMock} onComplete={() => {}} />);
  userEvent.click(screen.getByText('❌'));
  expect(onRemoveMock).toBeCalledWith(todoMock.id);
});
