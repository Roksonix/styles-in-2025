import React from "react";

import { IconName } from "@/components/icons";
import { colorsPalettes } from "@/styles";

import { QueryBarItemImage } from "./QueryBarImage/QueryBarItemImage";
import {
  defaultRenderImage,
  renderActiveIconImage,
  renderIconImage,
  renderLargeImage,
} from "./QueryBarImage/QueryBarItemImageTypes";
import { IconContainer, PrimaryTextContainer, SecondaryTextContainer, TextContainer } from "./QueryBarItemStyles";
import { IQueryBarRenderImageProps } from "./QueryBarItemTypes";

/**
 * Renders the default image component for a QueryBarItem.
 * The QueryBarItem image component is the leftmost element in the item.
 * @param image the image url to render
 * @param isActive specifies if the queryBarItem is currently hovered by the user.
 * @param description adds alt text to the image element
 * @param margin specifiy margin for the image element
 */
export const renderDefaultImageComponent = (imageProps: IQueryBarRenderImageProps) => {
  const { isActive, margin, image, description } = imageProps;

  const borderColor = isActive ? colorsPalettes.blue[400] : colorsPalettes.carbon[50];

  return (
    <QueryBarItemImage
      margin={`${margin || 0}px`}
      image={image}
      description={description}
      borderColor={borderColor}
    />
  );
};

/**
 * Uses a SimilarWeb's icons to render an image component for a QueryBarItem.
 * The QueryBarItem image component is the leftmost element in the item.
 * @param icon the icon name
 * @param isActive specifies if the queryBarItem is currently hovered by the user.
 * @param description adds alt text to the image element
 * @param margin specifiy margin for the image element
 */
export const renderIconImageComponent = (iconProps: IQueryBarRenderImageProps) => {
  const { isActive, image: icon, margin, badgeColor } = iconProps;

  const borderColor = isActive ? colorsPalettes.blue[400] : colorsPalettes.carbon[50];

  const imageRenderer = isActive ? renderActiveIconImage : renderIconImage;

  return (
    <QueryBarItemImage
      image={icon}
      margin={`${margin || 0}px`}
      borderColor={borderColor}
      badgeColor={badgeColor}
      renderImage={imageRenderer}
    />
  );
};

export const renderAppImageComponent = (imageProps: IQueryBarRenderImageProps) => {
  const { margin, description, badgeColor, image } = imageProps;

  return (
    <QueryBarItemImage
      margin={`${margin || 0}px`}
      image={image}
      description={description}
      borderColor={colorsPalettes.carbon["50"]}
      renderImage={renderLargeImage}
      badgeColor={badgeColor}
    />
  );
};

export const renderAppCompareImageComponent = (imageProps: IQueryBarRenderImageProps) => {
  const { isActive, image, margin, description, badgeColor } = imageProps;

  // In case the item is currently active - we want to render an edit icon as the image
  // otherwise - we want to render the default image (regular image).
  const imageRenderer = isActive ? renderActiveIconImage : renderLargeImage;
  const imageName = isActive ? "edit-icon" : image;

  return (
    <QueryBarItemImage
      margin={`${margin || 0}px`}
      image={imageName}
      description={description}
      borderColor={colorsPalettes.carbon["50"]}
      renderImage={imageRenderer}
      badgeColor={badgeColor}
    />
  );
};

/**
 * Renders an image for the QueryBarItemCompare component.
 * The QueryBarItem image component is the leftmost element in the item.
 * @param image the image url to render
 * @param isActive specifies if the queryBarItem is currently hovered by the user.
 * @param description adds alt text to the image element
 * @param margin specifiy margin for the image element
 * @param badgeColor specifies the badge color for the image.
 */
export const renderCompareImageComponent = (imageProps: IQueryBarRenderImageProps) => {
  const { isActive, margin, description, image, badgeColor } = imageProps;

  // In case the item is currently active - we want to render an edit icon as the image
  // otherwise - we want to render the default image (regular image).
  const imageRenderer = isActive ? renderActiveIconImage : defaultRenderImage;
  const imageName = isActive ? "edit-icon" : image;
  const imageBorder = isActive ? colorsPalettes.blue[400] : colorsPalettes.carbon[50];

  return (
    <QueryBarItemImage
      margin={`${margin || 0}px`}
      image={imageName}
      description={description}
      borderColor={imageBorder}
      badgeColor={badgeColor}
      renderImage={imageRenderer}
    />
  );
};

/**
 * Renders text for a QueryBarItem component. the text could optionally contain a second line
 * (for secondary text)
 */
export const renderTextComponent = (
  isActive: boolean,
  primaryText: string,
  secondaryText?: React.ReactNode,
  reverseEllipsis = false,
) => {
  const textColor = isActive ? colorsPalettes.blue[400] : colorsPalettes.carbon[500];

  const hasSecondaryText = !!secondaryText;

  return (
    <TextContainer>
      <PrimaryTextContainer
        reverseEllipsis={reverseEllipsis}
        textColor={textColor}
        data-automation="query-bar-item-text"
      >
        <span>{primaryText}</span>
      </PrimaryTextContainer>
      {hasSecondaryText ? <SecondaryTextContainer textColor={textColor}>{secondaryText}</SecondaryTextContainer> : null}
    </TextContainer>
  );
};

/**
 * Renders an icon for the QueryBarItem component.
 * The icon component is the rightmost element in the item.
 */
export const renderIconComponent = (isActive: boolean, iconName: IconName, iconSize?: string) => {
  const iconColor = isActive ? colorsPalettes.blue[400] : colorsPalettes.carbon[200];

  return (
    <IconContainer iconColor={iconColor}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"><path fill={iconColor} fill-opacity=".4" d="m8.394 19.75-5.481 1.308 1.239-5.551L14.758 4.9l4.243 4.243L8.394 19.749zM6.98 15.506l1.414 1.414 7.779-7.778-1.415-1.415zM19.708 1.364l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242 2.12-2.122a1 1 0 0 1 1.415 0"></path></svg>
    </IconContainer>
  );
};
