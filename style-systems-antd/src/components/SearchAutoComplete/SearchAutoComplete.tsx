import React, { useMemo } from 'react';
import { AutoComplete, Space } from 'antd';
import type { AutoCompleteProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SearchItem, Category, WebsiteItem, ComparisonItem } from './types';
import styles from './SearchAutoComplete.module.css';

interface SearchAutoCompleteProps extends Omit<AutoCompleteProps, 'options'> {
  items: SearchItem[];
  categorize?: boolean;
}

const renderWebsiteItem = (item: WebsiteItem) => (
  <Space>
    <div className={styles.faviconWrapper}>
      <img src={item.favicon} alt={item.domain} className={styles.favicon} />
    </div>
    <span className={styles.domain}>{item.domain}</span>
  </Space>
);

const renderComparisonItem = (item: ComparisonItem) => (
  <Space>
    {item.websites.slice(0, 2).map((website, index) => (
      <React.Fragment key={website.domain}>
        {index > 0 && <span className={styles.secondaryText}>vs.</span>}
        <div className={styles.faviconWrapper}>
          <img src={website.favicon} alt={website.domain} className={styles.favicon} />
        </div>
        <span className={styles.domain}>{website.domain}</span>
      </React.Fragment>
    ))}
    {item.additionalCount && item.additionalCount > 0 && (
      <span className={styles.secondaryText}>+{item.additionalCount}</span>
    )}
  </Space>
);

const renderItem = (item: SearchItem) => {
  switch (item.type) {
    case 'website':
      return renderWebsiteItem(item);
    case 'comparison':
      return renderComparisonItem(item);
  }
};

export const SearchAutoComplete: React.FC<SearchAutoCompleteProps> = ({
  items,
  categorize = false,
  className,
  ...props
}) => {
  const options = useMemo(() => {
    if (!categorize) {
      return items.map(item => ({
        value: item.id.toString(),
        label: renderItem(item),
      }));
    }

    const categories = items.reduce<Record<string, Category>>((acc, item) => {
      const categoryKey = item.category || 'Other';
      if (!acc[categoryKey]) {
        acc[categoryKey] = {
          key: categoryKey,
          title: categoryKey,
          items: [],
        };
      }
      acc[categoryKey].items.push(item);
      return acc;
    }, {});

    return Object.values(categories).map(category => ({
      label: <div className={styles.categoryTitle}>{category.title}</div>,
      options: category.items.map(item => ({
        value: item.id.toString(),
        label: renderItem(item),
      })),
    }));
  }, [items, categorize]);

  return (
    <AutoComplete
      className={`${styles.searchAutoComplete} ${className || ''}`}
      options={options}
      popupClassName={styles.searchAutoCompleteDropdown}
      placeholder={<>Search for a <span className={styles.boldText}>website</span> or <span className={styles.boldText}>keyword</span></>}
      prefix={<SearchOutlined className={styles.searchIcon} />}
      {...props}
    />
  );
}; 