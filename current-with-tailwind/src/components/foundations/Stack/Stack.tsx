import { forwardRef, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Flex, type FlexProps } from "../Flex";

type StackBaseProps = Omit<FlexProps, "flexDirection">;

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  flexWrap?: StackBaseProps["flexWrap"];
  justifyContent?: StackBaseProps["justifyContent"];
  alignItems?: StackBaseProps["alignItems"];
  alignContent?: StackBaseProps["alignContent"];
  gap?: StackBaseProps["gap"];
  className?: string;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(({
  className,
  ...props
}, ref) => (
  <Flex
    {...props}
    ref={ref}
    flexDirection="column"
    className={twMerge(className)}
  />
));

Stack.displayName = "Stack";
