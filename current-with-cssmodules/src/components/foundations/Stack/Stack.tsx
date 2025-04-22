import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Stack.module.css";

export interface StackProps extends Omit<HTMLAttributes<HTMLDivElement>, "width" | "height"> {
  gap?: CSSProperties['gap'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  minWidth?: CSSProperties['minWidth'];
  minHeight?: CSSProperties['minHeight'];
  maxWidth?: CSSProperties['maxWidth'];
  maxHeight?: CSSProperties['maxHeight'];
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(({
  className,
  style,
  gap,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  padding,
  margin,
  alignItems,
  justifyContent,
  ...props
}, ref) => {
  const cssVariables = {
    '--gap': gap,
    '--width': width,
    '--height': height,
    '--min-width': minWidth,
    '--min-height': minHeight,
    '--max-width': maxWidth,
    '--max-height': maxHeight,
    '--padding': padding,
    '--margin': margin,
    '--align-items': alignItems,
    '--justify-content': justifyContent,
  };

  return (
    <div
      {...props}
      ref={ref}
      className={classNames(styles.stack, className)}
      style={{
        ...cssVariables,
        ...style,
      } as CSSProperties}
    />
  );
});

Stack.displayName = "Stack";
