import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    @media (max-width: ${theme.medias.sm}) {
      flex-direction: column;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    button {
      margin-top: ${theme.spacing[4]};
    }

    @media (min-width: ${theme.medias.sm}) {
      display: block;
      height: 100%;

      p,
      h2 {
        font-size: ${theme.fonts.size.sm};
      }

      button {
        float: right;

        :hover {
          .arrow_icon {
            transition: 0.3s ease-out;
            transform: translateX(4px);
          }
        }
      }

      @media (min-height: ${theme.medias.sm}) {
        p {
          font-size: ${theme.fonts.size.lg};
        }

        button {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  `}
`;

export const CategoryInfo = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacing[6]};
    margin-bottom: ${theme.spacing[2]};
    max-width: 30rem;

    img {
      display: block;
      margin-block: ${theme.spacing[8]};
      max-width: 100%;
      border-radius: ${theme.borderRadius.lg};
      box-shadow: 0px 15px 40px 5px ${theme.colors.grey_50};
    }

    @media (min-width: ${theme.medias.sm}) {
      display: flex;
      max-width: 100%;

      img {
        width: 400px;
        margin-block: ${theme.spacing[2]};
      }
    }

    @media (min-height: ${theme.medias.sm}) {
      img {
        width: 600px;
      }
    }
  `}
`;

export const QuizInfosWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media (min-width: ${theme.medias.sm}) {
      justify-content: start;
      gap: ${theme.spacing[4]};
      margin: ${theme.spacing[2]};
    }
  `}
`;

export const TextInstructions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      display: none;
    }

    p {
      text-align: justify;
      font-size: ${theme.fonts.size.sm};
      margin-block: ${theme.spacing[2]};
    }

    @media (min-width: ${theme.medias.sm}) {
      h2 {
        display: block;
        align-self: flex-start;
        font-size: ${theme.fonts.size.md};
        font-weight: ${theme.fonts.weight.bold};
        color: ${theme.colors.brown_900};
      }
    }

    @media (min-height: ${theme.medias.sm}) {
      h2 {
        font-size: ${theme.fonts.size.xl};
      }
    }
  `}
`;
