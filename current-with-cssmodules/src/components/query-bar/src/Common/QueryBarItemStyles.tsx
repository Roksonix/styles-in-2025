import React from 'react';
import classNames from 'classnames';
import styles from './QueryBarItem.module.css';

export const SINGLE_LINE_ITEM_HEIGHT = "32px";
export const MULTI_LINE_ITEM_HEIGHT = "40px";

interface ItemContainerProps {
  height: string;
  isDisabled?: boolean;
  width?: string;
  hideRemoveButton?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const ItemContainer: React.FC<ItemContainerProps> = ({
  height,
  isDisabled,
  width,
  hideRemoveButton,
  className,
  children,
  style,
  ...props
}) => (
  <div
    className={classNames(styles.itemContainer, {
      [styles.disabled]: isDisabled,
      [styles.fixedWidth]: width,
    }, className)}
    style={{ height, width, ...style }}
    {...props}
  >
    {children}
  </div>
);

export const ItemClickContainer: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={classNames(styles.itemClickContainer, className)} {...props} />
);

export const TextContainer: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={classNames(styles.textContainer, className)} {...props} />
);

interface PrimaryTextContainerProps extends React.HTMLProps<HTMLSpanElement> {
  textColor: string;
  reverseEllipsis: boolean;
}

export const PrimaryTextContainer: React.FC<PrimaryTextContainerProps> = ({
  textColor,
  reverseEllipsis,
  className,
  style,
  ...props
}) => (
  <span
    className={classNames(styles.primaryText, {
      [styles.reverseEllipsis]: reverseEllipsis,
    }, className)}
    style={{ color: textColor, ...style }}
    {...props}
  />
);

interface SecondaryTextContainerProps extends React.HTMLProps<HTMLSpanElement> {
  textColor: string;
}

export const SecondaryTextContainer: React.FC<SecondaryTextContainerProps> = ({
  textColor,
  className,
  style,
  ...props
}) => (
  <span
    className={classNames(styles.secondaryText, className)}
    style={{ color: textColor, ...style }}
    {...props}
  />
);

interface IconContainerProps extends React.HTMLProps<HTMLDivElement> {
  iconColor: string;
  hideRemoveButton?: boolean;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  iconColor,
  hideRemoveButton,
  className,
  style,
  ...props
}) => (
  <div
    className={classNames(styles.iconContainer, {
      [styles.hideRemoveButton]: hideRemoveButton,
    }, className)}
    style={{
      '--icon-color': iconColor,
      ...style,
    } as React.CSSProperties}
    {...props}
  />
);
