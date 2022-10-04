import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

import Router from "next/router";

import {
  Button,
  ContainerAuth,
  ContentAuth,
  Input,
  Label,
  LogoAuth,
  TogglePassword,
  URLRedirect,
} from "@/components";
import { useAuth } from "@/contexts/useAuth";
import { useTogglePassword } from "@/hooks/useTogglePassword";
import { IUserLoginData } from "@/interfaces";
import { ErrorMessage } from "@hookform/error-message";

import * as S from "./style";

function LoginLayout() {
  const { typePassword, togglePassword } = useTogglePassword();
  const { useSignIn, signInSuccess, error, loading } = useAuth();

  useEffect(() => {
    if (error) toast.error(error);

    if (signInSuccess) {
      toast.success("Seja bem vindo!");
      Router.push("/");
    }
  }, [error, signInSuccess]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleLogin(e: FieldValues): void {
    if (error) toast.error(error);

    const body: IUserLoginData = {
      email: e.email,
      password: e.password,
    };

    useSignIn(body);
  }

  return (
    <ContainerAuth>
      <ContentAuth>
        <LogoAuth
          title="Entre na sua conta"
          subtitle="com seu email registrado"
        />
        <S.Form onSubmit={handleSubmit(handleLogin)}>
          <S.InputCont>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Insira seu Email"
              autoComplete="off"
              {...register("email", {
                required: {
                  value: true,
                  message: "Preencha o campo",
                },
              })}
            />
          </S.InputCont>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p className="error">{message}</p>}
          />
          <S.InputCont>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type={typePassword ? "text" : "password"}
              placeholder="Insira sua senha"
              autoComplete="off"
              {...register("password", {
                required: {
                  value: true,
                  message: "Preencha o campo",
                },
              })}
            />
            <TogglePassword type="button" onClick={togglePassword}>
              {typePassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </TogglePassword>
          </S.InputCont>
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p className="error">{message}</p>}
          />
          {loading ? (
            <Button
              className="btnSubmit-disable"
              type="submit"
              disabled={loading}
              fullWidth
            >
              Carregando...
            </Button>
          ) : (
            <Button className="btnSubmit" type="submit" fullWidth>
              Entrar
            </Button>
          )}
        </S.Form>
        <URLRedirect
          text="N&atilde;o tem uma conta?&nbsp;"
          hyperLink="Registre-se"
          link="./register"
        />
      </ContentAuth>
    </ContainerAuth>
  );
}

export default LoginLayout;
