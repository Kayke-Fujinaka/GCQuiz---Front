import { IQuizTitle } from "@/interfaces";

import * as S from "./style";

export function QuizTitle({ title, subtitle }: IQuizTitle) {
  return (
    <S.Container>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </S.Container>
  );
}
