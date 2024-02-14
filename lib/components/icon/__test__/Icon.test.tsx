import React from 'react';
import { describe, expect, vi, it } from 'vitest';
import { render } from '@testing-library/react';

import Icon from '../icon';

global.console = {
  ...global.console,
  error: vi.fn()
};

describe('Icon (TiaIcon) component', () => {
  it('Icon should render correctly', () => {
    const { container } = render(<Icon name="Activity" />);
    const icon = container.querySelector('svg');
    expect(icon).toBeTruthy();
  });
});
