import { Box } from './Box'
import { getGuessStatuses, RowStatus } from '../../lib/statuses'
import classnames from 'classnames'

type Props = {
    guess: string
    status: RowStatus
    solution: string
}

const classes = classnames('flex justify-center mb-1')

export const Row = ({ guess, status, solution }: Props) => {
    // empty guess
    // completed guess
    // current guess
    if (status === 'empty') {
        const emptyBoxes = Array.from(Array(5)); // Array(5)?

        return (
            <div className={classes}>
                {emptyBoxes.map((_, i) => (
                    <Box key={i} />
                ))}
            </div>
        )
    } else if (status === 'completed') {
        const statuses = getGuessStatuses(guess, solution);

        return (
            <div className={classes}>
                {guess.split('').map((letter, i) => (
                    <Box key={i} value={letter} status={statuses[i]} />
                ))}
            </div>
        )
    } else { // status === current
        const usedCells = guess.split('');
        const emptyCells = Array.from(Array(5 - usedCells.length));

        return (
            <div className={classes}>
                {usedCells.map((letter, i) => (
                    <Box key={i} value={letter} />
                ))}
                {emptyCells.map((_, i) => (
                    <Box key={i} />
                ))}
            </div>
        )
    }
}