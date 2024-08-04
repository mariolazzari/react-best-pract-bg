"use client";

import { useState, FormEventHandler, ChangeEventHandler } from "react";

const MAX_FREE_TODOS = 3;

export function TodoForm() {
  const [content, setContent] = useState<string>("");

  const onContentChange: ChangeEventHandler<HTMLInputElement> = e => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col">
        <label htmlFor="content">Todo content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={onContentChange}
        />
      </div>

      <button className="mt-5">Add</button>
    </form>
  );
}
