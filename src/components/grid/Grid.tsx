import { Row } from './Row'

type Props = {
    guesses: string[]
    currentGuess: string
    solution: string
}

export const Grid = ({ guesses, currentGuess, solution }: Props) => {
    const emptyRows = guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []

    return (
        <div className="pb-6">
            {guesses.map((guess, i) => (
                <Row key={i} guess={guess} status={'completed'} solution={solution} />
            ))}
            {guesses.length <= 5 &&
                <Row guess={currentGuess} status={'current'} solution={solution} />
            }
            {emptyRows.map((_, i) => (
                <Row key={i} guess={""} status={'empty'} solution={solution} />
            ))}
        </div>
    )
}