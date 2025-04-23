import type { Meta, StoryObj } from '@storybook/react';
import { SearchAutoComplete } from './SearchAutoComplete';
import { SearchItem } from './types';

const meta = {
  title: 'Components/SearchAutoComplete',
  component: SearchAutoComplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchAutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: SearchItem[] = [
  // Popular Websites
  {
    id: 1,
    type: 'website',
    label: 'Google',
    domain: 'google.com',
    favicon: 'https://www.google.com/favicon.ico',
    category: 'Popular Websites',
  },
  {
    id: 2,
    type: 'website',
    label: 'Facebook',
    domain: 'facebook.com',
    favicon: 'https://www.facebook.com/favicon.ico',
    category: 'Popular Websites',
  },
  {
    id: 3,
    type: 'website',
    label: 'Amazon',
    domain: 'amazon.com',
    favicon: 'https://www.amazon.com/favicon.ico',
    category: 'Popular Websites',
  },
  {
    id: 4,
    type: 'website',
    label: 'Twitter',
    domain: 'twitter.com',
    favicon: 'https://www.twitter.com/favicon.ico',
    category: 'Popular Websites',
  },
  {
    id: 5,
    type: 'website',
    label: 'LinkedIn',
    domain: 'linkedin.com',
    favicon: 'https://www.linkedin.com/favicon.ico',
    category: 'Popular Websites',
  },
  // E-commerce Sites
  {
    id: 6,
    type: 'website',
    label: 'eBay',
    domain: 'ebay.com',
    favicon: 'https://www.ebay.com/favicon.ico',
    category: 'E-commerce',
  },
  {
    id: 7,
    type: 'website',
    label: 'Etsy',
    domain: 'etsy.com',
    favicon: 'https://www.etsy.com/favicon.ico',
    category: 'E-commerce',
  },
  {
    id: 8,
    type: 'website',
    label: 'Shopify',
    domain: 'shopify.com',
    favicon: 'https://www.shopify.com/favicon.ico',
    category: 'E-commerce',
  },
  // Comparisons
  {
    id: 9,
    type: 'comparison',
    label: 'Social Media Comparison',
    websites: [
      { domain: 'facebook.com', favicon: 'https://www.facebook.com/favicon.ico' },
      { domain: 'twitter.com', favicon: 'https://www.twitter.com/favicon.ico' },
    ],
    additionalCount: 3,
    category: 'Comparisons',
  },
  {
    id: 10,
    type: 'comparison',
    label: 'Search Engines',
    websites: [
      { domain: 'google.com', favicon: 'https://www.google.com/favicon.ico' },
      { domain: 'bing.com', favicon: 'https://www.bing.com/favicon.ico' },
    ],
    category: 'Comparisons',
  },
  {
    id: 11,
    type: 'comparison',
    label: 'E-commerce Giants',
    websites: [
      { domain: 'amazon.com', favicon: 'https://www.amazon.com/favicon.ico' },
      { domain: 'ebay.com', favicon: 'https://www.ebay.com/favicon.ico' },
    ],
    category: 'Comparisons',
  },
  // Tech Websites
  {
    id: 12,
    type: 'website',
    label: 'GitHub',
    domain: 'github.com',
    favicon: 'https://www.github.com/favicon.ico',
    category: 'Tech',
  },
  {
    id: 13,
    type: 'website',
    label: 'Stack Overflow',
    domain: 'stackoverflow.com',
    favicon: 'https://www.stackoverflow.com/favicon.ico',
    category: 'Tech',
  },
  {
    id: 14,
    type: 'comparison',
    label: 'Code Repositories',
    websites: [
      { domain: 'github.com', favicon: 'https://www.github.com/favicon.ico' },
      { domain: 'gitlab.com', favicon: 'https://www.gitlab.com/favicon.ico' },
    ],
    additionalCount: 1,
    category: 'Comparisons',
  },
  {
    id: 15,
    type: 'website',
    label: 'Microsoft',
    domain: 'microsoft.com',
    favicon: 'https://www.microsoft.com/favicon.ico',
    category: 'Tech',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    categorize: false,
    style: { width: 600 },
  },
};

export const WithCategories: Story = {
  args: {
    items: sampleItems,
    categorize: true,
    style: { width: 600 },
  },
}; 