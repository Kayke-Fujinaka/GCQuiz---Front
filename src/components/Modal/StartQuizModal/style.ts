import styled, { css } from "styled-components";
import { theme } from "@styles/theme";
import { IButtonChooseColors } from "@/interfaces";

const ButtonChooseColors = {
  green: theme.colors.green_500,
  red: theme.colors.red_500,
};

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fonts.size.md};
    font-weight: ${theme.fonts.weight.normal};
    color: ${theme.colors.black};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacing[12]};
    gap: ${theme.spacing[12]};
  `}
`;

export const ButtonChoose = styled.button<IButtonChooseColors>`
  ${({ theme, color }) => css`
    width: 100px;
    font-size: ${theme.fonts.size.md};
    font-weight: ${theme.fonts.weight.bold};
    color: ${ButtonChooseColors[color]};
    background-color: transparent;
    border: ${theme.borderRadius.none};
    &:hover {
      color: ${theme.colors.white};
      background-color: ${ButtonChooseColors[color]};
      border-radius: ${theme.borderRadius.sm};
      transition: all 0.5s, border-radius 0s;
      --webkit-transition: all 0.5s, border-radius 0s;
    }
  `}
`;
