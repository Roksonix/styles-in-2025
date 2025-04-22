import React from 'react';

export type IconName = string;

interface IconProps {
  iconName: IconName;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const SWReactIcons: React.FC<IconProps> = ({ iconName, size = 'md' }) => {
  const sizes = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
  };
  
  return (
    <span className="SWReactIcons">
      <svg width={sizes[size]} height={sizes[size]}>
        <path d="M0 0h24v24H0z" fill="currentColor"/>
      </svg>
    </span>
  );
}; 