import { IButton } from "@/interfaces";

import * as S from "./style";

export function Button ({
  children,
  background = "default",
  color = "white",
  iconLeft = false,
  iconRight = false,
  iconCenter = false,
  fullWidth = false,
  widthSize = "md",
  ...props
}: IButton) {
  return (
    <S.Container
      background={background}
      color={color}
      fullWidth={fullWidth}
      iconLeft={iconLeft}
      iconRight={iconRight}
      iconCenter={iconCenter}
      widthSize={widthSize}
      {...props}
    >
      {children}
    </S.Container>
  );
};
