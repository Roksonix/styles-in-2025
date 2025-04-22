import { FC, SyntheticEvent, useMemo, useState } from "react";

import { SWReactIcons } from "@/components/icons";
import { colorsPalettes } from "@/styles";

import {
  renderCompareImageComponent,
  renderDefaultTextComponent,
} from "../Common/QueryBarItemHelper";
import {
  createIconContainerStyles,
  createItemContainerStyles,
  itemClickContainerStyles,
  MULTI_LINE_ITEM_HEIGHT,
  SINGLE_LINE_ITEM_HEIGHT,
} from "../Common/QueryBarItemStyles";
import { IQueryBarCompareItemProps } from "../Common/QueryBarItemTypes";

const getButtonColor = (isHoverOnItem: boolean, isHoverOnButton: boolean) => {
  if (isHoverOnButton) {
    return colorsPalettes.blue[400];
  }

  if (isHoverOnItem) {
    return colorsPalettes.carbon[400];
  }

  return colorsPalettes.carbon[200];
};

export const QueryBarItemCompare: FC<IQueryBarCompareItemProps> = (props) => {
  const {
    image,
    activeImage,
    text,
    secondaryText,
    onItemClick,
    badgeColor,
    onButtonClick,
    renderImageComponent = renderCompareImageComponent,
    renderTextComponent = renderDefaultTextComponent,
    isDisabled = false,
    hideRemoveButton = false,
    width,
    className,
  } = props;
  const [isHoverOnItem, setIsHoverOnItem] = useState(false);
  const [isHoverOnButton, setIsHoverOnButton] = useState(false);
  const isMultiline = !!secondaryText;
  const isActive = !isDisabled && isHoverOnItem && !isHoverOnButton;

  const ImageComponent = renderImageComponent({
    image: isActive && activeImage ? activeImage : image,
    isActive,
    badgeColor,
    description: text,
    margin: isMultiline ? 4 : 0,
  });

  const TextComponent = useMemo(() => {
    return renderTextComponent(isActive, text, secondaryText);
  }, [isActive, text, secondaryText]);

  const renderButtonComponent = () => {
    const iconColor = getButtonColor(isHoverOnItem, isHoverOnButton);
    const buttonStyles = createIconContainerStyles({ iconColor, hideRemoveButton });

    return (
      <div
        className={buttonStyles}
        onMouseEnter={() => setIsHoverOnButton(true)}
        onMouseLeave={() => setIsHoverOnButton(false)}
        onClick={(e: SyntheticEvent) => onButtonClick()}
      >
        <SWReactIcons
          size="xs"
          iconName="clear-circle"
        />
      </div>
    );
  };

  const containerStyles = createItemContainerStyles({
    height: isMultiline ? MULTI_LINE_ITEM_HEIGHT : SINGLE_LINE_ITEM_HEIGHT,
    isDisabled,
    width,
    hideRemoveButton,
  });

  return (
    <div
      className={`${containerStyles} ${className || ''}`}
      onMouseEnter={() => setIsHoverOnItem(true)}
      onMouseLeave={() => setIsHoverOnItem(false)}
    >
      <div className={itemClickContainerStyles} onClick={onItemClick}>
        {ImageComponent}
        {TextComponent}
      </div>

      {!hideRemoveButton ? renderButtonComponent() : null}
    </div>
  );
};

QueryBarItemCompare.displayName = "QueryBarCompareItem";
