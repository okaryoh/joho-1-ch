import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Power } from './Power';

const meta = {
  title: 'MathInfo/Power',
  component: Power,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Power>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    base: 4,
    exponent: 3
  },
};

export const Long: Story = {
  args: {
    base: 44,
    exponent: 23
  },
};


