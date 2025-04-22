import { type AllHTMLAttributes, type JSX, forwardRef, PropsWithChildren } from "react";

import styled from "styled-components";

import { setFontVariant } from "../../../styles";

import { type BoxBaseProps, type BoxStyledProps, isValidStyleProperty } from "./boxStyleProps";
import { calculateOffset, checkColorInPalette, getStylesFromProps } from "./utils";

type TagName = keyof JSX.IntrinsicElements;
type AllowedHTMLAttributes = Omit<AllHTMLAttributes<HTMLElement>, "width" | "height" | "className">;

const InnerBox = styled.div<BoxStyledProps>`
  ${(props: BoxStyledProps) => (props.$fontVariant ? setFontVariant(props.$fontVariant as any, props.$color) : "")};
  ${
    // @ts-expect-error improper types
    ({ $fontVariant, $color, ...props }) => getStylesFromProps(props)
  };
`;

export interface BoxProps extends BoxBaseProps, AllowedHTMLAttributes {
  /**
   * Optional override of the default element used by the component. Any valid tag name.
   * Note: Not all elements make sense and some elements may cause accessibility issues. Change this value with care.
   */
  as?: TagName;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "data-automation"?: string;
  /**
   * User action pseudo-class when the pointer is hovering the element.
   */
  whenHover?: BoxBaseProps;
  /**
   * User action pseudo-class the user activates the element.
   */
  whenActive?: BoxBaseProps;
  /**
   * User action pseudo-class when the element has focus.
   */
  whenFocus?: BoxBaseProps;
}

/**
 * The Box component is a base component for all other components.
 */
export const Box = forwardRef<HTMLElement, PropsWithChildren<BoxProps>>(
  (
    {
      margin,
      marginX,
      marginY,
      padding,
      paddingX,
      paddingY,
      color,
      borderColor,
      boxSizing = "border-box",
      whenHover,
      whenActive,
      whenFocus,
      ...boxProps
    },
    ref,
  ) => {
    const preparedProps = {
      margin: calculateOffset(
        margin || {
          x: marginX,
          y: marginY,
        },
      ),
      padding: calculateOffset(
        padding || {
          x: paddingX,
          y: paddingY,
        },
      ),
      color: color ? checkColorInPalette(color) : undefined,
      borderColor: borderColor ? checkColorInPalette(borderColor) : undefined,
      whenHover,
      whenActive,
      whenFocus,
      ...boxProps,
    };
    const innerProps = Object.fromEntries(
      Object.entries(preparedProps).map(([key, value]) =>
        isValidStyleProperty(key) || key.startsWith("when") ? [`$${key}`, value] : [key, value],
      ),
    );

    return (
      <InnerBox
        // @ts-expect-error improper types for refs
        ref={ref}
        $boxSizing={boxSizing}
        {...innerProps}
      />
    );
  },
);

Box.displayName = "Box";
