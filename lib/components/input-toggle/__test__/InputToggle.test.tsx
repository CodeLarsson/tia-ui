import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InputToggle from '../input-toggle';

describe('InputToggle component', () => {
  it('InputToggle should render correctly', () => {
    // Arrange
    const { container } = render(<InputToggle label="Test" />);
    const input = container.querySelector('input');

    // Assert
    expect(input).toBeTruthy();
    expect(input?.value).toBe('false');
  });

  it('InputToggle should render label correctly', () => {
    // Arrange
    const { container } = render(<InputToggle label="Test" />);
    const label = container.querySelector('label');

    // Assert
    expect(label).toBeTruthy();
    expect(label?.textContent).toBe('Test');
  });

  it('InputToggle should render id correctly', () => {
    // Arrange
    const { container } = render(<InputToggle label="Test" id="test" />);
    const input = container.querySelector('input');

    // Assert
    expect(input).toBeTruthy();
    expect(input?.id).toBe('test');
  });

  it('InputToggle should render onChange correctly', () => {
    // Arrange
    const onChange = vi.fn();
    const { container } = render(
      <InputToggle label="Test" onChange={onChange} id="test" />
    );

    const toggle = container.querySelector('#test-toggle-button');
    const input = screen.getByLabelText<HTMLInputElement>('Test');

    // Assert
    expect(toggle).toBeTruthy();
    expect(input).toBeTruthy();
    expect(input?.value).toEqual('false');
    expect(input?.checked).toBeFalsy();

    // Act
    fireEvent.click(toggle!);

    // Assert
    expect(onChange).toHaveBeenCalled();
    expect(input?.value).toEqual('true');
    expect(input?.checked).toBeTruthy();
  });

  it('InputToggle should render disabled correctly', () => {
    // Arrange
    const onChange = vi.fn();
    const { container } = render(
      <InputToggle label="Test" onChange={onChange} id="test" disabled />
    );

    const toggle = container.querySelector('#test-toggle-button');
    const input = screen.getByLabelText<HTMLInputElement>('Test');

    // Assert
    expect(toggle).toBeTruthy();
    expect(input).toBeTruthy();
    expect(input?.value).toEqual('false');
    expect(input?.checked).toBeFalsy();
    expect(input?.disabled).toEqual(true);

    // Act
    fireEvent.click(toggle!);

    // Assert
    expect(onChange).not.toHaveBeenCalled();
    expect(input?.value).toEqual('false');
    expect(input?.checked).toBeFalsy();
  });

  it('Input toggle should match snapshot - primary', () => {
    // Arrange
    const { container } = render(
      <InputToggle label="Test" type="primary" id="test" />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('Input toggle should match snapshot - secondary', () => {
    // Arrange
    const { container } = render(
      <InputToggle label="Test" type="secondary" id="test" />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});
