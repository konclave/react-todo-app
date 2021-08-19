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
