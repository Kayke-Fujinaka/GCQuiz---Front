import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      font-size: ${theme.fonts.size.md};
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.brown_900};
    }
  `}
`;
