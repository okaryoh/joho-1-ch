import type { Meta, StoryObj } from '@storybook/react';
import { ThumbnailAndText } from './ThumbnailAndText';

const meta = {
  title: 'Common/ThumbnailAndText',
  component: ThumbnailAndText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThumbnailAndText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'タイトル',
  },
};

export const Long: Story = {
  args: {
    title: 'タイトルタイトルタイトルタイトルタイトルタイトルタイトル',
  },
};

export const Detail: Story = {
  args: {
    title: 'タイトルタイトルタイトルタイトルタイトルタイトルタイトル',
    detail: 'ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。',
  },
};

export const Link: Story = {
  args: {
    title: 'タイトルタイトルタイトルタイトルタイトルタイトルタイトル',
    detail: 'ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。',
    linkUrl: 'https://google.com/'
  },
};