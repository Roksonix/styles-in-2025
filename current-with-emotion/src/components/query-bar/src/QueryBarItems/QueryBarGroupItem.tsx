import * as React from "react";

import { IconName } from "@/components/icons";

import { renderIconImageComponent } from "../Common/QueryBarItemHelper";
import { QueryBarItemCompare } from "../QueryBarItemCompare/QueryBarItemCompare";
import { QueryBarItemSingle } from "../QueryBarItemSingle/QueryBarItemSingle";

interface IQueryBarGroupItemProps {
  text: string;
  icon: string;
  activeIcon?: IconName;
  iconName?: IconName;
  iconSize?: string;
  secondaryText: React.ReactNode;
  onItemClick: () => void;
  isCompare?: boolean;
  onButtonClick?: () => void;
  badgeColor?: string;
  hideRemoveButton?: boolean;
}

export const QueryBarGroupItem = (props: IQueryBarGroupItemProps) => {
  const {
    text,
    secondaryText,
    icon,
    activeIcon,
    onItemClick,
    iconName,
    iconSize,
    onButtonClick,
    isCompare = false,
    badgeColor,
    hideRemoveButton = false,
  } = props;

  return isCompare ? (
    <QueryBarItemCompare
      text={text}
      secondaryText={secondaryText}
      image={icon}
      activeImage={activeIcon ?? "edit-icon"}
      iconName={iconName}
      badgeColor={badgeColor}
      onItemClick={onItemClick}
      // @ts-ignore
      onButtonClick={onButtonClick}
      renderImageComponent={renderIconImageComponent}
      hideRemoveButton={hideRemoveButton}
    />
  ) : (
    <QueryBarItemSingle
      text={text}
      secondaryText={secondaryText}
      image={icon}
      activeImage={activeIcon}
      iconName={iconName}
      iconSize={iconSize}
      onItemClick={onItemClick}
      renderImageComponent={renderIconImageComponent}
    />
  );
};
