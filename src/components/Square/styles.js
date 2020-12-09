import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${(props) => props.side}px;
  height: ${(props) => props.side}px;
  background-color: ${(props) => props.background};
  border-color: ${colors.black};
  border-bottom-width: ${(props) => props.borderBottom}px;
  border-top-width: ${(props) => props.borderTop}px;
  border-left-width: ${(props) => props.borderLeft}px;
  border-right-width: ${(props) => props.borderRight}px;
`;

export const Content = styled.Text`
  color: ${(props) => props.color};
  font-size: 70px;
  font-weight: bold;
`;
