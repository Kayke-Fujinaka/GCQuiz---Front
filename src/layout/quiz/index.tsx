/* eslint-disable consistent-return */
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import Router from "next/router";
import { destroyCookie } from "nookies";

import { Header, MainContainer, Button, QuizTitle, Modal } from "@/components";
import { useAuth } from "@/contexts/useAuth";
import { useQuestion } from "@/hooks/useQuiz";
import { IQuiz } from "@/interfaces";
import * as S from "@/layout/quiz/style";
import { SEO } from "@/SEO";

import { Answer } from "./Answer";

export default function QuizLayout({ category, quiz }: IQuiz) {
  const [questionIndex, setQuestionIndex] = useState<number>(1);
  const [markedAnswer, setMarkedAnswer] = useState<string>("");
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { user } = useAuth();
  const { getQuestion, question, postAnswer, getQuizResult, reviewQuiz } =
    useQuestion();

  useEffect(() => {
    getQuestion(category.id, user.sub, quiz);
  }, []);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleAnswered(e: React.FormEvent) {
    e.preventDefault();

    if (questionIndex === 10) {
      postAnswer(user.sub, quiz, question.id, Number(markedAnswer))
        .then(() => {
          setDisableButton(false);
          getQuizResult(user.sub, quiz);
          handleOpenModal();
        })
        .catch((err) => console.log(err));
      return destroyCookie(null, "QUIZ_ID");
    }

    postAnswer(user.sub, quiz, question.id, Number(markedAnswer))
      .then((res) => {
        console.log("certo ou errado?", res);
        getQuestion(category.id, user.sub, quiz);
      })
      .catch((err) => {
        console.log(err);
      });

    setQuestionIndex(questionIndex + 1);
  }

  return (
    <>
      <SEO title="GCQuiz - Quiz" />
      <S.Container>
        <Header />
        <MainContainer>
          <S.Content onSubmit={handleAnswered}>
            <S.WrapperTitle>
              <QuizTitle
                title={`${category.categoryName} Quiz`}
                subtitle="Leia e siga as instruções"
              />
            </S.WrapperTitle>
            <S.Question>
              <div>
                <img
                  src={category.urlImage}
                  alt={`Imagem referente à ${category.categoryName}`}
                />
              </div>
              <S.TextQuestion>
                <h3>Questão {questionIndex}/10</h3>
                <p>{question?.questionName}</p>
              </S.TextQuestion>
            </S.Question>
            <S.AnswerWrapper>
              <h3>Escolha uma resposta</h3>
              {question?.answers.map((answer: any) => (
                <Answer
                  key={answer.id}
                  name={category.categoryName}
                  id={answer.id}
                  htmlFor={category.categoryName}
                  label={answer.reply}
                  onChange={(e: React.ChangeEvent) =>
                    setMarkedAnswer(e.target.id)
                  }
                  required
                />
              ))}
            </S.AnswerWrapper>
            <Button iconRight disabled={!disableButton}>
              {questionIndex === 10 ? (
                <span>Finalizar</span>
              ) : (
                <span>Enviar</span>
              )}
              <AiOutlineArrowRight className="arrow_icon" />
            </Button>
          </S.Content>
        </MainContainer>
        <Modal
          title="Você finalizou seu quiz!"
          show={showModal}
          onClose={() => Router.push("/")}
          button="Voltar ao ínicio"
        >
          <p>Você acertou: {reviewQuiz.amountOfCorrect} perguntas</p>
          <p>Você errou: {reviewQuiz.amountOfErrors} perguntas</p>
        </Modal>
      </S.Container>
    </>
  );
}
