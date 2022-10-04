import { IUserRegisterData } from "../hooks/useAuth";

interface IGame {
  amountOfCorrect: number;
  amountOfIncorrect: number;
  finalizedAt: string;
  finalizedTime: string;
  id: string;
}

export interface IUserProfileData extends Omit<IUserRegisterData, "password"> {
  id: string;
  games: IGame[];
}

export interface IAchievementsCard {
  icon: JSX.Element;
  color: "green" | "red" | "yellow";
  score: any;
  title: string;
}

export type AchievementsCardColorsProps = Pick<IAchievementsCard, "color">;
