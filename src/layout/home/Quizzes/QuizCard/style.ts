import styled, { css } from "styled-components";

export const Container = styled.figure`
  ${({ theme }) => css`
    max-width: 20rem;
    max-height: 8rem;
    border-radius: ${theme.borderRadius.lg};
    position: relative;
    overflow: hidden;
    cursor: pointer;

    @media (min-width: ${theme.medias.md}) {
      max-height: 12rem;
    }

    img {
      display: block;
      max-width: 100%;
      width: 300px;
      height: 100%;
    }

    span {
      display: block;
      position: absolute;
      bottom: ${theme.spacing[4]};
      left: ${theme.spacing[4]};
      padding: ${theme.spacing[1]} ${theme.spacing[4]};
      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.xl};
      font-weight: ${theme.fonts.weight.semibold};
      border-radius: ${theme.borderRadius.lg};
      backdrop-filter: blur(6px);
    }
  `}
`;
