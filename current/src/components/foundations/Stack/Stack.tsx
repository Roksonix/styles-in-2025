import { forwardRef } from "react";

import { Flex, FlexProps } from "../Flex";

export type StackProps = Omit<FlexProps, "flexDirection">;

export const Stack = forwardRef<HTMLElement, StackProps>((props: StackProps, ref) => (
  <Flex
    {...props}
    ref={ref}
    flexDirection="column"
  />
));
