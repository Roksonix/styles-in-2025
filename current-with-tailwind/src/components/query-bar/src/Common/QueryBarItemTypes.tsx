import { ReactNode } from "react";

import { IconName } from "@/components/icons";

import { renderTextComponent as renderDefaultTextComponent } from "../Common/QueryBarItemHelper";

export interface IQueryBarRenderImageProps {
  image: string;
  isActive: boolean;
  description?: string;
  margin?: number;
  badgeColor?: string;
}

export interface IQueryBarItemProps {
  /**
   * Item's primary text
   */
  text: string;

  /**
   * Item secondary text. appears one line below the primary text
   */
  secondaryText?: ReactNode;

  /**
   * Item image source. could be a url to an image
   * or icon name, depends on the render image function
   */
  image: string;

  onItemClick: () => void;

  /**
   * handles the rendering of the item's image component.
   * this prop is optional. if no renderImage function is provided,
   * the default renderImage will be used.
   */
  renderImageComponent?: (imageProps: IQueryBarRenderImageProps) => ReactNode;

  /**
   * handles the rendering of the item's text component.
   * this prop is optional. if no renderTextComponent function is provided,
   * the default renderTextComponent will be used.
   */
  renderTextComponent?: typeof renderDefaultTextComponent;

  /**
   * The name of the icon on the right
   */
  iconName?: IconName;

  /**
   * The size of the icon
   */
  iconSize?: string;

  /**
   * The width of the item
   */
  width?: string;

  /**
   * The class name of the item
   */
  className?: string;
}

export interface IQueryBarCompareItemProps extends IQueryBarItemProps {
  /**
   * Controls the color of the item badge. the item badge is a small
   * circle indicating what's the item's color in the comparison graphs.
   */
  badgeColor?: string;
  /**
   * Disables the hover state of the icon, icon border and the text.
   * Does not modify the hover state of the background and the close button.
   */
  isDisabled?: boolean;
  onButtonClick: (e?: Event) => void;

  activeImage?: string;

  /**
   * dont show the remove button to the right of the item
   */
  hideRemoveButton?: boolean;
}
