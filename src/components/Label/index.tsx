import { ILabel } from "@/interfaces";

import * as S from "./style";

export function Label({ children, ...rest }: ILabel) {
  return <S.Label {...rest}>{children}</S.Label>;
}
