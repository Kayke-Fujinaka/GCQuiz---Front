import { useEffect, useState } from "react";
import { AiFillFlag } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiXCircle } from "react-icons/hi";

import { useAuth } from "@/contexts/useAuth";
import { IAchievementsCard, IUserProfileData } from "@/interfaces";
import { api } from "@/services";

import { AchievementsCard } from "./AchievimentsCard";
import * as S from "./style";

export function Profile() {
  const [profileInfo, setProfileInfo] = useState<IUserProfileData>(
    {} as IUserProfileData
  );

  const { user } = useAuth();

  const achievementsCards: IAchievementsCard[] = [
    {
      color: "green",
      icon: <BsCheckCircleFill />,
      score: 0,
      title: "Acertos",
    },
    {
      color: "red",
      icon: <HiXCircle />,
      score: 0,
      title: "Erros",
    },
    {
      color: "yellow",
      icon: <AiFillFlag />,
      score: 0,
      title: "Questões",
    },
  ];

  useEffect(() => {
    if (user.sub) {
      api
        .get<IUserProfileData>(`/user/${user.sub}`)
        .then((res) => setProfileInfo(res.data))
        .catch((err) => {
          const { status } = err.response;
          const { statusText } = err.response;
          const messageError = err.response.data.message;
          console.error(`${status} - ${statusText} - ${messageError}`);
        });
    }
  }, [user]);

  return (
    <S.Container>
      <S.Avatar>
        <img src="./assets/profile-default-icon.svg" alt="Imagem do usuário" />
      </S.Avatar>
      <S.Content>
        <h1>{user.firstName}</h1>
        <S.AchievementsWrapper>
          {achievementsCards.map((card) => (
            <AchievementsCard
              key={Math.random()}
              color={card.color}
              icon={card.icon}
              score={card.score}
              title={card.title}
            />
          ))}
        </S.AchievementsWrapper>
        <h3>Seja o primeiro do rank</h3>
      </S.Content>
    </S.Container>
  );
}
