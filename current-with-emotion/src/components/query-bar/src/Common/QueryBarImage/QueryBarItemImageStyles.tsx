import { css } from "@emotion/css";
import { colorsPalettes } from "@/styles";

interface ImageItemContainerProps {
  borderColor: string;
  margin?: string;
}

export const createImageItemContainerStyles = ({ borderColor, margin }: ImageItemContainerProps): string => css`
  width: 32px;
  height: 32px;
  background-color: ${colorsPalettes.carbon["0"]};
  margin: ${margin || "0"};
  border-radius: 8px;
  border: 1px solid ${borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: border 0.2s ease-out;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
`;

interface ColorBadgeProps {
  color: string;
}

export const createColorBadgeStyles = ({ color }: ColorBadgeProps): string => css`
  width: 10px;
  height: 10px;
  background-color: ${color};
  border-radius: 100%;
  position: absolute;
  bottom: -4px;
  right: -3px;
  border: 1px solid ${colorsPalettes.carbon[50]};
`;

export const imageContainerStyles = css`
  max-width: 16px;
  max-height: 16px;
`;

export const largeImageContainerStyles = css`
  max-width: 26px;
  max-height: 26px;
  border-radius: 6px;
`;

interface IconContainerProps {
  iconColor: string;
}

export const createIconContainerStyles = ({ iconColor }: IconContainerProps): string => css`
  .SWReactIcons {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      path {
        fill: ${iconColor};
        fill-opacity: 1;
        transition: fill 0.2s ease-out;
      }

      defs {
        path {
          fill: ${iconColor};
        }
      }

      use {
        fill: ${iconColor};
      }

      g {
        stroke: ${iconColor};
        mask {
          fill: ${iconColor};
        }
      }
    }
  }
`;
