import type { Meta, StoryObj } from '@storybook/react';
import { FixedBar } from './FixedBar';
import React from 'react';

const meta = {
  title: 'Common/FixedBar',
  component: FixedBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FixedBar>;

export default meta;
type Story = StoryObj<typeof meta>;


const divElement = <div style={{
  width: '50px',
  height: '50px',
  backgroundColor: '#f0f0f0',
  margin: "5px",
}}>div</div>

export const Primary: Story = {
  args: {
    children: [divElement],
  },
}
