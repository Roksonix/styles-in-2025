import { FC, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import {
  renderDefaultImageComponent,
  renderIconComponent as renderDefaultIconComponent,
  renderTextComponent as renderDefaultTextComponent,
} from "../Common/QueryBarItemHelper";
import { IQueryBarItemProps } from "../Common/QueryBarItemTypes";

interface IQueryBarItemCompareProps extends IQueryBarItemProps {
  activeImage?: string;
  renderIconComponent?: typeof renderDefaultIconComponent;
  onButtonClick?: () => void;
  badgeColor?: string;
  hideRemoveButton?: boolean;
}

export const QueryBarItemCompare: FC<IQueryBarItemCompareProps> = (props) => {
  const {
    image,
    activeImage,
    text,
    secondaryText,
    onItemClick,
    iconName = "close-icon",
    iconSize,
    renderImageComponent = renderDefaultImageComponent,
    renderTextComponent = renderDefaultTextComponent,
    renderIconComponent = renderDefaultIconComponent,
    onButtonClick,
    width,
    className,
    badgeColor,
    hideRemoveButton = false,
  } = props;

  const [isHoverOnItem, setIsHoverOnItem] = useState(false);
  const isMultiline = !!secondaryText;

  const ImageComponent = useMemo(() => {
    const isActive = isHoverOnItem;
    const imageProps = {
      image: isActive && activeImage ? activeImage : image,
      text,
      isActive,
      margin: isMultiline ? 4 : 0,
      badgeColor,
    };
    return renderImageComponent(imageProps);
  }, [image, activeImage, text, secondaryText, isHoverOnItem, badgeColor]);

  const TextComponent = renderTextComponent(isHoverOnItem, text, secondaryText);
  const IconComponent = !hideRemoveButton && renderIconComponent(isHoverOnItem, iconName, iconSize);

  const containerClasses = twMerge(
    "flex items-center justify-between",
    "bg-carbon-25 hover:bg-navigation-active-tile-bg",
    "rounded-lg pr-2",
    "transition-colors duration-200",
    "font-roboto",
    "max-w-[320px] min-w-[128px]",
    "flex-auto",
    isMultiline ? "h-10" : "h-8",
    width ? "w-[" + width + "] flex-none" : "",
    className
  );

  const clickContainerClasses = twMerge(
    "flex flex-row justify-start items-center",
    "max-w-full min-w-0"
  );

  return (
    <div
      className={containerClasses}
      onMouseEnter={() => setIsHoverOnItem(true)}
      onMouseLeave={() => setIsHoverOnItem(false)}
    >
      <div className={clickContainerClasses} onClick={onItemClick}>
        {ImageComponent}
        {TextComponent}
      </div>
      {IconComponent && (
        <div onClick={onButtonClick}>
          {IconComponent}
        </div>
      )}
    </div>
  );
};

QueryBarItemCompare.displayName = "QueryBarCompareItem";
