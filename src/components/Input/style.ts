import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacing[6]};
    height: 3rem;
    width: 100%;
    font-size: ${theme.fonts.size.xs};
    border: ${theme.borderRadius.none};
    border-radius: ${theme.borderRadius.md};
    ::placeholder {
      font-size: ${theme.fonts.size.xs};
    }

    @media (min-width: ${theme.medias.lg}) {
      height: 4rem;
      font-size: ${theme.fonts.size.md};
      box-shadow: 0px 5px 40px -10px #d9d9d9;
      ::placeholder {
        font-size: ${theme.fonts.size.md};
      }
    }
  `}
`;
