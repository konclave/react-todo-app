import React from 'react';
import { removeTodo, completeTodo } from '../../stores/todos';
import './Todo.css';

function TodoComponent({ todo }) {
	function remove() {
		removeTodo(todo.id);
	}

	function complete() {
		completeTodo(todo.id);
	}

	return (
	  	<div className={'todo' + (todo.completed ? ' todo_completed' : '')}>
	      	<input 
		      	className="todo__check"
		      	id={ 'todo_' + todo.id }
		      	type="checkbox" 
		      	checked={todo.completed} 	
		      	onChange={complete} 
	    	/>
	    	<label 
	    		className="todo__description" 
	    		htmlFor={'todo_' + todo.id}
			>
	  			{todo.description}
		  	</label>
	      	<button 
	      		type="button" 
	      		className="todo__remove" 
	      		onClick={remove}
	  		>❌</button>
  		</div>
	);
}

export const Todo = React.memo(TodoComponent);