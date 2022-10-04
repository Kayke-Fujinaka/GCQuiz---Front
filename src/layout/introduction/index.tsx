import { AiOutlineArrowRight } from "react-icons/ai";
import Router from "next/router";
import { Header, MainContainer, QuizTitle, Button } from "@/components";
import * as S from "@/layout/introduction/style";
import { SEO } from "@/SEO";
import { IntroductionCategoryProps } from "@/interfaces/pages/quiz";
import { resultDate } from "@/utils";
import { QuizInfo } from "./QuizInfo";


export default function IntroductionLayout({
  category,
}: IntroductionCategoryProps) {
  const quizInfo = [
    {
      title: "Data",
      value: resultDate,
    },
    {
      title: "Tempo Limite",
      value: "10 min",
    },
    {
      title: "Pontos",
      value: "10 pontos",
    },
  ];

  function handleStartQuiz() {
    Router.push("/quiz");
  }
  
  return (
    <>
      <SEO title="GCQuiz - Introdução" />
      <S.Container>
        <Header />
        <MainContainer>
          <S.Content>
            <QuizTitle
              title={`${category.name} Quiz`}
              subtitle="Leia e siga as instruções"
            />
            <S.CategoryInfo>
              <div>
                <img
                  src={category.urlImage}
                  alt={`Imagem referente à ${category.name}`}
                />
              </div>
              <S.QuizInfosWrapper>
                {quizInfo.map((info) => (
                  <QuizInfo
                    key={Math.random()}
                    title={info.title}
                    value={info.value}
                  />
                ))}
              </S.QuizInfosWrapper>
            </S.CategoryInfo>
            <S.TextInstructions>
              <h2>Instruções</h2>
              <p>
                Este quiz é composto por 5 questões de múltipla escolha. Para
                ter sucesso com os questionários, é importante estar
                familiarizado com os tópicos. Tenha em mente o seguinte:
              </p>
              <p>
                Tempo - Você precisa completar cada uma de suas tentativas em
                uma sessão, pois você tem 30 minutos para cada tentativa.
                Respostas - Você pode revisar suas opções de resposta e
                compará-las com as respostas corretas após sua tentativa final.
              </p>
              <p>
                Para começar, clique no botão &quot;Iniciar&quot;. Quando
                terminar, clique no botão &quot;Enviar&quot;.
              </p>
            </S.TextInstructions>
            <Button iconRight onClick={() => handleStartQuiz()}>
              <span>Começar</span>
              <AiOutlineArrowRight className="arrow_icon" />
            </Button>
          </S.Content>
        </MainContainer>
      </S.Container>
    </>
  );
}
