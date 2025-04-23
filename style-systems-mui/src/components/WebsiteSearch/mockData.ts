import { SearchCategory } from './types';

export const mockData: SearchCategory[] = [
  {
    title: 'Popular Websites',
    items: [
      {
        domain: 'google.com',
        favicon: 'https://www.google.com/favicon.ico'
      },
      {
        domain: 'facebook.com',
        favicon: 'https://www.facebook.com/favicon.ico'
      },
      {
        domain: 'amazon.com',
        favicon: 'https://www.amazon.com/favicon.ico'
      },
      {
        domain: 'twitter.com',
        favicon: 'https://www.twitter.com/favicon.ico'
      },
      {
        domain: 'linkedin.com',
        favicon: 'https://www.linkedin.com/favicon.ico'
      }
    ]
  },
  {
    title: 'E-commerce',
    items: [
      {
        domain: 'ebay.com',
        favicon: 'https://www.ebay.com/favicon.ico'
      },
      {
        domain: 'etsy.com',
        favicon: 'https://www.etsy.com/favicon.ico'
      },
      {
        domain: 'shopify.com',
        favicon: 'https://www.shopify.com/favicon.ico'
      }
    ]
  },
  {
    title: 'Tech',
    items: [
      {
        domain: 'github.com',
        favicon: 'https://www.github.com/favicon.ico'
      },
      {
        domain: 'stackoverflow.com',
        favicon: 'https://www.stackoverflow.com/favicon.ico'
      },
      {
        domain: 'microsoft.com',
        favicon: 'https://www.microsoft.com/favicon.ico'
      }
    ]
  },
  {
    title: 'Comparisons',
    items: [
      {
        websites: [
          { domain: 'facebook.com', favicon: 'https://www.facebook.com/favicon.ico' },
          { domain: 'twitter.com', favicon: 'https://www.twitter.com/favicon.ico' },
          { domain: 'instagram.com', favicon: 'https://www.instagram.com/favicon.ico' },
          { domain: 'tiktok.com', favicon: 'https://www.tiktok.com/favicon.ico' },
          { domain: 'linkedin.com', favicon: 'https://www.linkedin.com/favicon.ico' }
        ]
      },
      {
        websites: [
          { domain: 'google.com', favicon: 'https://www.google.com/favicon.ico' },
          { domain: 'bing.com', favicon: 'https://www.bing.com/favicon.ico' }
        ]
      },
      {
        websites: [
          { domain: 'amazon.com', favicon: 'https://www.amazon.com/favicon.ico' },
          { domain: 'ebay.com', favicon: 'https://www.ebay.com/favicon.ico' }
        ]
      },
      {
        websites: [
          { domain: 'github.com', favicon: 'https://www.github.com/favicon.ico' },
          { domain: 'gitlab.com', favicon: 'https://www.gitlab.com/favicon.ico' },
          { domain: 'bitbucket.com', favicon: 'https://www.bitbucket.com/favicon.ico' }
        ]
      }
    ]
  }
]; 