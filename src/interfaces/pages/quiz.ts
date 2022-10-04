export interface IQuiz {
  category: {
    id: number;
    name: string;
    urlImage: string;
  };
  question: {
    id: string;
    name: string;
    points: number;
    answers: [{ id: string; reply: string }];
  };
  quiz: string;
}

export type IntroductionCategoryProps = Pick<IQuiz, "category">;

