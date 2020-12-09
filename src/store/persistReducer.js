import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "@tictactoe123",
      storage: AsyncStorage,
      whitelist: [""],
    },
    reducers
  );

  return persistedReducer;
};
