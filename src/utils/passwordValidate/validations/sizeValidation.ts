type ReturnProps = {
    error: string
}

export class sizeValidation {
  static execute(password: string): ReturnProps {
    const PASS_MIN_LENGTH = 6;
    const PASS_MAX_LENGTH = 16;

    if (
      password.length < PASS_MIN_LENGTH ||
      password.length > PASS_MAX_LENGTH
    ) {
      return {
        error: "A senha precisa ter entre 6 e 16 caracteres",
      };
    }
    return { error: "" };
  }
}
