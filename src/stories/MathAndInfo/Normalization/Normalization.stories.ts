import type { Meta, StoryObj } from '@storybook/react';
import { Normalization } from './Normalization';

const meta = {
  title: 'MathInfo/Normalization',
  component: Normalization,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Normalization>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bin: 0.000101001
  },
};

export const Minus: Story = {
  args: {
    bin: -0.000101001
  },
};

export const Primary2: Story = {
  args: {
    bin: 10100.000110
  },
};

export const Minus2: Story = {
  args: {
    bin: -10100.000110
  },
};


