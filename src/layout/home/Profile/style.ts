import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacing[12]} ${theme.spacing[8]};
    gap: ${theme.spacing[8]};
    border-radius: ${theme.borderRadius.sm};
    background: ${theme.colors.grey_50};

    @media (min-width: ${theme.medias.xl}) {
      flex-direction: row;
    }
  `}
`;

export const Avatar = styled.figure`
  ${({ theme }) => css`
    min-width: 10rem;
    border-radius: ${theme.borderRadius.full};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    @media (min-width: ${theme.medias.md}) {
      align-items: center;
    }

    @media (min-width: ${theme.medias.xl}) {
      align-items: flex-start;
    }

    h1 {
      font-size: ${theme.fonts.size.xl2};
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.brown_900};
    }

    h3 {
      font-size: ${theme.fonts.size.xl};
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.brown_900};
      text-transform: uppercase;

      ::before,
      ::after {
        content: '"';
      }
    }
  `}
`;

export const AchievementsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacing[6]} 0 ${theme.spacing[4]};
    gap: ${theme.spacing[6]};
  `}
`;
