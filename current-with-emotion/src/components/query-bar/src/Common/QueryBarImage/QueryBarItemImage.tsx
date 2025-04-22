import { createColorBadgeStyles, createImageItemContainerStyles } from "./QueryBarItemImageStyles";
import { defaultRenderImage, IQueryBarItemImageProps } from "./QueryBarItemImageTypes";

export const QueryBarItemImage = (props: IQueryBarItemImageProps) => {
  const { borderColor, image, description, badgeColor, renderImage = defaultRenderImage, margin = "0" } = props;
  return (
    <div className={createImageItemContainerStyles({ borderColor, margin })}>
      {renderImage(image, description)}
      {badgeColor && <div className={createColorBadgeStyles({ color: badgeColor })} />}
    </div>
  );
};

QueryBarItemImage.displayName = "QueryBarItemImage";
