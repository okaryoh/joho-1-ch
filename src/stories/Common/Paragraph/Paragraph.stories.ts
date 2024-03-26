import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta = {
  title: 'Common/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'ラベルが入ります',
  },
};

export const Long: Story = {
  args: {
    text: '長いラベル長いラベル長いラベル長いラベル長いラベル長いラベル長いラベル',
  },
};

export const Background: Story = {
  args: {
    text: '背景色を適用',
    backgroundColor: '#ff0f0f'
  },
};