import type { Meta, StoryObj } from '@storybook/react';
import { SearchAutoComplete } from './SearchAutoComplete';

const meta: Meta<typeof SearchAutoComplete> = {
  title: 'Components/SearchAutoComplete',
  component: SearchAutoComplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchAutoComplete>;

const mockSuggestions = [
  {
    title: "Recent Analysis",
    items: [
      {
        type: 'comparison' as const,
        firstWebsite: {
          favicon: 'https://airoh.com/favicon.ico',
          domain: 'airoh.com'
        },
        secondWebsite: {
          favicon: 'https://shark-helmets.com/favicon-shark.ico',
          domain: 'shark-helmets.com'
        },
        totalSites: 5
      },
      {
        type: 'website' as const,
        favicon: 'https://nike.com/favicon.ico',
        domain: 'nike.com'
      },
      {
        type: 'comparison' as const,
        firstWebsite: {
          favicon: 'https://nike.com/favicon.ico',
          domain: 'nike.com'
        },
        secondWebsite: {
          favicon: 'https://www.footlocker.eu/etc.clientlibs/footlocker-corp-eu/clientlibs/clientlib-site/resources/resources/images/favicon.ico',
          domain: 'footlocker.eu'
        },
        totalSites: 2
      },
      {
        type: 'website' as const,
        favicon: 'https://www.airoh.com/favicon.ico',
        domain: 'airoh.com'
      },
      {
        type: 'comparison' as const,
        firstWebsite: {
          favicon: 'https://fitspresso.com/favicon.ico',
          domain: 'fitspresso.com'
        },
        secondWebsite: {
          favicon: 'https://www.tryfitspresso.eu/favicon.ico',
          domain: 'tryfitspresso.org'
        },
        totalSites: 3
      },
      {
        type: 'website' as const,
        favicon: 'https://www.fitspresso.com/favicon.ico',
        domain: 'fitspresso.com'
      },
      {
        type: 'website' as const,
        favicon: 'https://www.youtube.com/favicon.ico',
        domain: 'youtube.com'
      },
      {
        type: 'website' as const,
        favicon: 'https://www.zbozi.cz/favicon.ico',
        domain: 'zbozi.cz'
      }
    ]
  }
];

export const Default: Story = {
  args: {
    suggestions: mockSuggestions,
    onSelect: (item) => console.log('Selected:', item),
    onSearch: (value) => console.log('Searching:', value),
  },
};

export const Empty: Story = {
  args: {
    suggestions: [],
    onSelect: (item) => console.log('Selected:', item),
    onSearch: (value) => console.log('Searching:', value),
  },
};

export const WithValue: Story = {
  args: {
    suggestions: mockSuggestions,
    value: 'git',
    onSelect: (item) => console.log('Selected:', item),
    onSearch: (value) => console.log('Searching:', value),
  },
}; 