import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background?: "default" | "red" | "green" | "none";
  color?: "white" | "brown" | "green" | "red";
  iconLeft?: boolean;
  iconRight?: boolean;
  iconCenter?: boolean;
  fullWidth?: boolean;
  widthSize?: "sm" | "md" | "lg";
}

export interface IButtonStyles {
  background: "default" | "red" | "green" | "none";
  color: "white" | "brown" | "green" | "red";
  fullWidth?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconCenter?: boolean;
  widthSize: "sm" | "md" | "lg";
}
