import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  info: false,
  success: false,
  message: '',
  isSave: false,
  isShow: false,
  isArchive: false,
  isRestore: false,
  isDelete: false,
  isAdd: false,
  isActive: false,
  isLogin: false,
  credentials: {},

};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };