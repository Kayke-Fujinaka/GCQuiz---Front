import { ILogoAuth } from "@/interfaces";
import * as S from "./style";

export function LogoAuth({ title, subtitle }: ILogoAuth) {
  return (
    <S.Container>
      <h2>GCQuiz</h2>
      <img src="/assets/logo-gcb.svg" alt="Grupo GCB Logo" />
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </S.Container>
  );
}
