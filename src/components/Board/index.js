import React, { useState } from "react";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { moveRequest } from "../../store/modules/game/actions";
import Square from "../Square";
import { Container } from "./styles";

const borderWidth = 5;
const screenWidth = Dimensions.get("screen").width - 20;

export default function Board() {
  const board = useSelector((state) => state.game.board);
  const dispatch = useDispatch();

  const removeLeftBorder = (index) => {
    if (index !== 0 && index !== 3 && index !== 6) return true;

    return false;
  };

  const removeRightBorder = (index) => {
    if (index !== 2 && index !== 5 && index !== 8) return true;

    return false;
  };

  return (
    <Container height={screenWidth} width={screenWidth}>
      {board.map((value, index) => {
        return (
          <Square
            key={index}
            side={screenWidth / 3}
            borderRight={removeRightBorder(index) ? borderWidth : 0}
            borderLeft={removeLeftBorder(index) ? borderWidth : 0}
            borderTop={index > 2 ? borderWidth : 0}
            borderBottom={index < 6 ? borderWidth : 0}
            value={value}
            onPress={() => dispatch(moveRequest(index))}
          />
        );
      })}
    </Container>
  );
}
