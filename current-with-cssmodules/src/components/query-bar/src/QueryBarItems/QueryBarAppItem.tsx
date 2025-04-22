import { FC } from "react";

import { renderAppCompareImageComponent, renderAppImageComponent } from "../Common/QueryBarItemHelper";
import { QueryBarItemCompare } from "../QueryBarItemCompare/QueryBarItemCompare";
import { QueryBarItemSingle } from "../QueryBarItemSingle/QueryBarItemSingle";

interface IQueryBarAppItemProps {
  text: string;
  secondaryText: string;
  image: string;
  onItemClick: () => void;
  isCompare: boolean;
  badgeColor?: string;
  onButtonClick?: () => void;
}

export const QueryBarAppItem: FC<IQueryBarAppItemProps> = (props) => {
  const { text, secondaryText, image, onItemClick, isCompare, badgeColor, onButtonClick } = props;

  return isCompare ? (
    <QueryBarItemCompare
      text={text}
      secondaryText={secondaryText}
      image={image}
      onItemClick={onItemClick}
      onButtonClick={onButtonClick}
      badgeColor={badgeColor}
      renderImageComponent={renderAppCompareImageComponent}
    />
  ) : (
    <QueryBarItemSingle
      text={text}
      secondaryText={secondaryText}
      image={image}
      onItemClick={onItemClick}
      renderImageComponent={renderAppImageComponent}
    />
  );
};
