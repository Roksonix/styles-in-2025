import type * as CSS from "csstype";

import type { FontVariant } from "@/styles";

interface TypesRegistry extends CSS.Properties {
  color: string;
  borderColor: string;
  fontVariant: FontVariant;
  marginX: CSS.Property.MarginLeft;
  marginY: CSS.Property.MarginTop;
  paddingX: CSS.Property.PaddingLeft;
  paddingY: CSS.Property.PaddingTop;
}

// List of supported style properties
const styleProperties = [
  // Display
  "display",

  // Flex
  "flexDirection",
  "flexWrap",
  "justifyContent",
  "alignContent",
  "alignItems",
  "gap",
  "columnGap",
  "rowGap",

  // Flex Child
  "alignSelf",
  "flexGrow",
  "flexShrink",
  "flex",

  // Position
  "position",
  "right",
  "top",
  "bottom",
  "left",
  "zIndex",

  // UI
  "cursor",

  // Box Sizing
  "width",
  "height",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "boxSizing",
  "overflow",
  "overflowX",
  "overflowY",
  "margin",
  "marginX",
  "marginY",
  "padding",
  "paddingX",
  "paddingY",

  // Text
  "fontVariant",
  "lineHeight",
  "color",

  // Miscellaneous
  "background",
  "boxShadow",
  "border",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "borderStyle",
  "borderColor",
  "borderRadius",

  // Transition
  "transition",
] as const;

type StylePropertiesKey = (typeof styleProperties)[number];

export type BoxBaseProps = {
  [K in StylePropertiesKey]?: TypesRegistry[K];
};

type PrefixKeys<T> = keyof T extends string ? { [key in keyof T as `$${key}`]: T[key] } : never;

export type BoxStyledProps = PrefixKeys<BoxBaseProps> & {
  $hover?: BoxBaseProps;
  $active?: BoxBaseProps;
  $focus?: BoxBaseProps;
};

const stylePropertiesSet = new Set(styleProperties);

export const isValidStyleProperty = (key: string): key is StylePropertiesKey => {
  // @ts-expect-error It's a well-known TS behavior when it doesn't allow to pass any string to the has method
  return stylePropertiesSet.has(key);
};
