import * as React from "react";
import colors from "./../../styles/colors";
import { Container, TextButton } from "./styles";

export default function Button({
  text,
  size = 200,
  color = colors.primaryColor,
  background = colors.secondaryColor,
  ...rest
}) {
  return (
    <Container size={size} background={background} {...rest}>
      <TextButton color={color}>{text}</TextButton>
    </Container>
  );
}
