import React, { useState } from 'react';

function Button() {
  const [message, setMessage] = useState('Hello!')

  const handleClick = () => {
    setMessage((prevMessage)=> 
        prevMessage === 'Hello!' ? 'Hello, User!' : 'Hello!' 
  )
  };

  return (
    <div>
      <h2>Assignment 2</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Button;
