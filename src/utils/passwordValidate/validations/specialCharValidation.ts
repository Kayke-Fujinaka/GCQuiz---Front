type ReturnProps = {
    error: string
}

export class SpecialCharValidation {
    static execute(password: string): ReturnProps {
      const SPECIAL_CHAR = `!@#$%^&*()_+={};':"|,.<>?~`;
      const passArr: string[] = password.split("");
  
      const numberOfSpecialChar = passArr.reduce((acc, value) => {
        if(SPECIAL_CHAR.includes(value)) acc++
        return acc;
      }, 0);
  
      if (!(numberOfSpecialChar < 2)) return {error: ""}
      else return {error: "A senha precisa ter no mínimo 2 caracteres especiais"}
    }
  }