import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InputField from '../input-field';

describe('InputField component', () => {
  it('InputField should render correctly', () => {
    // Arrange
    const { container } = render(<InputField value="test" />);
    const input = container.querySelector('input');

    // Assert
    expect(input).toBeTruthy();
    expect(input?.value).toBe('test');
  });

  it('InputField should render label correctly', () => {
    // Arrange
    const { container } = render(<InputField value="test" label="test" />);
    const label = container.querySelector('label');

    // Assert
    expect(label).toBeTruthy();
    expect(label?.textContent).toBe('test');
  });

  it('InputField should render id correctly', () => {
    // Arrange
    const { container } = render(<InputField value="test" id="test" />);
    const input = container.querySelector('input');

    // Assert
    expect(input).toBeTruthy();
    expect(input?.id).toBe('test');
  });

  it('InputField should render placeholder correctly', () => {
    // Arrange
    const { container } = render(
      <InputField value="test" placeholder="test" />
    );
    const input = container.querySelector('input');

    // Assert
    expect(input).toBeTruthy();
    expect(input?.placeholder).toBe('test');
  });

  it('InputField should render onChange correctly', () => {
    // Arrange
    const onChange = vi.fn();
    render(<InputField value="test" onChange={onChange} label="textbox" />);

    const input = screen.getByLabelText<HTMLInputElement>('textbox');

    // Assert
    expect(input).toBeTruthy();
    expect(input?.value).toBe('test');

    // Act
    fireEvent.change(input, { target: { value: 'test2' } });

    // Assert
    expect(onChange).toHaveBeenCalled();
  });
});
