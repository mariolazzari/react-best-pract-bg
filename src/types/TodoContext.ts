import { Todo } from "./Todo";

export type TodoContext = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  getTodo: (id: number) => Todo | undefined;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
};
