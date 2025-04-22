import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Flex.module.css";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  gap?: CSSProperties['gap'];
  flex?: CSSProperties['flex'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  minWidth?: CSSProperties['minWidth'];
  minHeight?: CSSProperties['minHeight'];
  maxWidth?: CSSProperties['maxWidth'];
  maxHeight?: CSSProperties['maxHeight'];
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(({
  className,
  style,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  padding,
  margin,
  ...props
}, ref) => {
  const cssVariables = {
    '--flex-direction': flexDirection,
    '--flex-wrap': flexWrap,
    '--justify-content': justifyContent,
    '--align-items': alignItems,
    '--align-content': alignContent,
    '--gap': gap,
    '--flex': flex,
    '--flex-grow': flexGrow,
    '--flex-shrink': flexShrink,
    '--flex-basis': flexBasis,
    '--width': width,
    '--height': height,
    '--min-width': minWidth,
    '--min-height': minHeight,
    '--max-width': maxWidth,
    '--max-height': maxHeight,
    '--padding': padding,
    '--margin': margin,
  };

  return (
    <div
      {...props}
      ref={ref}
      className={classNames(styles.flex, className)}
      style={{
        ...cssVariables,
        ...style,
      } as CSSProperties}
    />
  );
});

Flex.displayName = "Flex";
