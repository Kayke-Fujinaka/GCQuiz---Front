import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: ${theme.spacing[2]};
      margin-right: ${theme.spacing[6]};
      width: 180px;
    }

    h1 {
      font-size: ${theme.fonts.size.xl1};
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.white};
    }

    h2 {
      display: none;
    }

    h3 {
      font-size: ${theme.fonts.size.md};
      font-weight: ${theme.fonts.weight.normal};
      color: ${theme.colors.white};
    }

    @media (min-width: ${theme.medias.lg}) {
      align-items: flex-start;

      h1,
      h3 {
        color: ${theme.colors.black};
      }

      img {
        display: none;
      }

      h1 {
        font-size: ${theme.fonts.size.xl2};
      }

      h2 {
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
      }

      h3 {
        font-size: ${theme.fonts.size.lg};
      }
    }
  `}
`;
