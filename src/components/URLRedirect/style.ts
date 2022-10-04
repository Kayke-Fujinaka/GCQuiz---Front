import styled, { css } from "styled-components";

export const URLRedirect = styled.p`
  ${({ theme }) => css`
    text-align: center;
    margin-top: ${theme.spacing[6]};
    font-size: ${theme.fonts.size.md};
    color: ${theme.colors.white};

    a {
      text-decoration: underline;
      font-weight: ${theme.fonts.weight.semibold};
    }

    @media (min-width: ${theme.medias.lg}) {
      color: ${theme.colors.black};
    }
  `}
`;
