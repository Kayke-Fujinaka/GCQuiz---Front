import { Modal } from "..";
import * as S from "./style";

export function StartQuizModal() {
  return (
    <Modal width={17} height={8} >
        <S.Title>Deseja inicar o Quiz?</S.Title>
        <S.Footer>
          <S.ButtonChoose type="button" color="red">
            Não
          </S.ButtonChoose>
          <S.ButtonChoose type="button" color="green">
            Sim
          </S.ButtonChoose>
        </S.Footer>
    </Modal>
  );
}
