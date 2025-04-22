import { ReactNode } from "react";

import { IconName, SWReactIcons } from "@/components/icons";
import { colorsPalettes } from "@/styles";

import {
  createIconContainerStyles,
  imageContainerStyles,
  largeImageContainerStyles,
} from "./QueryBarItemImageStyles";

export interface IQueryBarItemImageProps {
  image: string;
  borderColor: string;
  margin?: string;
  description?: string;
  badgeColor?: string;
  renderImage?: (image: string, description?: string) => ReactNode;
}

export const defaultRenderImage = (image: string, description?: string) => {
  return (
    <img
      className={imageContainerStyles}
      src={image}
      alt={description}
    />
  );
};

export const renderLargeImage = (image: string, description?: string) => {
  return (
    <img
      className={largeImageContainerStyles}
      src={image}
      alt={description}
    />
  );
};

export const renderIconImage = (image: IconName) => {
  const iconStyles = createIconContainerStyles({ iconColor: colorsPalettes.carbon["50"] });
  return (
    <div className={iconStyles}>
      <SWReactIcons
        size="xs"
        iconName={image}
      />
    </div>
  );
};

export const renderActiveIconImage = (image: IconName) => {
  const iconStyles = createIconContainerStyles({ iconColor: colorsPalettes.blue[400] });
  return (
    <div className={iconStyles}>
      <SWReactIcons
        size="xs"
        iconName={image}
      />
    </div>
  );
};
