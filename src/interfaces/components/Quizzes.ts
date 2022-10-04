import { IQuestion } from "../hooks/useQuiz";

export interface IQuiz {
  id: number;
  name: string;
  urlImage: string;
  questions: IQuestion[];
}

export interface IQuizCard {
  url: string;
  altText: string;
  name: string;
  handleClickInQuizCard: () => void;
}
