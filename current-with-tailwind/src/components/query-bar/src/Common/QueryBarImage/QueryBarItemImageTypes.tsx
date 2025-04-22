import { ReactNode } from "react";

import { IconName, SWReactIcons } from "@/components/icons";

export interface IQueryBarItemImageProps {
  image: string;
  borderColor: string;
  margin?: string;
  description?: string;
  badgeColor?: string;
  renderImage?: (image: string, description?: string) => ReactNode;
  className?: string;
}

export const defaultRenderImage = (image: string, description?: string) => {
  return (
    <img
      className="w-6 h-6 rounded-sm border"
      src={image}
      alt={description}
    />
  );
};

export const renderLargeImage = (image: string, description?: string) => {
  return (
    <img
      className="w-8 h-8 rounded-sm border"
      src={image}
      alt={description}
    />
  );
};

export const renderIconImage = (image: IconName) => {
  return (
    <div className="w-6 h-6 flex items-center justify-center text-carbon-50">
      <SWReactIcons
        size="xs"
        iconName={image}
      />
    </div>
  );
};

export const renderActiveIconImage = (image: IconName) => {
  return (
    <div className="w-6 h-6 flex items-center justify-center text-blue-400">
      <SWReactIcons
        size="xs"
        iconName={image}
      />
    </div>
  );
};
