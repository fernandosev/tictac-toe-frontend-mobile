import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../../components/Board";
import Button from "../../components/Button";
import {
  getBoardRequest,
  getStatusRequest,
  restartRequest,
} from "../../store/modules/game/actions";
import colors from "../../styles/colors";
import { Container, Section, Label } from "./styles";

export default function Game() {
  const next = useSelector((state) => state.game.next);
  const winner = useSelector((state) => state.game.winner);
  const status = useSelector((state) => state.game.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatusRequest());
  }, []);
  return (
    <Container>
      {status === "opened" && (
        <Label>
          <Label bold>{next}:</Label> joga
        </Label>
      )}

      <Board />

      {status === "closed" && winner && (
        <Label>
          <Label bold>{winner}:</Label> venceu
        </Label>
      )}

      <Button
        text={status === "closed" ? "Novo jogo" : "Reiniciar"}
        background={colors.black}
        onPress={() => dispatch(restartRequest())}
      />
    </Container>
  );
}
