import './App.css';
import { useState } from 'react';
import InputShortner from './components/InputShortner';
import ShortendResult from './components/ShortendResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <InputShortner setInputValue={setInputValue}/>
      <ShortendResult inputValue={inputValue} />
    </div>
  );
}

export default App;
