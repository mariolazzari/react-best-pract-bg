"use client";

import { TodoProvider } from "../context/TodoContext";
import { TodosList } from "./TodosList";
import { TodoForm } from "./TodoForm";

export function Todos() {
  return (
    <TodoProvider>
      <div className="flex justify-between gap-8">
        <TodosList />
        <TodoForm />
      </div>
    </TodoProvider>
  );
}
