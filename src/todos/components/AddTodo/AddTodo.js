import React, { useState } from 'react';
import './AddTodo.css';

const initialDescription = '';

export function AddTodo({ onAdd }) {
  const [description, setDescription] = useState(initialDescription);

  function handleSubmit(event) {
    event.preventDefault();
    if (description !== '') {
      onAdd(description);
      setDescription(initialDescription);
    }
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);    
  }

  return (
      <form onSubmit={handleSubmit} className="add-todo">
        <input 
          className="add-todo__input"
          type="text" 
          id="todoDescription" 
          placeholder="Add a todo" 
          onChange={handleDescriptionChange} 
          value={description} 
        />
        <button 
          className="add-todo__submit"
          type="submit" 
          id="buttonAddTodo"
        >＋</button>
      </form>
  );
}
