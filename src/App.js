import React, { useState } from 'react';
import { Todos } from './todos/Todos';
import { Summary } from './todos/Summary';
import './App.css';

const initialTodos = [
  {
    id: 1,
    description: "Lorem ipsum dolor sit amet",
    completed: false
  },
  {
    id: 2,
    description: "consectetur adipiscing elit",
    completed: true
  },
  {
    id: 3,
    description: "tsed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    completed: false
  }
];

function App() {
  const [ todos, setTodos ] = useState(initialTodos);

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
