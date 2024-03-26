import type { Meta, StoryObj } from '@storybook/react';
import { Home } from './Home';
import React from 'react';
import { ToolsArea } from './ToolsArea/ToolsArea';
import { ClassArea } from './ClassArea/ClassArea';

const meta = {
  title: 'Page/Home/Home',
  component: Home,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: [<ToolsArea />, <ClassArea />]
  },
}
