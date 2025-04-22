import { IconName } from "./QueryBarItemHelper";

export interface IQueryBarItemProps {
  text: string;
  secondaryText?: React.ReactNode;
  image: string;
  activeImage?: string;
  iconName?: IconName;
  iconSize?: string;
  onItemClick: () => void;
  renderImageComponent?: (props: IQueryBarRenderImageProps) => JSX.Element;
  renderTextComponent?: (isActive: boolean, text: string, secondaryText?: React.ReactNode) => JSX.Element;
  renderIconComponent?: (isActive: boolean, iconName: IconName, iconSize?: string) => JSX.Element;
  width?: string;
  className?: string;
}

export interface IQueryBarRenderImageProps {
  image: string;
  text?: string;
  isActive: boolean;
  margin?: number;
  description?: string;
  badgeColor?: string;
} 