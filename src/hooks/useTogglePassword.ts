import { useState } from "react";

export function useTogglePassword() {
  const [typePassword, setTypePassword] = useState<boolean>(false);

  const passwordShown = {
    typePassword,
    togglePassword: () => setTypePassword(!typePassword),
  };

  return passwordShown;
}
