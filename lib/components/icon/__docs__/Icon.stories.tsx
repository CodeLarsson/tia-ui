import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Icon',
  component: Example
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Activity: Story = {
  args: {
    name: 'Activity',
    color: 'green',
    size: 48
  }
};

export const User: Story = {
  args: {
    name: 'User',
    color: 'blue',
    size: 16
  }
};

export const BellOff: Story = {
  args: {
    name: 'BellOff'
  }
};

export const Search: Story = {
  args: {
    name: 'Search',
    color: 'red',
    size: 32
  }
};
