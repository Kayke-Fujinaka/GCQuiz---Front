import styled, { css } from "styled-components";

import { AchievementsCardColorsProps } from "@/interfaces";
import { theme } from "@styles/theme";

const achievementsColors = {
  yellow: theme.colors.yellow_400,
  green: theme.colors.green_500,
  red: theme.colors.red_500,
};

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing[4]};

    @media (min-width: ${theme.medias.lg}) {
      flex-direction: row;
    }
  `}
`;

export const IconWrapper = styled.div<AchievementsCardColorsProps>`
  ${({ theme, color }) => css`
    display: flex;
    padding: ${theme.spacing[2]};
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.md};
    box-shadow: 0px 10px 40px 5px ${theme.colors.grey_100};

    svg {
      width: 2rem;
      height: 2rem;
      color: ${achievementsColors[color]};
    }
  `}
`;

export const Content = styled.div<AchievementsCardColorsProps>`
  ${({ theme, color }) => css`
    color: ${achievementsColors[color]};

    span {
      display: block;
      text-align: center;
      font-size: ${theme.fonts.size.xl1};
      font-weight: ${theme.fonts.weight.bold};

      @media (min-width: ${theme.medias.lg}) {
        text-align: left;
      }
    }
  `}
`;
