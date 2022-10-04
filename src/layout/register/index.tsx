/* eslint-disable consistent-return */
import { useEffect, useState } from "react";
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
import { IUserRegisterData } from "@/interfaces";
import { Password } from "@/utils/passwordValidate";
import { ErrorMessage } from "@hookform/error-message";

import * as S from "./style";
import { UseTerms } from "./UseTerms";

export function RegisterLayout() {
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const { typePassword, togglePassword } = useTogglePassword();
  const { useSignUp, signUpSuccess, error, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (error) toast.error(error);

    if (signUpSuccess) {
      toast.success("Cadastrado com sucesso!");
      Router.push("/login");
    }
  }, [error, signUpSuccess]);

  function handleCreateUser(e: FieldValues): void | string | number {
    const { result, errors } = Password.validate(e.password);

    if (!result) {
      return errors.forEach((err): void => {
        toast.error(err);
      });
    }

    if (!checkbox) {
      return toast.error("Por favor, aceite os termos de uso!");
    }

    if (error) toast.error(error);

    const body: IUserRegisterData = {
      firstName: e.firstName,
      lastName: e.lastName,
      age: Number(e.age),
      gender: e.gender,
      email: e.email,
      password: e.password,
      acceptTerms: checkbox,
    };

    useSignUp(body);
  }

  return (
    <ContainerAuth>
      <ContentAuth>
        <LogoAuth title="Crie sua conta" />
        <S.Form onSubmit={handleSubmit(handleCreateUser)}>
          <S.InputCont>
            <Label htmlFor="firstName">Nome</Label>
            <Input
              id="firstName"
              type="firstName"
              placeholder="Insira seu nome"
              autoComplete="off"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Preencha o campo",
                },
              })}
            />
          </S.InputCont>
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => <p className="error">{message}</p>}
          />
          <S.InputCont>
            <Label htmlFor="lastName">Último nome</Label>
            <Input
              id="lastName"
              type="lastName"
              placeholder="Insira seu nome"
              autoComplete="off"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Preencha o campo",
                },
              })}
            />
          </S.InputCont>
          <ErrorMessage
            errors={errors}
            name="lastName"
            render={({ message }) => <p className="error">{message}</p>}
          />
          <S.InputCont>
            <Label htmlFor="age">Idade</Label>
            <Input
              id="age"
              type="number"
              placeholder="Insira sua idade"
              autoComplete="off"
              {...register("age", {
                required: {
                  value: true,
                  message: "Preencha o campo",
                },
              })}
            />
          </S.InputCont>
          <ErrorMessage
            errors={errors}
            name="age"
            render={({ message }) => <p className="error">{message}</p>}
          />
          <S.InputCont>
            <Label htmlFor="gender">Gênero</Label>
            <select // Criar component Select
              {...register("gender", {
                required: {
                  value: true,
                  message: "Preencha o campo",
                },
              })}
            >
              <option key={Math.random()} value="male">
                Masculino
              </option>
              <option key={Math.random()} value="female">
                Feminino
              </option>
              <option key={Math.random()} value="other">
                Outro
              </option>
            </select>
          </S.InputCont>
          <ErrorMessage
            errors={errors}
            name="gender"
            render={({ message }) => <p className="error">{message}</p>}
          />
          <S.InputCont>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Insira seu email"
              autoComplete="off"
              {...register("email", {
                required: {
                  value: true,
                  message: "Preencha o campo",
                },
                pattern: {
                  value: /^\w+@[a-z]+\.com/,
                  message: "Insira um email válido",
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
          <UseTerms
            name="useTerms"
            type="checkbox"
            onChange={() => setCheckbox(!checkbox)}
            htmlFor="useTerms"
          >
            Aceito os termos de uso
          </UseTerms>
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
              Registre-se
            </Button>
          )}
        </S.Form>
        <URLRedirect
          text="Já possui uma conta?&nbsp;"
          hyperLink="Faça login"
          link="./login"
        />
      </ContentAuth>
    </ContainerAuth>
  );
}

export default RegisterLayout;
