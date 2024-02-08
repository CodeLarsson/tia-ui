//Button/__test__/Button.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  it('Button should render correctly', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Button should render primary class correctly', () => {
    render(<Button primary={true} />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('tia-bg-blue-500');
  });
});
