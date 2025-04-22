import React, { FC } from "react";

import { renderTextComponent as renderDefaultTextComponent } from "../Common/QueryBarItemHelper";
import { IQueryBarRenderImageProps } from "../Common/QueryBarItemTypes";
import { QueryBarItemCompare } from "../QueryBarItemCompare/QueryBarItemCompare";
import { QueryBarItemSingle } from "../QueryBarItemSingle/QueryBarItemSingle";

interface IQueryBarWebsiteItemProps {
  text: string;
  image: string;
  isCompare: boolean;
  onItemClick: () => void;
  secondaryText?: React.ReactNode;
  badgeColor?: string;
  width?: string;
  className?: string;
  isDisabled?: boolean;
  hideRemoveButton?: boolean;
  textRenderFunction?: typeof renderDefaultTextComponent;
  onButtonClick?: () => void;
  renderImageComponent?: (imageProps: IQueryBarRenderImageProps) => React.ReactNode;
}

export const QueryBarWebsiteItem: FC<IQueryBarWebsiteItemProps> = (props) => {
  const {
    text,
    secondaryText,
    image,
    onItemClick,
    isCompare,
    badgeColor,
    onButtonClick,
    isDisabled,
    renderImageComponent,
    textRenderFunction,
    width,
    hideRemoveButton = false,
    className,
  } = props;

  return isCompare ? (
    <QueryBarItemCompare
      text={text}
      secondaryText={secondaryText}
      image={image}
      onItemClick={onItemClick}
      // @ts-expect-error
      onButtonClick={onButtonClick}
      badgeColor={badgeColor}
      isDisabled={isDisabled}
      hideRemoveButton={hideRemoveButton}
      renderImageComponent={renderImageComponent}
      renderTextComponent={textRenderFunction}
      width={width}
      className={className}
    />
  ) : (
    <QueryBarItemSingle
      text={text}
      secondaryText={secondaryText}
      image={image}
      onItemClick={onItemClick}
      renderImageComponent={renderImageComponent}
      renderTextComponent={textRenderFunction}
      width={width}
      className={className}
    />
  );
};
