import { FC, SyntheticEvent, useMemo, useState } from "react";

import { SWReactIcons } from "@/components/icons";
import { colorsPalettes } from "@/styles";

import {
  renderCompareImageComponent,
  renderTextComponent as renderDefaultTextComponent,
} from "../Common/QueryBarItemHelper";
import {
  IconContainer,
  ItemClickContainer,
  ItemContainer,
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
    return (
      <IconContainer
        iconColor={getButtonColor(isHoverOnItem, isHoverOnButton)}
        onMouseEnter={() => setIsHoverOnButton(true)}
        onMouseLeave={() => setIsHoverOnButton(false)}
        onClick={(e: SyntheticEvent) => onButtonClick()}
        hideRemoveButton={hideRemoveButton}
      >
        <SWReactIcons
          size="xs"
          iconName={"clear-circle"}
        />
      </IconContainer>
    );
  };

  return (
    <ItemContainer
      height={isMultiline ? MULTI_LINE_ITEM_HEIGHT : SINGLE_LINE_ITEM_HEIGHT}
      onMouseEnter={() => setIsHoverOnItem(true)}
      onMouseLeave={() => setIsHoverOnItem(false)}
      width={width}
      isDisabled={isDisabled}
      hideRemoveButton={hideRemoveButton}
      className={className}
    >
      <ItemClickContainer onClick={onItemClick}>
        {ImageComponent}
        {TextComponent}
      </ItemClickContainer>

      {!hideRemoveButton ? renderButtonComponent() : null}
    </ItemContainer>
  );
};

QueryBarItemCompare.displayName = "QueryBarCompareItem";
