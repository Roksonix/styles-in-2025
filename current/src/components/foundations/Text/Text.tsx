import { forwardRef } from "react";

import { type BoxProps, Box } from "../Box";

export type TextProps = Omit<BoxProps, "fontVariant"> & Required<Pick<BoxProps, "fontVariant">>;

export const Text = forwardRef<HTMLElement, TextProps>(({ as = "span", ...boxProps }: TextProps, ref) => (
  <Box
    {...boxProps}
    ref={ref}
    as={as}
  />
));

Text.displayName = "Text";
