import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: 15px;
    bottom: 6px;
    background-color: transparent;

    @media (min-width: ${theme.medias.lg}) {
      bottom: 15px;
    }
  `}
`;
