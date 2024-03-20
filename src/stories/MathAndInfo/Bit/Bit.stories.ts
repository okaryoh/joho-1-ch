import type { Meta, StoryObj } from '@storybook/react';
import { Bit } from './Bit';

const meta = {
  title: 'MathInfo/Bit',
  component: Bit,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Bit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bin: 100101
  },
};

export const NumberOfDegits: Story = {
  args: {
    bin: 10110,
    numberOfDigits: 20
  }
}

export const ZeroStart: Story = {
  args: {
    bin: "0010110",
    numberOfDigits: 20
  }
}