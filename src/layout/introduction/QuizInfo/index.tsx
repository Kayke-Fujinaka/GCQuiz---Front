import { IQuizInfo } from "@/interfaces";

import * as S from "./style";

export function QuizInfo({ title, value }: IQuizInfo) {
  return (
    <S.Container>
      <h3>{title}:</h3>
      <p>{value}</p>
    </S.Container>
  );
}
