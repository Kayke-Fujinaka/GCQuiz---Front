import styled, { css } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { IDialogContentSize } from "@/interfaces";

export const DialogOverlay = styled(Dialog.Overlay)`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    background-color: ${theme.colors.black};
    opacity: 60%;
    z-index: ${theme.zIndex.modal};
  `}
`;

export const DialogContent = styled(Dialog.Content)<IDialogContentSize>`
  ${({ theme, width, height }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing[4]};
    width: ${width ? `${width}rem` : "auto"};
    height: ${height ? `${height}rem` : "auto"};
    z-index: ${theme.zIndex.modal};
  `}
`;
