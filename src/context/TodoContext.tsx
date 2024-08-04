import { createContext, ReactNode, useContext, useState } from "react";
import { TodoContext as TodoContextType } from "@/types/TodoContext";
import { Todo } from "@/types/Todo";

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, content: "test" }]);

  const getTodo = (id: number): Todo | undefined => {
    return todos.find(todo => todo.id === id);
  };

  const addTodo = (todo: Todo): void => {
    setTodos(todos => [...todos, todo]);
  };

  const updateTodo = (todo: Todo): void => {
    const updTodos = todos.map(t => (t.id === todo.id ? todo : t));
    setTodos(updTodos);
  };

  const deleteTodo = (id: number): void => {
    const delTodos = todos.filter(t => t.id !== id);
    setTodos(delTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, getTodo, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("TodoContext must be used within TodoProvider");
  }
  return context;
};
