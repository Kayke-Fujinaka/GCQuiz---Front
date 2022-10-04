import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    .btnSubmit {
      margin-top: ${theme.spacing[8]};
    }

    @media (min-width: ${theme.medias.lg}) {
      .btnSubmit {
        font-size: ${theme.fonts.size.md};
      }
    }
  `}
`;

export const InputCont = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing[2]};
    position: relative;

    @media (min-width: ${theme.medias.lg}) {
      margin-top: ${theme.spacing[6]};
    }
  `}
`;
