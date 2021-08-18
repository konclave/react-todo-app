import { useState, useEffect } from 'react';

export function useTodosPersist() {
  const [ todos, setTodos ] = useState([]);
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    const jsonTodos = window.localStorage.getItem('todos');
    if (jsonTodos) {
      const stored = JSON.parse(jsonTodos);
      setTodos(stored);
    }
  }, []);

  useEffect(() => {
    const jsonTodos = JSON.stringify(todos);
    window.localStorage.setItem('todos', jsonTodos);       
  }, [todos]);

  function update(todos) {
    const count = todos.reduce((acc, todo) => acc += Number(todo.completed), 0);
    setTodos(todos);
    setCompleted(count);
  } 

  return [ todos, completed, update ];
}