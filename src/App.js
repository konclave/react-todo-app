import React from 'react';
import { Todos, Summary } from './todos/components/';
import './App.css';

function App() {
  return (
    <div className="todo-app">
      <header>
        <h1 className="todo-app__title">React TODO App</h1>
      </header>
      <main>
        <Todos />
      </main>
      <footer>
        <div className="todo-app__summary">
          <Summary />
        </div>
      </footer>
    </div>
  );
}

export default App;
