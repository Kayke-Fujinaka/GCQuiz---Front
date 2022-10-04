import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    padding: ${theme.spacing[12]} ${theme.spacing[8]};
    gap: ${theme.spacing[8]};
    width: 100%;
    max-width: 95vw;
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: 0 15px 40px #ededed;

    @media (min-width: ${theme.medias.sm}) {
      margin-block: ${theme.spacing[8]};
      margin-left: ${theme.spacing[8]};
      max-width: calc(100vw - 20rem);
    }

    @media (max-height: ${theme.medias.sm}) {
      padding-block: ${theme.spacing[8]};
    }
  `}
`;
