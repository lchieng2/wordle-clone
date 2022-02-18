import { useState, useEffect } from 'react'
import './App.css';
import { Keyboard } from './components/keyboard/Keyboard'
import { Grid } from './components/grid/Grid'
import { isWinningWord, isWordInWordList, getRandomWord } from './lib/words'

function App() {
  const[guesses, setGuesses] = useState<string[]>([])
  const[currentGuess, setCurrentGuess] = useState('')
  const[solution, setSolution] = useState(getRandomWord().toUpperCase())

  const onChar = (value: string) => {
    if (currentGuess.length < 5 && guesses.length <= 5) {
      setCurrentGuess(`${currentGuess}${value}`)
    }
  }

  const onDelete = () => {
    if (currentGuess.length > 0 && guesses.length <= 5) {
      setCurrentGuess(currentGuess.slice(0, -1))
    }
  }

  const onEnter = () => {
    // TODO:: pop up if word entered is not in word list
    if (isWordInWordList(currentGuess)) {

      if (currentGuess.length === 5 && guesses.length <= 5) {
        setGuesses([...guesses, currentGuess])
        setCurrentGuess('')
      }
    }
    console.log(solution);
  }

  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold underline">
        wordle-clone
      </h1>
      <Grid guesses={guesses} currentGuess={currentGuess} solution={solution} />
      <Keyboard
        onChar = {onChar}
        onDelete = {onDelete}
        onEnter = {onEnter}
        guesses = {guesses}
        solution = {solution}
      />
    </div>
  );
}

export default App;
