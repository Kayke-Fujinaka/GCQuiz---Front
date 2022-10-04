type ReturnProps = {
  error: string;
};

export class UpperLowerCaseValidation {
  static execute(password: string) {
    const passArr = password.split("");
    const isCharacterALetter = passArr.filter(
      (value) => value.toLowerCase() != value.toUpperCase()
    );

    function isUpperAndLower() {
      const isUpper = isCharacterALetter.some(
        (value) => value.toUpperCase() === value
      );
      const isLower = isCharacterALetter.some(
        (value) => value.toLowerCase() === value
      );

      return isUpper && isLower;
    }

    if (!isUpperAndLower()) {
      return { error: "A senha deve conter letras maiúsculas e minúsculas" };
    } else return { error: "" };
  }
}
