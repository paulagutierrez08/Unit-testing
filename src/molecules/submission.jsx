import React, { useState } from 'react';

function Submission() {
  const [text, setText] = useState('');
  const [submit, setSubmit] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(`${text}`);
  };

  return (
    <div>
      <h2>Assignment 4</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{submit}</p>
    </div>
  );
}

export default Submission;
