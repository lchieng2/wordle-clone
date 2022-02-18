import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string, solution: string) => {
  return solution === word
}

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}