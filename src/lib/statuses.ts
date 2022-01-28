export type CharStatus = 'absent' | 'present' | 'correct'

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

): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}
  const tempSolution = 'SALTY'

  guesses.forEach((word) => {
    word.split('').forEach((letter, i) => {
      if (!tempSolution.includes(letter)) {
        return (charObj[letter] = 'absent')
      } else if (letter === tempSolution[i]) {
        return (charObj[letter] = 'correct')
      } else {
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}