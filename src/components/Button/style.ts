import styled, { css } from "styled-components";

import { IButtonStyles } from "@/interfaces";
import { theme } from "@styles/theme";

const buttonColors = {
  default: theme.colors.orange_300,
  brown: theme.colors.brown_900,
  red: theme.colors.red_500,
  green: theme.colors.green_500,
  white: theme.colors.white,
  none: "transparent",
};

const buttonSizes = {
  width: {
    sm: "10rem",
    md: "14rem",
    lg: "20rem",
  },
  height: {
    sm: "3rem",
    md: "6rem",
    lg: "9rem",
  },
};

export const Container = styled.button<IButtonStyles>`
  ${({
    theme,
    background,
    color,
    fullWidth,
    widthSize,
    iconLeft,
    iconRight,
    iconCenter,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${fullWidth ? "100%" : buttonSizes.width[widthSize]};
    padding: ${theme.spacing[4]} ${theme.spacing[8]};
    font-size: ${theme.fonts.size.md};
    font-weight: ${theme.fonts.weight.semibold};
    color: ${buttonColors[color]};
    background: ${buttonColors[background]};
    border: ${theme.borderRadius.none};
    border-radius: ${theme.borderRadius.lg};
    transition: filter 200ms;

    ${iconLeft &&
    css`
      justify-content: flex-start;
    `}

    ${iconRight &&
    css`
      justify-content: flex-end;
    `}

    ${iconCenter &&
    css`
      margin-inline: auto;
    `}

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;

      &:first-child {
        margin-right: ${theme.spacing[8]};
      }

      &:last-child {
        margin-left: ${theme.spacing[8]};
      }
    }
  `}
`;
