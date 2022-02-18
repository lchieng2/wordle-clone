import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { getGuessStatuses, CharStatus } from './lib/statuses';
import exp from 'constants';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('get guess statuses function', () => {

  it('should return array with character statuses', () => {
    const guess = "PHASE";
    const solution = "SHAKE"
    
    const results: CharStatus[] = getGuessStatuses(guess, solution);

    const expected: CharStatus[] = ["absent", "correct", "correct", "present", "correct"];

    console.log(results);
    console.log(expected);
    expect(results === expected);
  })
})