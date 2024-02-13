import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import { CardValue, CardSuite } from '../game-card';

const meta: Meta<typeof Example> = {
  title: 'Game Card',
  component: Example
};

export default meta;

type Story = StoryObj<typeof Example>;

export const AceOfSpades: Story = {
  args: {
    value: CardValue.Ace,
    suite: CardSuite.Spades,
    isFlippable: true,
    isFlipped: false
  }
};

export const QueenOfHearts: Story = {
  args: {
    value: CardValue.Queen,
    suite: CardSuite.Hearts,
    isFlipped: true
  }
};

export const JackOfClubs: Story = {
  args: {
    value: CardValue.Jack,
    suite: CardSuite.Clubs
  }
};

export const EightOfDiamonds: Story = {
  args: {
    value: CardValue.Eight,
    suite: CardSuite.Diamonds,
    isFlippable: false
  }
};
