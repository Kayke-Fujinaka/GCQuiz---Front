import {
  SpecialCharValidation,
  UpperLowerCaseValidation,
  sizeValidation,
} from "./validations";

export type ResultProps = {
  result: boolean;
  errors: string[];
};

export class Password {
  static validate(password: string) {
    const validations = [
      sizeValidation.execute(password),
      SpecialCharValidation.execute(password),
      UpperLowerCaseValidation.execute(password),
    ];

    const results = validations.reduce(
      (acc: ResultProps, { error }) => {
        if (error) {
          acc.errors.push(error);
          acc.result = false;
        }
        return acc;
      },
      { result: true, errors: [] }
    );
    return results;
  }
}
