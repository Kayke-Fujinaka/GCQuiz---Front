import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-inline: ${theme.spacing[12]};

    .error {
      color: ${theme.colors.red_500};
      font-size: ${theme.fonts.size.sm};
    }

    @media (min-width: ${theme.medias.lg}) {
      float: right;
      width: 50%;
      padding-inline: 10%;
    }
  `}
`;
