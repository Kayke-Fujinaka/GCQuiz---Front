import { ReactNode } from "react";

export interface IDialog {
  children: ReactNode;
  width?: number;
  height?: number;
}

export interface IDialogContentSize {
  width?: number;
  height?: number;
}

export interface IButtonChooseColors {
  color: "red" | "green";
}