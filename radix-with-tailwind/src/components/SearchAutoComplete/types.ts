import { type ReactNode } from 'react';

export type WebsiteSuggestion = {
  type: 'website';
  favicon: string;
  domain: string;
};

export type ComparisonSuggestion = {
  type: 'comparison';
  firstWebsite: {
    favicon: string;
    domain: string;
  };
  secondWebsite: {
    favicon: string;
    domain: string;
  };
  totalSites: number;
};

export type SuggestionItem = WebsiteSuggestion | ComparisonSuggestion;

export type SuggestionGroup = {
  title: string;
  items: SuggestionItem[];
};

export type SearchAutoCompleteProps = {
  suggestions: SuggestionGroup[];
  onSelect: (item: SuggestionItem) => void;
  onSearch: (value: string) => void;
  value?: string;
  placeholder?: ReactNode;
}; 