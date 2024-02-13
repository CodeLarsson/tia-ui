import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  it('Button should render correctly', () => {
    // Arrange
    render(<Button />);
    const button = screen.getByRole('button');

    // Assert
    expect(button).toBeInTheDocument();
  });

  it('Button should render primary class correctly', () => {
    // Arrange
    render(<Button primary={true} />);
    const button = screen.getByRole('button');

    // Assert
    expect(button.className).toContain('tia-bg-primary-500');
  });

  it('Button should render secondary class correctly', () => {
    // Arrange
    render(<Button primary={false} />);
    const button = screen.getByRole('button');

    // Assert
    expect(button.className).toContain('tia-bg-white');
  });

  it('Button should trigeger function on click', () => {
    // Arrange
    const mockFn = vi.fn();
    render(<Button onClick={mockFn} />);
    const button = screen.getByRole('button');

    // Act
    button.click();

    // Assert
    expect(mockFn).toHaveBeenCalled();
  });

  it('Button should match snapshot', () => {
    // Arrange
    const { container } = render(<Button />);

    //Assert
    expect(container).toMatchSnapshot();
  });
});
