export type CharStatus = 'absent' | 'present' | 'correct'

export type RowStatus = 'empty' | 'completed' | 'current'

export type CharValue =
  | 'Q'
  | 'W'
  | 'E'
  | 'R'
  | 'T'
  | 'Y'
  | 'U'
  | 'I'
  | 'O'
  | 'P'
  | 'A'
  | 'S'
  | 'D'
  | 'F'
  | 'G'
  | 'H'
  | 'J'
  | 'K'
  | 'L'
  | 'Z'
  | 'X'
  | 'C'
  | 'V'
  | 'B'
  | 'N'
  | 'M'


export const getStatuses = (
  guesses: string[],
  solution: string

): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}

  guesses.forEach((word) => {
    word.split('').forEach((letter, i) => {
      if (!solution.includes(letter)) {
        return (charObj[letter] = 'absent')
      } else if (letter === solution[i]) {
        return (charObj[letter] = 'correct')
      } else {
        if (charObj[letter] !== 'correct') {
          return (charObj[letter] = 'present')
        }
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string, solution: string): CharStatus[] => {

  const statuses: CharStatus[] = Array.from(Array(guess.length));

  let remainingLetters = solution;

  // handle correct guesses first in case of duplicates
  for (var i = 0; i < guess.length; i++) {
    if (guess[i] === solution[i]) {
      statuses[i] = 'correct';
      remainingLetters = remainingLetters.replace(guess.charAt(i), '');
    }
  }
  console.log(remainingLetters);
  for (var i = 0; i < guess.length; i++) {
    if (guess[i] !== solution[i]) {
      if (remainingLetters.includes(guess.charAt(i))) {
        statuses[i] = 'present';
        remainingLetters = remainingLetters.replace(guess.charAt(i), '');
      } else {
        statuses[i] = 'absent';
      }
    }
  }

  return statuses;
}