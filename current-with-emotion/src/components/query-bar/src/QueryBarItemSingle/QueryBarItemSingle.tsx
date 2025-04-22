import { FC, useMemo, useState } from "react";

import {
  renderDefaultImageComponent,
  renderDefaultIconComponent,
  renderDefaultTextComponent,
} from "../Common/QueryBarItemHelper";
import { createItemContainerStyles, MULTI_LINE_ITEM_HEIGHT, SINGLE_LINE_ITEM_HEIGHT } from "../Common/QueryBarItemStyles";
import { IQueryBarItemProps } from "../Common/QueryBarItemTypes";

interface IQueryBarItemSingleProps extends IQueryBarItemProps {
  activeImage?: string;
  renderIconComponent?: typeof renderDefaultIconComponent;
  isDisabled?: boolean;
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
    isDisabled = false,
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

  const containerStyles = createItemContainerStyles({
    height: isMultiline ? MULTI_LINE_ITEM_HEIGHT : SINGLE_LINE_ITEM_HEIGHT,
    isDisabled,
    width,
  });

  return (
    <div
      className={`${containerStyles} ${className || ''}`}
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
