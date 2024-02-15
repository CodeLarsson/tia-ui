import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'InputToggle',
  component: Example
};

export default meta;

type Story = StoryObj<typeof Example>;

export const PrimarySmall: Story = {
  args: {
    size: 'small',
    type: 'primary'
  }
};

export const PrimaryMedium: Story = {
  args: {
    size: 'medium',
    type: 'primary'
  }
};

export const PrimaryLarge: Story = {
  args: {
    size: 'large',
    type: 'primary'
  }
};

export const SecondarySmall: Story = {
  args: {
    type: 'secondary',
    size: 'small'
  }
};

export const SecondaryMedium: Story = {
  args: {
    type: 'secondary',
    size: 'medium'
  }
};

export const SecondaryLarge: Story = {
  args: {
    type: 'secondary',
    size: 'large'
  }
};

export const DisabledPrimary: Story = {
  args: {
    type: 'primary',
    disabled: true
  }
};

export const DisabledSecondary: Story = {
  args: {
    type: 'secondary',
    disabled: true
  }
};
