import React, { useState } from "react";
import { Dimensions } from "react-native";
import Square from "../Square";
import { Container } from "./styles";

const borderWidth = 5;

export default function Board() {
  const [screenWidth, setScreenWidth] = useState(20);
  return (
    <Container
      onLayout={(event) => setScreenWidth(event.nativeEvent.layout.width)}
      height={screenWidth}
    >
      <Square
        side={screenWidth / 3}
        borderRight={borderWidth}
        borderBottom={borderWidth}
        value="O"
      />
      <Square
        side={screenWidth / 3}
        borderLeft={borderWidth}
        borderRight={borderWidth}
        borderBottom={borderWidth}
      />
      <Square
        side={screenWidth / 3}
        borderLeft={borderWidth}
        borderBottom={borderWidth}
      />
      <Square
        side={screenWidth / 3}
        borderRight={borderWidth}
        borderBottom={borderWidth}
        borderTop={borderWidth}
      />
      <Square
        side={screenWidth / 3}
        borderLeft={borderWidth}
        borderRight={borderWidth}
        borderTop={borderWidth}
        borderBottom={borderWidth}
      />
      <Square
        side={screenWidth / 3}
        borderLeft={borderWidth}
        borderTop={borderWidth}
        borderBottom={borderWidth}
      />
      <Square
        side={screenWidth / 3}
        borderTop={borderWidth}
        borderRight={borderWidth}
      />
      <Square
        side={screenWidth / 3}
        borderLeft={borderWidth}
        borderTop={borderWidth}
        borderRight={borderWidth}
      />
      <Square
        side={screenWidth / 3}
        borderLeft={borderWidth}
        borderTop={borderWidth}
      />
    </Container>
  );
}
