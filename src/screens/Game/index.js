import React from "react";
import Board from "../../components/Board";
import { Container, Section, Label } from "./styles";

export default function Game() {
  return (
    <Container>
      <Label>
        <Label bold>X:</Label> joga
      </Label>

      <Board />
    </Container>
  );
}
