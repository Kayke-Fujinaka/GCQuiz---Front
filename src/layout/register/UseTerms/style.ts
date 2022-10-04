import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacing[2]};

    input[type="checkbox"] {
      position: absolute;
      cursor: pointer;
      opacity: 0;
      :checked + label::before {
        background-color: ${theme.colors.orange_300};
        border-color: ${theme.colors.orange_300};
      }
    }
    label {
      display: flex;
      align-items: center;
      font-size: ${theme.fonts.size.sm};
      color: ${theme.colors.white};
      ::before {
        content: "";
        margin-right: ${theme.spacing[2]};
        width: 0.8em;
        height: 0.8em;
        border: 0.1rem solid ${theme.colors.white};
        border-radius: 0.15rem;
      }
    }

    @media (min-width: ${theme.medias.lg}) {
      input[type="checkbox"] {
        :checked + label::before {
          background-color: ${theme.colors.orange_300};
        }
      }
      label {
        color: ${theme.colors.black};
        ::before {
          border-color: ${theme.colors.black};
        }
      }
    }
  `}
`;
