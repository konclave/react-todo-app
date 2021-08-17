import { useState, useEffect } from 'react';

export function useTodosPersist() {
  const [ todos, setTodos ] = useState([]);
  
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

  return [ todos, setTodos ];
}