import type * as CSS from "csstype";
import { colorsPalettes } from "../../../styles";

type Offset = CSS.Property.Margin | CSS.Property.Padding;

type CombinedOffset = {
  x?: Offset;
  y?: Offset;
};

const isStringValue = (value: Offset | CombinedOffset): value is string => value.constructor.name === "String";

export const calculateOffset = (props: Offset | CombinedOffset) => {
  if (!props) {
    return "0";
  }
  if (isStringValue(props)) {
    return props;
  }

  const offsetY = props.y ?? "0";
  const offsetX = props.x ?? "0";

  if (offsetY === offsetX) {
    return offsetY;
  }

  return `${offsetY} ${offsetX}`;
};

export const getStylesFromProps = (props: Record<string, unknown>) => {
  return Object.fromEntries(
    Object.entries(props)
      .filter(([key]) => key.startsWith("$"))
      .map(([key, value]) => {
        // Handles the case when we transform user action pseudo-classes
        if (key.startsWith("$when")) {
          // Trims the $when prefix from the key and leaves only the pseudo-class name, e.g. "$whenHover" => "hover"
          const userAction = key.substring(5).toLowerCase();
          return [`&:${userAction}`, value];
        }
        return [key.substring(1), value];
      }),
  );
};

const colorValuesSet: Set<string> = new Set(
  Object.values(colorsPalettes).reduce((acc: string[], palette) => {
    acc.push(...Object.values(palette));
    return acc;
  }, []),
);

export const checkColorInPalette = (color: string) => {
  if (!colorValuesSet.has(color)) {
    console.error(`${color} is not in the palette. Please use a color from the palette.`);
    return undefined;
  }
  return color;
};
