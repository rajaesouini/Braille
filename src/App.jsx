
import { useState } from 'react';
import './App.css'
import Input from './componements/Input';
import Output from './componements/Output';

function App() {

  //création d'un etat dans le parent
  const [ text, setText] = useState("état");

  return (
   <>
  <Input setText={setText} />
  <Output text={text} />
   </>
  )
};

export default App;
