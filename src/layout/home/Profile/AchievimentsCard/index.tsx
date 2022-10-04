import { IAchievementsCard } from "@/interfaces";

import * as S from "./style";

export function AchievementsCard({
  icon,
  color,
  score,
  title,
}: IAchievementsCard) {
  return (
    <S.Container>
      <S.IconWrapper color={color}>{icon}</S.IconWrapper>
      <S.Content color={color}>
        <span>{score}</span>
        <p>{title}</p>
      </S.Content>
    </S.Container>
  );
}
