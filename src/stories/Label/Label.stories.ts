import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Label } from './Label';

const meta = {
  title: 'Common/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'ラベルが入ります',
  },
};

export const Long: Story = {
  args: {
    label: '長いラベル長いラベル長いラベル長いラベル長いラベル長いラベル長いラベル',
  },
};

export const Background: Story = {
  args: {
    label: 'Button',
    backgroundColor: '#000000',
    color: '#ffffff',
  },
};

export const BorderRadius: Story = {
  args: {
    label: '角丸角丸角丸角丸角丸角丸',
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: '20px',
  },
};

export const BigFont: Story = {
  args: {
    label: '大きめサイズ',
    backgroundColor: '#ff0000',
    color: '#ffff00',
    fontSizePx: 30,
  },
};
