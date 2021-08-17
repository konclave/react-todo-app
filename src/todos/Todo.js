import React from 'react';
import './Todo.css';

export function Todo({ todo, onRemove, onComplete }) {
	function remove() {
		onRemove(todo.id);
	}

	function complete() {
		onComplete(todo.id);
	}

	return (
	  <React.Fragment >
	    <td style={{ width: 15 }}>
	      <input 
	      	id={ 'todo_' + todo.id }
	      	type="checkbox" 
	      	checked={todo.completed} 	
	      	onChange={complete} 
      	/>
	    </td>
	    <td>
	    	<label htmlFor={'todo_' + todo.id}>
	      {
	        renderTodo()
	      }
	      </label>
	    </td>
	    <td style={{ width: 100 }}>
	      <button onClick={remove}>Delete</button>
	    </td>
	  </React.Fragment>
	);

  function renderTodo() {
    if (todo.completed)
      return <s>{todo.description}</s>;
    else
      return todo.description;
  }
}
