import { IURLRedirect } from "@/interfaces";
import * as S from "./style";

export function URLRedirect({ text, link, hyperLink }: IURLRedirect) {
  return (
    <S.URLRedirect>
      {text}
      <a href={link}>{hyperLink}</a>
    </S.URLRedirect>
  );
}
