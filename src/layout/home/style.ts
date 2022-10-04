import styled, { css } from "styled-components";

export const HomeWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.medias.sm}) {
      flex-direction: row;
    }
  `}
`;
