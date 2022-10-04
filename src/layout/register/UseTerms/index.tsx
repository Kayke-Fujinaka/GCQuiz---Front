import { IUseTerms } from "@/interfaces";
import * as S from "./style";

export function UseTerms({
  children,
  name,
  type,
  onChange,
  htmlFor,
}: IUseTerms) {
  return (
    <S.Container>
      <input name={name} type={type} onChange={onChange} />
      <label htmlFor={htmlFor}>{children}</label>
    </S.Container>
  );
}
