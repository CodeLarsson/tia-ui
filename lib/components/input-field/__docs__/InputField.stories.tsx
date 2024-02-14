import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'InputField',
  component: Example
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Small: Story = {
  args: {
    id: 'test',
    label: 'Label',
    disabled: false,
    size: 'small',
    placeholder: 'Placeholder',
    value: 'Value',
    onChange: () => {}
  }
};

export const Medium: Story = {
  args: {
    id: 'test',
    label: 'Label',
    disabled: false,
    size: 'medium',
    placeholder: 'Placeholder',
    value: 'Value',
    onChange: () => {}
  }
};

export const Large: Story = {
  args: {
    id: 'test',
    label: 'Label',
    disabled: false,
    size: 'large',
    placeholder: 'Placeholder',
    value: 'Value',
    onChange: () => {}
  }
};
