import { FC, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import {
  renderDefaultImageComponent,
  renderIconComponent as renderDefaultIconComponent,
  renderTextComponent as renderDefaultTextComponent,
} from "../Common/QueryBarItemHelper";
import { IQueryBarItemProps } from "../Common/QueryBarItemTypes";

interface IQueryBarItemSingleProps extends IQueryBarItemProps {
  activeImage?: string;
  renderIconComponent?: typeof renderDefaultIconComponent;
}

export const QueryBarItemSingle: FC<IQueryBarItemSingleProps> = (props) => {
  const {
    image,
    activeImage,
    text,
    secondaryText,
    onItemClick,
    iconName = "edit-icon",
    iconSize,
    renderImageComponent = renderDefaultImageComponent,
    renderTextComponent = renderDefaultTextComponent,
    renderIconComponent = renderDefaultIconComponent,
    width,
    className,
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
    };
    return renderImageComponent(imageProps);
  }, [image, activeImage, text, secondaryText, isHoverOnItem]);

  const TextComponent = renderTextComponent(isHoverOnItem, text, secondaryText);
  const IconComponent = renderIconComponent(isHoverOnItem, iconName, iconSize);

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

  return (
    <div
      className={containerClasses}
      onClick={onItemClick}
      onMouseEnter={() => setIsHoverOnItem(true)}
      onMouseLeave={() => setIsHoverOnItem(false)}
    >
      {ImageComponent}
      {TextComponent}
      {IconComponent}
    </div>
  );
};

QueryBarItemSingle.displayName = "QueryBarRegularItem";
