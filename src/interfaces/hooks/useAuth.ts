export interface IUserRegisterData {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

export type IUserLoginData = Pick<IUserRegisterData, "email" | "password">;

export interface IDecodedUserJWT
  extends Pick<IUserRegisterData, "firstName" | "lastName" | "email"> {
  sub: string;
  iat: number;
  exp: number;
}

export interface ITokenAuth {
  access_token: string;
}

export interface IAuthContext {
  error: string;
  signInSuccess: boolean;
  signUpSuccess: boolean;
  loading: boolean;
  useSignIn: (body: IUserLoginData) => void;
  useSignOut: () => void;
  user: IDecodedUserJWT;
  useSignUp: (body: IUserRegisterData) => void;
}
