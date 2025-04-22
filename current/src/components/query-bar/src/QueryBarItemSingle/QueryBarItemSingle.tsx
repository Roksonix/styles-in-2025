import { FC, useMemo, useState } from "react";

import {
  renderDefaultImageComponent,
  renderIconComponent as renderDefaultIconComponent,
  renderTextComponent as renderDefaultTextComponent,
} from "../Common/QueryBarItemHelper";
import { ItemContainer } from "../Common/QueryBarItemStyles";
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

  return (
    <ItemContainer
      height={isMultiline ? "40px" : "32px"}
      width={width}
      className={className}
      onClick={onItemClick}
      onMouseEnter={() => setIsHoverOnItem(true)}
      onMouseLeave={() => setIsHoverOnItem(false)}
    >
      {ImageComponent}
      {TextComponent}
      {IconComponent}
    </ItemContainer>
  );
};

QueryBarItemSingle.displayName = "QueryBarRegularItem";
