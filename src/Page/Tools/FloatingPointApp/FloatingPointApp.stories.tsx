import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToolsArea } from '../../../home/ToolsArea/ToolsArea';
import FloatingPointApp from './FloatingPointApp';

const meta = {
  title: 'Page/Tools/FloatingPoint',
  component: FloatingPointApp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FloatingPointApp>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {},
}
