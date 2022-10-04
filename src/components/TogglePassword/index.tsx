import { ITogglePassword } from "@/interfaces";
import * as S from "./style";

export function TogglePassword({ children, type, onClick }: ITogglePassword) {
  return (
    <S.Button type={type ? "button" : "submit"} onClick={onClick}>
      {children}
    </S.Button>
  );
}
