import { useContext } from "react";
import { DarkModeContext } from "../../context";

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
