export interface Website {
  domain: string;
  favicon: string;
}

export interface WebsiteComparison {
  websites: Website[];
  category?: string;
}

export type SearchItem = Website | WebsiteComparison;

export interface SearchCategory {
  title: string;
  items: SearchItem[];
} 