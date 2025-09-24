import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'Catalyst UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card content goes here',
  },
};

export const WithTitle: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is a card with a title and description.</p>
      </div>
    ),
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card with Actions</h3>
        <p className="text-gray-600 mb-4">This card includes action buttons.</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">Action 1</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Action 2</button>
        </div>
      </div>
    ),
  },
};
