import type { Meta, StoryObj } from '@storybook/react';
import { SnsArea } from './SnsArea';
import React from 'react';

const meta = {
  title: 'Page/Home/SnsArea',
  component: SnsArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SnsArea>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {},
}
