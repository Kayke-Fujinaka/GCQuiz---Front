/* eslint-disable no-alert */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Router from "next/router";

import * as S from "./style";

export function Time() {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(5 * 60);
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;
  useEffect((): void => {
    if (totalTimeInSeconds === 0) {
      toast.error("cabou o tempo");
      Router.push("/quiz");
    }

    setTimeout(() => {
      setTotalTimeInSeconds(totalTimeInSeconds - 1);
    }, 1000);
  }, [totalTimeInSeconds]);

  return (
    <S.Container>
      <span>Tempo: </span>
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}min</span>
    </S.Container>
  );
}
