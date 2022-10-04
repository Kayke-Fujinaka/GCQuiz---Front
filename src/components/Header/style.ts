import styled, { css, keyframes } from "styled-components";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// Animations
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

// Styled Components
export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 5rem;
    position: relative;
    padding: 0 ${theme.spacing[4]};
    background-color: ${theme.colors.grey_50};
    z-index: ${theme.zIndex.header};

    @media (min-width: ${theme.medias.sm}) {
      flex-direction: column;
      padding: ${theme.spacing[4]};
      width: 20rem;
      height: 100vh;
    }
  `}
`;

export const MenuTrigger = styled(DropdownMenu.Trigger)`
  ${({ theme }) => css`
    padding: ${theme.spacing[2]};
    background: none;

    span {
      display: block;
      margin-block: ${theme.spacing[1]};
      width: 2rem;
      height: 3px;
      transition: 400ms ease-in-out;
      background: ${theme.colors.orange_300};
    }

    &[data-state="open"] {
      pointer-events: auto;
      span:first-child {
        -webkit-transform: rotate(-45deg) translate(-5px, 5px);
        transform: rotate(-45deg) translate(-5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      }
    }
  `}
`;

export const MenuContent = styled(DropdownMenu.Content)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    padding-top: ${theme.spacing[4]};
    background: ${theme.colors.grey_50};

    &[data-state="open"] {
      animation: ${fadeIn} 200ms ease-in-out;
    }

    &[data-state="closed"] {
      animation: ${fadeOut} 200ms ease-in-out;
    }
  `}
`;

export const MenuLogo = styled(DropdownMenu.Item)`
  ${({ theme }) => css`
    padding: ${theme.spacing[4]};
    font-size: ${theme.fonts.size.xl2};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.brown_900};
  `}
`;

export const MenuItem = styled(DropdownMenu.Item)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacing[4]};
    padding: ${theme.spacing[4]} ${theme.spacing[8]};
    width: 14rem;
    font-size: ${theme.fonts.size.md};
    font-weight: ${theme.fonts.weight.semibold};
    color: ${theme.colors.brown_900};
    background: ${theme.colors.grey_50};
    border: ${theme.borderRadius.none};
    border-radius: ${theme.borderRadius.lg};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.orange_300};
    }

    &.active {
      background: ${theme.colors.orange_300};
      color: ${theme.colors.white};
    }

    &:last-child {
      all: unset;
      position: absolute;
      bottom: 100px;

      &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.brown_900};
        border-radius: ${theme.borderRadius.lg};
      }
    }

    svg {
      margin-right: ${theme.spacing[8]};
      width: 1.125rem;
      height: 1.125rem;
    }
  `}
`;

export const Logo = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacing[4]};
    font-size: ${theme.fonts.size.xl2};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.brown_900};
  `}
`;

export const Menu = styled.nav`
  ${({ theme }) => css`
    height: 100%;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: ${theme.spacing[4]};
      height: 100%;
      position: relative;
      background: ${theme.colors.grey_50};

      li {
        + li {
          margin-top: ${theme.spacing[4]};
        }

        display: flex;
        align-items: center;
        padding: ${theme.spacing[4]} ${theme.spacing[8]};
        width: 14rem;
        font-size: ${theme.fonts.size.md};
        font-weight: ${theme.fonts.weight.semibold};
        color: ${theme.colors.brown_900};
        background: ${theme.colors.grey_50};
        border: ${theme.borderRadius.none};
        border-radius: ${theme.borderRadius.lg};
        cursor: pointer;

        &:hover {
          color: ${theme.colors.orange_300};
        }

        &.active {
          color: ${theme.colors.white};
          background: ${theme.colors.orange_300};
        }

        svg {
          margin-right: ${theme.spacing[8]};
          width: 1.125rem;
          height: 1.125rem;
        }

        &:last-child {
          all: unset;
          position: absolute;
          bottom: 1rem;

          &:focus {
            box-shadow: 0 0 0 2px ${theme.colors.brown_900};
          }
        }
      }
    }
  `}
`;
