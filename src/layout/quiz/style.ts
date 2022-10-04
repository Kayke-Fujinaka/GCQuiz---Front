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

export const Content = styled.form`
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

export const Question = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing[2]};
    gap: ${theme.spacing[6]};
    max-width: 30rem;

    img {
      display: block;
      margin-block: ${theme.spacing[8]};
      max-width: 100%;
    }

    @media (min-width: ${theme.medias.sm}) {
      display: flex;
      max-width: 100%;
      max-height: 250px;

      img {
        margin-block: ${theme.spacing[2]};
        width: 400px;
        height: 100%;
      }
    }

    @media (min-height: ${theme.medias.sm}) {
      img {
        height: 100%;
        width: 600px;
      }
    }
  `}
`;

export const TextQuestion = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    h3 {
      font-size: ${theme.fonts.size.xl};
      font-weight: ${theme.fonts.weight.semibold};
      margin-bottom: ${theme.spacing[1]};
      color: ${theme.colors.brown_900};
    }

    @media (min-width: ${theme.medias.sm}) {
      justify-content: start;
      margin: ${theme.spacing[1]};
      gap: ${theme.spacing[4]};
      overflow-y: scroll;
    }
  `}
`;

export const AnswerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacing[2]};
    width: 100%;

    h3 {
      font-size: ${theme.fonts.size.lg};
      font-weight: ${theme.fonts.weight.semibold};
      color: ${theme.colors.brown_900};
    }

    @media (min-width: ${theme.medias.sm}) {
      justify-content: start;
      margin-top: ${theme.spacing[4]};
      gap: ${theme.spacing[2]};
    }
  `}
`;
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
