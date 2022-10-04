/* eslint-disable import/no-cycle */
import { IPostAnswer, IQuestion } from "@/interfaces";
import { api } from "@/services";

// TIPAR O QUE RETORNA DEPOIS DO .get ou .post

const getQuestion = (categoryId: number, userSub: string, quizID: string) =>
  api.get<IQuestion>(`/categories/${categoryId}/${userSub}/${quizID}`);

const postAnswer = (userSub: string, quizID: string, body: IPostAnswer) =>
  api.post(`/answers/${userSub}/${quizID}`, body);

const getQuizResult = (userSub: string, quizID: string) =>
  api.get(`/quiz/${userSub}/${quizID}`);

export const QuizService = {
  getQuestion,
  postAnswer,
  getQuizResult,
};
