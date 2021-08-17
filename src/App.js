import React, { Component } from 'react';
import { Todos } from './todos/Todos';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="child">React TODO App</h1>
        <Todos />
        <div className="child">
          <span>Total of items: 0</span> | <span>Completed: 0</span>
        </div>
      </div>
    );
  }
}

export default App;
