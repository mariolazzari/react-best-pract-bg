import { useTodo } from "@/hooks/useTodo";

export function TodosList() {
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  );
}
