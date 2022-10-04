import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import { IQuiz } from "@/interfaces";
import QuizLayout from "@/layout/quiz";
import { withSSRAuth } from "@/utils";

export default function Quiz({ category, quiz, question }: IQuiz) {
  return <QuizLayout category={category} quiz={quiz} question={question} />;
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    const cookies = parseCookies(ctx);

    return {
      props: {
        category: JSON.parse(cookies.CATEGORY_INFOS),
        quiz: cookies.QUIZ_ID,
      },
    };
  }
);
