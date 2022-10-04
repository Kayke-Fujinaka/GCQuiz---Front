import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing[4]};

    label {
      color: ${theme.colors.brown_900};
      font-size: ${theme.fonts.size.md};
      font-weight: ${theme.fonts.weight.normal};
    }
  `}
`;
