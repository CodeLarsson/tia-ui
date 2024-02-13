import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import { Icon } from '../../../components/icon';
import React from 'react';

const meta: Meta<typeof Example> = {
  title: 'Card',
  component: Example
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Elevated: Story = {
  args: {
    type: 'elevated',
    title: 'Elevated Card',
    CardIcon: () => undefined
  }
};

export const ElevatedWithIcon: Story = {
  args: {
    type: 'elevated',
    title: 'Elevated Card with Icon',
    CardIcon: () => <Icon name="User" color="black" />
  }
};

export const Outlined: Story = {
  args: {
    type: 'outlined',
    title: 'Outlined Card',
    CardIcon: () => undefined
  }
};

export const Filled: Story = {
  args: {
    type: 'filled',
    title: 'Filled Card',
    CardIcon: () => undefined
  }
};
