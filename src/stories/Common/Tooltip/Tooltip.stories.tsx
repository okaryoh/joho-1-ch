import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import React from 'react';

const meta = {
  title: 'Common/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const contentElement = <div style={{
  width: '50px',
  height: '50px',
  backgroundColor: '#f0f0f0',
  margin: "5px",
}}>div</div>

const divElement = <div style={{
  width: '50px',
  height: '50px',
  backgroundColor: 'white',
  margin: "5px",
  color: "black",
}}>div</div>

const textElement = <p>テキスト</p>

export const Primary: Story = {
  args: {
    children: [divElement],
    content: contentElement
  },
}
export const Text: Story = {
  args: {
    children: [textElement],
    content: contentElement
  },
}
