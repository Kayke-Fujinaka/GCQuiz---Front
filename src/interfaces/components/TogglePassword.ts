import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ITogglePassword = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
  };
