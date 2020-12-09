import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  background-color: ${colors.primaryColor};
  flex: 1;
  padding: 10px 10px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${colors.black};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: 24px;
`;
