import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import jwtDecode from "jwt-decode";
import { destroyCookie, parseCookies, setCookie } from "nookies";

import {
  IAuthContext,
  IDecodedUserJWT,
  IChildren,
  IUserRegisterData,
  IUserLoginData,
  ITokenAuth,
} from "@/interfaces";
import { api } from "@/services";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IChildren): JSX.Element => {
  const { USER_JWT } = parseCookies();
  const [user, setUser] = useState<IDecodedUserJWT>({} as IDecodedUserJWT);
  const [error, setError] = useState<string>("");
  const [signInSuccess, setSignInSuccess] = useState<boolean>(false);
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const DAYS: number = 24 * 60 * 60; // 1 Day

  useEffect(() => {
    USER_JWT && setUser(jwtDecode<IDecodedUserJWT>(USER_JWT));
  }, [USER_JWT]);

  const useSignUp = useCallback(
    async (body: IUserRegisterData): Promise<void> => {
      await api
        .post<IUserRegisterData>("/user", body)
        .then(() => {
          setLoading(true);
          setSignUpSuccess(true);
        })
        .catch((err) => {
          const errorMessage: string = err.response.data.message;
          setError(errorMessage);
        })
        .finally(() => setLoading(false));
    },
    []
  );

  const useSignIn = useCallback(async (body: IUserLoginData): Promise<void> => {
    await api
      .post<ITokenAuth>("/login", body)
      .then(({ data }) => {
        setLoading(true);
        setCookie(null, "USER_JWT", data.access_token, {
          maxAge: DAYS,
        });
        setUser(jwtDecode<IDecodedUserJWT>(data.access_token));
        api.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
        setSignInSuccess(true);
      })
      .catch((err) => {
        const errorMessage: string = err.response.data.message;
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  }, []);

  const useSignOut = useCallback(() => {
    destroyCookie(null, "USER_JWT");
    setSignInSuccess(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        useSignUp,
        useSignIn,
        useSignOut,
        user,
        error,
        signInSuccess,
        loading,
        signUpSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => useContext(AuthContext);
