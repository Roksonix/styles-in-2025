import * as React from 'react';
import { CommandDialog, CommandGroup, CommandItem, CommandList } from '../ui/command';
import { CommandInput } from '../ui/command-input';
import {
  type SearchAutoCompleteProps,
  type SuggestionItem,
  type WebsiteSuggestion,
  type ComparisonSuggestion,
} from './types';
import { cn } from '../../lib/utils';

const WebsiteItem = ({ favicon, domain }: WebsiteSuggestion) => (
  <div className="flex items-center gap-2">
    <div className="relative flex justify-center items-center w-8 h-8 rounded-md bg-white border border-carbon-50 shadow-sm shrink-0">
      <img src={favicon} alt={domain} className="w-4 h-4" />
    </div>
    <span className="font-roboto text-sm text-carbon-500 mx-2 truncate">{domain}</span>
  </div>
);

const ComparisonItem = ({ firstWebsite, secondWebsite, totalSites }: ComparisonSuggestion) => (
  <div className="flex items-center gap-2">
    <div className="relative flex justify-center items-center w-8 h-8 rounded-md bg-white border border-carbon-50 shadow-sm shrink-0">
      <img src={firstWebsite.favicon} alt={firstWebsite.domain} className="w-4 h-4" />
    </div>
    <span className="font-roboto text-sm text-carbon-500 truncate">{firstWebsite.domain}</span>
    <span className="font-roboto text-sm text-carbon-200">vs.</span>
    <div className="relative flex justify-center items-center w-8 h-8 rounded-md bg-white border border-carbon-50 shadow-sm shrink-0">
      <img src={secondWebsite.favicon} alt={secondWebsite.domain} className="w-4 h-4" />
    </div>
    <span className="font-roboto text-sm text-carbon-500 truncate">{secondWebsite.domain}</span>
    {totalSites > 2 && (
      <span className="font-roboto text-sm text-carbon-200">+{totalSites - 2}</span>
    )}
  </div>
);

const defaultPlaceholder = (
  <>
    Search for a <strong>website</strong> or <strong>keyword</strong>
  </>
);

export function SearchAutoComplete({
  suggestions,
  onSelect,
  onSearch,
  value = '',
  placeholder = defaultPlaceholder,
}: SearchAutoCompleteProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const renderSuggestionItem = (item: SuggestionItem) => {
    switch (item.type) {
      case 'website':
        return <WebsiteItem {...item} />;
      case 'comparison':
        return <ComparisonItem {...item} />;
      default:
        return null;
    }
  };

  const handleSelect = (item: SuggestionItem) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <CommandDialog 
      open
      contentClassName={cn("w-[600px] shadow", {
        "max-h-[470px]": isOpen,
        "h-10": !isOpen,
      })}
    >
      <CommandInput
        value={value}
        onValueChange={onSearch}
        placeholder={placeholder}
        onFocus={() => setIsOpen(true)}
      />
      <CommandList className={cn("py-2 bg-white relative z-[1]", {
        "block": isOpen,
        "hidden": !isOpen,
      })}>
        {suggestions.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <CommandGroup
              heading={group.title}
            >
              {group.items.map((item, itemIndex) => (
                <CommandItem
                  key={`${groupIndex}-${itemIndex}`}
                  onSelect={() => handleSelect(item)}
                  className="px-4 h-12 flex flex-row items-center w-full cursor-pointer hover:bg-carbon-25"
                >
                  {renderSuggestionItem(item)}
                </CommandItem>
              ))}
            </CommandGroup>
          </React.Fragment>
        ))}
      </CommandList>
    </CommandDialog>
  );
} 