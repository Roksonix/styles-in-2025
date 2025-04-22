import { css } from "@emotion/css";
import { colorsPalettes } from "@/styles";

export const SINGLE_LINE_ITEM_HEIGHT = "32px";
export const MULTI_LINE_ITEM_HEIGHT = "40px";

interface ItemContainerProps {
  height: string;
  isDisabled?: boolean;
  width?: string | undefined;
  hideRemoveButton?: boolean;
}

export const createItemContainerStyles = ({ height, isDisabled, width, hideRemoveButton }: ItemContainerProps): string => css`
  height: ${height};
  background-color: ${colorsPalettes.carbon["25"]};
  border-radius: 8px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease-out;
  font-family: Roboto;
  max-width: 320px;
  min-width: 128px;
  flex: 1 1 auto;
  padding-right: 8px;

  ${width && `
    width: ${width};
    flex: 0 0 auto;
  `}
  ${!isDisabled && `
    &:hover {
      background-color: ${colorsPalettes.navigation.ACTIVE_TILE_BACKGROUND};
      cursor: pointer;
    }
  `}
`;

export const itemClickContainerStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  min-width: 0;
`;

export const textContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 0;
  flex: 1 1 auto;
  line-height: initial;
`;

interface PrimaryTextContainerProps {
  textColor: string;
  reverseEllipsis: boolean;
}

export const createPrimaryTextContainerStyles = ({ textColor, reverseEllipsis }: PrimaryTextContainerProps): string => css`
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  color: ${textColor};
  transition: color 0.2s ease-out;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${reverseEllipsis && `
    direction: rtl;
    span {
      unicode-bidi: plaintext;
    }
  `}
`;

interface SecondaryTextContainerProps {
  textColor: string;
}

export const createSecondaryTextContainerStyles = ({ textColor }: SecondaryTextContainerProps): string => css`
  color: ${textColor};
  font-size: 10px;
  transition: color 0.2s ease-out;
  max-width: 100%;
`;

interface IconContainerProps {
  iconColor: string;
  hideRemoveButton?: boolean;
}

export const createIconContainerStyles = ({ iconColor, hideRemoveButton }: IconContainerProps): string => css`
  display: flex;
  flex: 0 0 auto;
  ${!hideRemoveButton && `
    padding-left: 8px;
  `};
  .SWReactIcons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;

    &:hover {
      cursor: pointer;
    }

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
