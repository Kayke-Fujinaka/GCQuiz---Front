import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import IntroductionLayout from "@/layout/introduction";
import { IntroductionCategoryProps } from "@/interfaces/pages/quiz";
import { withSSRAuth } from "@/utils";

export default function Introdution({ category }: IntroductionCategoryProps) {
  return <IntroductionLayout category={category} />;
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    const cookies = parseCookies(ctx);
    console.log('cookies', cookies)
    return {
      props: {
        category: JSON.parse(cookies.QUIZ_INFO),
      },
    };
  }
);
