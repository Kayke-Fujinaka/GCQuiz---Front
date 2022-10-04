import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url("./assets/background-auth.svg");

    @media (min-width: ${theme.medias.lg}) {
      justify-content: end;
      width: 100%;
      background: url("./assets/background-auth.svg") center left / 50%
        no-repeat;
    }
  `}
`;
