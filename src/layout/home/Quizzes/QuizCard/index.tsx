import { IQuizCard } from "@/interfaces";

import * as S from "./style";

export function QuizCard({
  url,
  altText,
  name,
  handleClickInQuizCard,
}: IQuizCard) {
  return (
    <S.Container onClick={handleClickInQuizCard}>
      <img src={url} alt={altText} />
      <span>{name}</span>
    </S.Container>
  );
}
