import React, { useState } from 'react';

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
    <div className="child">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="todoDescription" 
          placeholder="Todo description" 
          onChange={handleDescriptionChange} 
          value={description} 
        />
        <div>
          <button type="submit" id="buttonAddTodo">Add Todo</button>
        </div>
      </form>
    </div>
  );
}
