import { IAnswer } from "@/interfaces";

import * as S from "./style";

export function Answer({
  name,
  id,
  htmlFor,
  label,
  onChange,
  required,
}: IAnswer) {
  return (
    <S.Container>
      <input
        type="radio"
        name={name}
        id={id}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={htmlFor}>{label}</label>
    </S.Container>
  );
}
