import { renderHook, act } from '@testing-library/react-hooks';
import { useTodosPersist } from './todosPersistHook';
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
  localStorage.clear();
  jest.clearAllMocks();
  localStorage.__STORE__.todos = JSON.stringify(todosMock);
});

test('reads initial todos value from localStorage', () => {
  const { result } = renderHook(() => useTodosPersist());
  expect(localStorage.getItem).toHaveBeenCalled();
});

test('stores change todos in localStorage on todos state set', () => {
  const { result } = renderHook(() => useTodosPersist());
  const [,, setTodos ] = result.current;
  act(() => {
    setTodos([])
  });
  expect(localStorage.setItem).toHaveBeenCalledWith('todos', '[]');
});

test('counts completed todos on todos state change', () => {
  const { result } = renderHook(() => useTodosPersist());
  const [, completed, setTodos ] = result.current;
  expect(completed).toEqual(1);
  act(() => {
    setTodos([])
  });
  const [, newCompleted ] = result.current;
  expect(newCompleted).toEqual(0);
});