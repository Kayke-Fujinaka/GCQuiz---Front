export interface IGameRouteBody {
  userId: string;
  quizId: number;
}

export interface IGameResponse {
  gameExists: boolean;
  gameId: string;
}

export interface IAnswers {
  id: number;
  reply: string;
}

export interface IQuestion {
  id: number;
  name: string;
  points: number;
}

export interface IPostAnswer {
  quizReply: {
    questionId: number; // Alterar os nomes
    replyId: number;
  }[];
}

export interface IQuizResult {
  amountOfCorrect: number;
  amountOfErrors: number;
}
