import { ReactNode } from "react";

import { IconName, SWReactIcons } from "@/components/icons";
import { colorsPalettes } from "@/styles";

import { IconContainer, ImageContainer, LargeImageContainer } from "./QueryBarItemImageStyles";

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
    <ImageContainer
      src={image}
      alt={description}
    />
  );
};

export const renderLargeImage = (image: string, description?: string) => {
  return (
    <LargeImageContainer
      src={image}
      alt={description}
    />
  );
};

export const renderIconImage = (image: IconName) => {
  return (
    <IconContainer iconColor={colorsPalettes.carbon["50"]}>
      <SWReactIcons
        size="xs"
        iconName={image}
      />
    </IconContainer>
  );
};

export const renderActiveIconImage = (image: IconName) => {
  return (
    <IconContainer iconColor={colorsPalettes.blue[400]}>
      <SWReactIcons
        size="xs"
        iconName={image}
      />
    </IconContainer>
  );
};
