import { forwardRef } from "react";

import { type BoxProps, Box } from "../Box";

export type FlexProps = Omit<BoxProps, "display"> & { inline?: boolean };

export const Flex = forwardRef<HTMLElement, FlexProps>(({ inline, ...props }: FlexProps, ref) => (
  <Box
    {...props}
    ref={ref}
    display={inline ? "inline flex" : "block flex"}
  />
));

Flex.displayName = "Flex";
