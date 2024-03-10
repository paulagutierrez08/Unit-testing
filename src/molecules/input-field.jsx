import React, {useState} from 'react';

function InputField() {
  const [name, setName] = useState('');
  const [input, setInput] = useState('Hello!');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setInput(`Hello, ${name}!`);
  };

  return (
    <div>
        <h2>Assignment 3</h2>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={handleClick}>Enter</button>
        <p>{input}</p>
    </div>
  );
}

export default InputField;
