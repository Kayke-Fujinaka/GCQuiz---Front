import { ReactNode } from "react";

export interface IUseTerms {
  children: ReactNode;
  name: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  htmlFor: string;
}
