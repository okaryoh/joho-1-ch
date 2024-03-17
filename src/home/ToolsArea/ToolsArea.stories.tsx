import type { Meta, StoryObj } from '@storybook/react';
import { ToolsArea } from './ToolsArea';
import React from 'react';

const meta = {
  title: 'Page/Home/ToolsArea',
  component: ToolsArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToolsArea>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {},
}
