import React from 'react'

import Greeting from './greeting';
import Prueba from './molecules/prueba'
import Button from './molecules/button'
import InputField from './molecules/input-field';
import Submission from './molecules/submission';

function App() {
  return (
    <Greeting>
      <Prueba />
      <Button/>
      <InputField/>
      <Submission/>
    </Greeting>
  );
}

export default App;
