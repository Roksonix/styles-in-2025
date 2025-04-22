import { ColorBadge, ImageItemContainer } from "./QueryBarItemImageStyles";
import { defaultRenderImage, IQueryBarItemImageProps } from "./QueryBarItemImageTypes";

export const QueryBarItemImage = (props: IQueryBarItemImageProps) => {
  const { borderColor, image, description, badgeColor, renderImage = defaultRenderImage, margin = "0" } = props;
  return (
    <ImageItemContainer
      borderColor={borderColor}
      margin={margin}
    >
      {renderImage(image, description)}
      {badgeColor && <ColorBadge color={badgeColor} />}
    </ImageItemContainer>
  );
};

QueryBarItemImage.displayName = "QueryBarItemImage";
