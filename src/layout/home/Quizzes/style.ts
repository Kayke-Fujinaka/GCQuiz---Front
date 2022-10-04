import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: max-content;
    margin-inline: auto;
    position: relative;

    @media (min-width: ${theme.medias.md}) {
      margin: ${theme.spacing[0]};
    }

    h1 {
      text-align: center;
      margin-bottom: ${theme.spacing[6]};
      font-size: ${theme.fonts.size.xl1};
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.brown_900};

      @media (min-width: ${theme.medias.md}) {
        text-align: start;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing[8]};

      @media (min-width: ${theme.medias.md}) {
        flex-direction: row;
      }
    }

    > span {
      text-align: center;
      margin-top: ${theme.spacing[6]};
      font-size: ${theme.fonts.size.md};
      font-weight: ${theme.fonts.weight.semibold};
      color: ${theme.colors.brown_900};
      cursor: pointer;

      @media (min-width: ${theme.medias.md}) {
        text-align: start;
        position: absolute;
        right: 0;
      }
    }
  `}
`;
