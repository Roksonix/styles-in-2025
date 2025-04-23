export interface BaseItem {
  id: string | number;
  label: string;
  type: string;
  category?: string;
}

export interface WebsiteItem extends BaseItem {
  type: 'website';
  domain: string;
  favicon: string;
}

export interface ComparisonItem extends BaseItem {
  type: 'comparison';
  websites: Array<{
    domain: string;
    favicon: string;
  }>;
  additionalCount?: number;
}

export type SearchItem = WebsiteItem | ComparisonItem;

export interface Category {
  key: string;
  title: string;
  items: SearchItem[];
} 