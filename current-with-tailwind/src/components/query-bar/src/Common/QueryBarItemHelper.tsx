import React from "react";
import { twMerge } from "tailwind-merge";

import { QueryBarItemImage } from "./QueryBarImage/QueryBarItemImage";
import { IQueryBarRenderImageProps } from "./QueryBarItemTypes";

export type IconName = "edit-icon" | "close-icon" | "add-icon";

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

  return (
    <QueryBarItemImage
      margin={`${margin || 0}px`}
      image={image}
      description={description}
      borderColor={isActive ? "border-blue-400" : "border-carbon-50"}
    />
  );
};

/**
 * Renders the app image component for a QueryBarItem.
 * Similar to the default image component but with a larger size.
 */
export const renderAppImageComponent = (imageProps: IQueryBarRenderImageProps) => {
  const { isActive, margin, image, description } = imageProps;

  return (
    <QueryBarItemImage
      margin={`${margin || 0}px`}
      image={image}
      description={description}
      borderColor={isActive ? "border-blue-400" : "border-carbon-50"}
      className="w-8 h-8"
    />
  );
};

/**
 * Renders the app compare image component for a QueryBarItem.
 * Similar to the app image component but with badge support.
 */
export const renderAppCompareImageComponent = (imageProps: IQueryBarRenderImageProps) => {
  const { isActive, margin, image, description, badgeColor } = imageProps;

  return (
    <QueryBarItemImage
      margin={`${margin || 0}px`}
      image={image}
      description={description}
      borderColor={isActive ? "border-blue-400" : "border-carbon-50"}
      badgeColor={badgeColor}
      className="w-8 h-8"
    />
  );
};

/**
 * Renders the icon image component for a QueryBarItem.
 * Used for rendering icons instead of images.
 */
export const renderIconImageComponent = (imageProps: IQueryBarRenderImageProps) => {
  const { isActive, margin, image, description } = imageProps;

  return (
    <QueryBarItemImage
      margin={`${margin || 0}px`}
      image={image}
      description={description}
      borderColor={isActive ? "border-blue-400" : "border-carbon-50"}
      className="w-6 h-6"
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
  const textColor = isActive ? "text-blue-400" : "text-carbon-500";

  return (
    <div className="flex flex-col justify-center items-start min-w-0 flex-auto leading-none">
      <span
        className={twMerge(
          "text-[13px] leading-4 font-medium",
          "max-w-full whitespace-nowrap overflow-hidden text-ellipsis",
          textColor,
          "transition-colors duration-200",
          reverseEllipsis && "direction-rtl [&>span]:unicode-bidi-plaintext"
        )}
        data-automation="query-bar-item-text"
      >
        <span>{primaryText}</span>
      </span>
      {secondaryText && (
        <span
          className={twMerge(
            "text-[10px]",
            "max-w-full",
            textColor,
            "transition-colors duration-200"
          )}
        >
          {secondaryText}
        </span>
      )}
    </div>
  );
};

/**
 * Renders an icon for the QueryBarItem component.
 * The icon component is the rightmost element in the item.
 */
export const renderIconComponent = (isActive: boolean, iconName: IconName, iconSize?: string) => {
  const iconColor = isActive ? "text-blue-400" : "text-carbon-200";

  return (
    <div className={twMerge(
      "flex flex-none",
      "pl-2",
      iconColor,
      "[&_.SWReactIcons]:flex [&_.SWReactIcons]:justify-center [&_.SWReactIcons]:items-center [&_.SWReactIcons]:flex-none",
      "[&_.SWReactIcons:hover]:cursor-pointer",
      "[&_.SWReactIcons_svg_path]:fill-current [&_.SWReactIcons_svg_path]:fill-opacity-100 [&_.SWReactIcons_svg_path]:transition-colors [&_.SWReactIcons_svg_path]:duration-200",
      "[&_.SWReactIcons_svg_defs_path]:fill-current",
      "[&_.SWReactIcons_svg_use]:fill-current",
      "[&_.SWReactIcons_svg_g]:stroke-current [&_.SWReactIcons_svg_g_mask]:fill-current"
    )}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={iconSize || "16px"} height={iconSize || "16px"}>
        <path className="fill-current fill-opacity-40" d="m8.394 19.75-5.481 1.308 1.239-5.551L14.758 4.9l4.243 4.243L8.394 19.749zM6.98 15.506l1.414 1.414 7.779-7.778-1.415-1.415zM19.708 1.364l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242 2.12-2.122a1 1 0 0 1 1.415 0"></path>
      </svg>
    </div>
  );
};
