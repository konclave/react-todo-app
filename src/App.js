import React from 'react';
import { Todos } from './todos/Todos';
import { Summary } from './todos/Summary';
import { useTodosPersist } from './todos/todosPersistHook';
import './App.css';

function App() {
  const [ todos, completed, setTodos ] = useTodosPersist();

  return (
    <div className="todo-app">
      <header>
        <h1 className="todo-app__title">React TODO App</h1>
      </header>
      <main>
        <Todos todos={todos} completed={completed} onChange={setTodos} />
      </main>
      <footer>
        <div className="todo-app__summary">
          <Summary total={todos.length} completed={completed} />
        </div>
      </footer>
    </div>
  );
}

export default App;
