import { StatusBar } from "react-native";
import React from "react";
import TicTacToe from "./src";
import colors from "./src/styles/colors";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primaryColor} />
      <TicTacToe />
    </>
  );
}
