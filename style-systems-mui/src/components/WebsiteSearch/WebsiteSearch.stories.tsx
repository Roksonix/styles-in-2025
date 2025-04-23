import type { Meta, StoryObj } from '@storybook/react';
import WebsiteSearch from './WebsiteSearch';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme';

const meta = {
  title: 'Components/WebsiteSearch',
  component: WebsiteSearch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: '24px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof WebsiteSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: 600 }
  },
};

export const Wide: Story = {
  args: {
    style: { width: 800 }
  },
};

export const Narrow: Story = {
  args: {
    style: { width: 400 }
  },
}; 