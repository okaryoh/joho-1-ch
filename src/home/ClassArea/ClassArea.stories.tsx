import type { Meta, StoryObj } from '@storybook/react';
import { ClassArea } from './ClassArea';
import React from 'react';

const meta = {
  title: 'Page/Home/ClassArea',
  component: ClassArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClassArea>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {},
}
