import { IChildren } from "@/interfaces";

import * as S from "./style";

export function ContainerAuth ({ children }: IChildren) {
  return <S.Container>{children}</S.Container>;
}
