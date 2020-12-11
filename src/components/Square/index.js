import React from "react";
import colors from "../../styles/colors";
import { Container, Content } from "./styles";

export default function Square({
  borderBottom = 0,
  borderTop = 0,
  borderLeft = 0,
  borderRight = 0,
  value = null,
  side = 40,
  background = colors.primaryColor,
  color = colors.black,
  ...props
}) {
  return (
    <Container
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderTop={borderTop}
      background={background}
      side={side}
      {...props}
    >
      <Content color={color}>{value}</Content>
    </Container>
  );
}
