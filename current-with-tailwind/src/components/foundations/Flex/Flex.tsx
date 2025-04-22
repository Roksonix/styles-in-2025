import { forwardRef, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
type AlignContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
type Gap = number | string;

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  gap?: Gap;
  className?: string;
}

const mapFlexDirection: Record<FlexDirection, string> = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
};

const mapFlexWrap: Record<FlexWrap, string> = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
};

const mapJustifyContent: Record<JustifyContent, string> = {
  "flex-start": "justify-start",
  "flex-end": "justify-end",
  center: "justify-center",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly",
};

const mapAlignItems: Record<AlignItems, string> = {
  "flex-start": "items-start",
  "flex-end": "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

const mapAlignContent: Record<AlignContent, string> = {
  "flex-start": "content-start",
  "flex-end": "content-end",
  center: "content-center",
  "space-between": "content-between",
  "space-around": "content-around",
  stretch: "content-stretch",
};

const getGapClass = (gap: Gap | undefined): string => {
  if (gap === undefined) return "";
  if (typeof gap === "number") return `gap-${gap}`;
  return `gap-[${gap}]`;
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>(({
  inline = false,
  flexDirection = "row",
  flexWrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignContent = "stretch",
  gap,
  className,
  ...props
}, ref) => {
  const classes = twMerge(
    inline ? "inline-flex" : "flex",
    mapFlexDirection[flexDirection],
    mapFlexWrap[flexWrap],
    mapJustifyContent[justifyContent],
    mapAlignItems[alignItems],
    mapAlignContent[alignContent],
    getGapClass(gap),
    className
  );

  return (
    <div
      {...props}
      ref={ref}
      className={classes}
    />
  );
});

Flex.displayName = "Flex";
