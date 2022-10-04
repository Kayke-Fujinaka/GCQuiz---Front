import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.fonts.size.lg};
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.brown_900};
    }

    p {
      display: none;
    }

    @media (min-width: ${theme.medias.sm}) {
      p {
        display: block;
        margin-top: ${theme.spacing[2]};
        font-size: ${theme.fonts.size.sm};
      }
    }

    @media (min-height: ${theme.medias.sm}) {
      h1 {
        font-size: ${theme.fonts.size.xl1};
      }

      p {
        font-size: ${theme.fonts.size.lg};
      }
    }
  `}
`;
