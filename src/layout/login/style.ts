import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    .btnSubmit {
      margin-top: ${theme.spacing[10]};
    }

    .btnSubmit-disable {
      margin-top: ${theme.spacing[10]};
      opacity: 0.8;
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
    position: relative;
    margin-top: ${theme.spacing[2]};

    @media (min-width: ${theme.medias.lg}) {
      margin-top: ${theme.spacing[8]};
    }
  `}
`;
