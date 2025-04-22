import React, { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IQueryBarItemProps } from '../Common/QueryBarItemTypes';
import { renderDefaultImageComponent, renderIconComponent, renderTextComponent } from '../Common/QueryBarItemHelper';

export const QueryBarItemSingle: FC<IQueryBarItemProps> = ({
  text,
  secondaryText,
  image,
  activeImage,
  iconName = 'edit-icon',
  iconSize,
  onItemClick,
  renderImageComponent = renderDefaultImageComponent,
  renderTextComponent: customRenderTextComponent = renderTextComponent,
  renderIconComponent: customRenderIconComponent = renderIconComponent,
  width = '300px',
  className,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onItemClick();
  };

  const containerClasses = twMerge(
    'flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200',
    'border border-transparent hover:border-gray-200 rounded-lg',
    isActive && 'bg-blue-50 hover:bg-blue-100',
    className
  );

  const contentClasses = 'flex items-center flex-grow';
  const imageWrapperClasses = 'mr-3';

  return (
    <div 
      className={containerClasses}
      style={{ width }}
      onClick={handleClick}
    >
      <div className={contentClasses}>
        <div className={imageWrapperClasses}>
          {renderImageComponent({
            image: isActive && activeImage ? activeImage : image,
            isActive,
            text,
          })}
        </div>
        {customRenderTextComponent(isActive, text, secondaryText)}
      </div>
      {customRenderIconComponent(isActive, iconName, iconSize)}
    </div>
  );
}; 