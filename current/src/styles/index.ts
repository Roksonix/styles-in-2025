import {
  blue,
  bluegrey,
  midnight,
  mint,
  orange,
  red,
  pink,
  purple,
  carbon,
  green,
  sky,
  teal,
  solutions,
  torquoise,
  navigation,
} from './colorsPalettes';

type FontVariant = 'body1' | 'body2' | 'h1' | 'h2';

type VariantStyle = {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
};

export const colorsPalettes = {
  blue,
  bluegrey,
  midnight,
  mint,
  orange,
  red,
  pink,
  purple,
  carbon,
  green,
  sky,
  teal,
  solutions,
  torquoise,
  navigation,
};

export const setFontVariant = (variant: FontVariant, color?: string) => {
  const variants: Record<FontVariant, VariantStyle> = {
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    h1: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
    }
  };

  const variantStyles = variants[variant] || variants.body1;
  return {
    ...variantStyles,
    color: color || '#333333',
  };
}; 