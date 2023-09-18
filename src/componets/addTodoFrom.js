import React, { useState } from 'react';

const AddTodoFrom = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      setError('Task cannot be empty');
    } else {
      addTodo(value);
      setValue('');
      setError('');
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        ADD TASK
      </button>
      {error && (
        <p className="error" style={{ color: 'white' }}>
          {error}
        </p>
      )}
    </form>
  );
};

export default AddTodoFrom;
