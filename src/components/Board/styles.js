import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${colors.black};
  margin: 30px 0;
`;
