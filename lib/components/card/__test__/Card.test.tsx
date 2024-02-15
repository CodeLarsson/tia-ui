import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card component', () => {
  it('Card should render correctly', () => {
    // Arrange
    render(<Card />);
    const card = screen.getByRole('region');

    // Assert
    expect(card).toBeInTheDocument();
  });

  it('Card should render as elevated by default', () => {
    // Arrange
    render(<Card />);
    const card = screen.getByRole('region');

    // Assert
    expect(card.classList).toContain('tia-shadow-xl');
  });

  it('Card should match snapshot', () => {
    // Arrange
    const { container } = render(<Card />);

    // Aassert
    expect(container).toMatchSnapshot();
  });
});
