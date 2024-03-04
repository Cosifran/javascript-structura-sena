//import fuction react
import {useReducer} from "react";
//Import context
import layoutReducer from "./layoutReducer";
import layoutContext from "./layoutContext";
//import type
import {OPEN_DRAWER} from "../types";

const LayoutState = (props) => {
  const initialState = {
    openDrawer: false,
  };
  //dispacth para ejecutar acciones
  const [state, dispatch] = useReducer(layoutReducer, initialState);

  //función para abrir y cerrar drawer
  const toggleDrawerFn = (open) => (event) => {
    dispatch({
      type: OPEN_DRAWER,
      payload: open,
    });
  };

  return (
    <layoutContext.Provider
      value={{openDrawer: state.openDrawer, toggleDrawerFn}}>
      {props.children}
    </layoutContext.Provider>
  );
};

export default LayoutState;
