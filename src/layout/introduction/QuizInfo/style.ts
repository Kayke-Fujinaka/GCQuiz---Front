import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: ${theme.fonts.size.sm};
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.brown_900};
    }

    p {
      font-size: ${theme.fonts.size.sm};
    }

    @media (min-height: ${theme.medias.sm}) {
      h3 {
        font-size: ${theme.fonts.size.lg};
      }

      p {
        font-size: ${theme.fonts.size.lg};
      }
    }
  `}
`;
