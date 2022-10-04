import { Header, MainContainer } from "@/components";
import { HomeWrapper } from "@/layout/home/style";
import { SEO } from "@/SEO";
import { Profile } from "./Profile";
import { Quizzes } from "./Quizzes";

export default function HomeLayout() {
  return (
    <HomeWrapper>
      <SEO title="GCQuiz - Início" />
      <Header />
      <MainContainer>
        <Profile />
        <Quizzes />
      </MainContainer>
    </HomeWrapper>
  );
}
