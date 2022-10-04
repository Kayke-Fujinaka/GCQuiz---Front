import { useCallback, useState } from "react";

import {
  IGameRouteBody,
  IGameResponse,
  IQuestion,
  IQuizResult,
} from "@/interfaces";
import { api, QuizService } from "@/services";

export const useQuestion = () => {
  const [question, setQuestion] = useState<IQuestion>();
  const [reviewQuiz, setReviewQuiz] = useState<IQuizResult>({} as IQuizResult);

  const newGame = useCallback(async (body: IGameRouteBody): Promise<void> => {
    await api
      .post<IGameResponse>("/game", body)
      .then((res) => console.log(res.data))
      .catch((err) => {
        const { status } = err.response;
        const { statusText } = err.response;
        const messageError = err.response.data.message;
        console.error(`${status} - ${statusText} - ${messageError}`);
      });
  }, []);

  // -------------------------------------

  const getQuestion = useCallback(
    (categoryId: number, userSub: string, quizID: string) => {
      return QuizService.getQuestion(categoryId, userSub, quizID)
        .then((res) => setQuestion(res.data))
        .catch((err) => console.log(err));
    },
    []
  );

  const postAnswer = useCallback(
    (userSub: string, quizID: string, questionId: number, replyId: number) => {
      const body = {
        quizReply: [
          {
            questionId,
            replyId,
          },
        ],
      };
      return QuizService.postAnswer(userSub, quizID, body)
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
    },
    []
  );

  const getQuizResult = useCallback((userSub: string, quizID: string) => {
    return QuizService.getQuizResult(userSub, quizID)
      .then((res) => setReviewQuiz(res.data))
      .catch((err) => console.log(err));
  }, []);

  return {
    newGame,
    question,
    getQuestion,
    postAnswer,
    reviewQuiz,
    getQuizResult,
  };
};
