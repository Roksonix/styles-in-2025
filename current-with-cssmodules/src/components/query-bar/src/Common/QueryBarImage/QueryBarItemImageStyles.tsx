import React from 'react';
import classNames from 'classnames';
import styles from './QueryBarItemImage.module.css';

interface ImageItemContainerProps extends React.HTMLProps<HTMLSpanElement> {
  borderColor: string;
  margin?: string;
}

export const ImageItemContainer: React.FC<ImageItemContainerProps> = ({
  borderColor,
  margin,
  className,
  style,
  ...props
}) => (
  <span
    className={classNames(styles.imageItemContainer, className)}
    style={{
      border: `1px solid ${borderColor}`,
      margin: margin || '0',
      ...style,
    }}
    {...props}
  />
);

interface ColorBadgeProps extends React.HTMLProps<HTMLDivElement> {
  color: string;
}

export const ColorBadge: React.FC<ColorBadgeProps> = ({
  color,
  className,
  style,
  ...props
}) => (
  <div
    className={classNames(styles.colorBadge, className)}
    style={{ backgroundColor: color, ...style }}
    {...props}
  />
);

export const ImageContainer: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  ...props
}) => (
  <img
    className={classNames(styles.imageContainer, className)}
    {...props}
  />
);

export const LargeImageContainer: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  ...props
}) => (
  <img
    className={classNames(styles.largeImageContainer, className)}
    {...props}
  />
);

interface IconContainerProps extends React.HTMLProps<HTMLSpanElement> {
  iconColor: string;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  iconColor,
  className,
  style,
  ...props
}) => (
  <span
    className={classNames(styles.iconContainer, className)}
    style={{
      '--icon-color': iconColor,
      ...style,
    } as React.CSSProperties}
    {...props}
  />
);
