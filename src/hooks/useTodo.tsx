import { TodoContext } from "@/context/TodoContext";
import { useContext } from "react";

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("TodoContext must be used within TodoProvider");
  }
  return context;
};
