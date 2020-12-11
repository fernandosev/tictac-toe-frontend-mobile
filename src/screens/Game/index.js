import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../../components/Board";
import {
  getBoardRequest,
  getStatusRequest,
} from "../../store/modules/game/actions";
import { Container, Section, Label } from "./styles";

export default function Game() {
  const next = useSelector((state) => state.game.next);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatusRequest());
  }, []);
  return (
    <Container>
      <Label>
        <Label bold>{next}:</Label> joga
      </Label>

      <Board />
    </Container>
  );
}
