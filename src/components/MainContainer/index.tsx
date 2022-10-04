import { IChildren } from "@/interfaces";

import * as S from "./style";

export function MainContainer({ children }: IChildren) {
  return <S.Container>{children}</S.Container>;
}
