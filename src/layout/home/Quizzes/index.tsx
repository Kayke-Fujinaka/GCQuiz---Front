import { useEffect, useState } from "react";
import Router from "next/router";
import { setCookie } from "nookies";

import { useAuth } from "@/contexts/useAuth";
import { useQuestion } from "@/hooks/useQuiz";
import { IQuiz } from "@/interfaces";
import { api } from "@/services";

import { QuizCard } from "./QuizCard";
import * as S from "./style";

const TIME_TO_DESTROY_COOKIE = 60 * 60; // 1 hour

export function Quizzes() {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const { user } = useAuth();
  const { newGame } = useQuestion();

  useEffect(() => {
    api
      .get<IQuiz[]>("/quiz")
      .then((res) => setQuizzes(res.data))
      .catch((err) => {
        const { status } = err.response;
        const { statusText } = err.response;
        const messageError = err.response.data.message;
        console.error(`${status} - ${statusText} - ${messageError}`);
      });
  }, []);

  const handleClickInQuizCard = (quiz: IQuiz): void => {
    const body = {
      userId: user.sub,
      quizId: quiz.id,
    };
    newGame(body);
    setCookie(null, "QUIZ_INFO", JSON.stringify(quiz), {
      maxAge: TIME_TO_DESTROY_COOKIE,
    });
    Router.push("/introduction");
  };

  return (
    <S.Container>
      <h1>Quizzes</h1>
      <div>
        {quizzes.map((quiz) => (
          <QuizCard
            handleClickInQuizCard={() => handleClickInQuizCard(quiz)}
            key={quiz.id}
            data-testid={quiz.id}
            url={quiz.urlImage}
            altText={quiz.name}
            name={quiz.name}
          />
        ))}
      </div>
      <span>Ver mais</span>
    </S.Container>
  );
}
