import { useContext } from "react";
import { TaskContext } from "../../context";

export const useTask = () => {
  return useContext(TaskContext);
};
