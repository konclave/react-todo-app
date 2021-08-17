import React from 'react';
import { Todos } from './todos/Todos';
import { Summary } from './todos/Summary';
import { useTodosPersist } from './todos/todosPersistHook';
import './App.css';

function App() {
  const [ todos, setTodos ] = useTodosPersist();

  return (
    <div className="container">
      <h1 className="child">React TODO App</h1>
      <Todos todos={todos} onChange={setTodos} />
      <div className="child">
        <Summary todos={todos} />
      </div>
    </div>
  );
}

export default App;
