import styled from "styled-components";
import { colorsPalettes } from "@/styles";

export const ImageItemContainer = styled.span<{ borderColor: string; margin?: string }>`
  width: 32px;
  height: 32px;
  background-color: ${colorsPalettes.carbon["0"]};
  margin: ${({ margin }) => margin || "0"};
  border-radius: 8px;
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: border 0.2s ease-out;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
`;

export const ColorBadge = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  border-radius: 100%;
  position: absolute;
  bottom: -4px;
  right: -3px;
  border: 1px solid ${colorsPalettes.carbon[50]};
`;

export const ImageContainer = styled.img`
  max-width: 16px;
  max-height: 16px;
`;

export const LargeImageContainer = styled.img`
  max-width: 26px;
  max-height: 26px;
  border-radius: 6px;
`;

export const IconContainer = styled.span<{ iconColor: string }>`
  .SWReactIcons {
    display: flex;
    justify-content: center;
    align-items: center;
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
