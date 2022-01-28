import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { Keyboard } from './components/keyboard/Keyboard'

function App() {
  const[guesses, setGuesses] = useState(['ADIEU', 'TASTY'])
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        wordle-clone
      </h1>
      <Keyboard
        guesses = {guesses}
      />
    </div>
  );
}

export default App;
