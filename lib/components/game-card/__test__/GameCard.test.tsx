import React from 'react';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import GameCard from '../game-card';
import { CardSuite, CardValue } from '../game-card';

describe('GameCard component', () => {
  it('GameCard should render correctly', () => {
    const { container } = render(
      <GameCard suite={CardSuite.Spades} value={CardValue.Ace} />
    );
    expect(container).toMatchSnapshot();
  });

  it('GameCard should flipå on click', () => {
    // Arrange
    render(<GameCard suite={CardSuite.Spades} value={CardValue.Ace} />);
    const card = screen.getByTestId('tia-game-card');

    // Assert Before click
    expect(card.classList).toContain('tia-rotate-180');

    // Act
    fireEvent(card, new MouseEvent('click', { bubbles: true }));

    // Assert After click
    expect(card.classList).toContain('tia-rotate-0');
  });
});
