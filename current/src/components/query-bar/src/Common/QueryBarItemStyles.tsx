import styled, { css } from "styled-components";

import { colorsPalettes } from "@/styles";

export const SINGLE_LINE_ITEM_HEIGHT = "32px";
export const MULTI_LINE_ITEM_HEIGHT = "40px";

export const ItemContainer = styled.div<{
  height: string;
  isDisabled?: boolean;
  width?: string;
  hideRemoveButton?: boolean;
}>`
  height: ${({ height }) => height};
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

  ${({ width }) =>
    width &&
    css`
      width: ${width};
      flex: 0 0 auto;
    `}
  ${({ isDisabled }) =>
    !isDisabled &&
    css`
      &:hover {
        background-color: ${colorsPalettes.navigation.ACTIVE_TILE_BACKGROUND};
        cursor: pointer;
      }
    `}
`;

export const ItemClickContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  min-width: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 0;
  flex: 1 1 auto;
  line-height: initial;
`;

export const PrimaryTextContainer = styled.span<{ textColor: string; reverseEllipsis: boolean }>`
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  color: ${({ textColor }) => textColor};
  transition: color 0.2s ease-out;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ reverseEllipsis }) =>
    reverseEllipsis &&
    css`
      direction: rtl;
      span {
        unicode-bidi: plaintext;
      }
    `}
`;

export const SecondaryTextContainer = styled.span<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  font-size: 10px;
  transition: color 0.2s ease-out;
  max-width: 100%;
`;

export const IconContainer = styled.div<{ iconColor: string; hideRemoveButton?: boolean }>`
  display: flex;
  flex: 0 0 auto;
  ${({ hideRemoveButton }) =>
    !hideRemoveButton &&
    css`
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
        fill: ${({ iconColor }) => iconColor};
        fill-opacity: 1;
        transition: fill 0.2s ease-out;
      }

      defs {
        path {
          fill: ${({ iconColor }) => iconColor};
        }
      }

      use {
        fill: ${({ iconColor }) => iconColor};
      }

      g {
        stroke: ${({ iconColor }) => iconColor};
        mask {
          fill: ${({ iconColor }) => iconColor};
        }
      }
    }
  }
`;
