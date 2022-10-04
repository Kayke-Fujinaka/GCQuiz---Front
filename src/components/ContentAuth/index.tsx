import { IChildren } from "@/interfaces";
import * as S from "./style";

export function ContentAuth({ children }: IChildren) {
  return <S.Content>{children}</S.Content>;
}
