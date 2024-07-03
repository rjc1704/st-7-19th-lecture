"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { AxiosError } from "axios";
import { Todo } from "@/types/todo.type";

export default function TodoForm() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const queryClient = useQueryClient();
  const addMutation = useMutation<Todo, AxiosError, Todo>({
    mutationFn: async (newTodo) => {
      const todo = await fetch("/api/todo", {
        method: "post",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      return todo;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleAddTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setTitle("");
    setContents("");
    addMutation.mutate({
      id: Date.now().toString(),
      title,
      contents,
      isCompleted: false,
      liked: false,
      imgPath: "https://picsum.photos/50/50",
      createdAt: Date.now(),
    });
  };

  return (
    <form className="border border-black mb-4" onSubmit={handleAddTodo}>
      <label htmlFor="title">제목:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="contents">내용:</label>
      <input
        id="contents"
        name="contents"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        required
      />
      <button type="submit">추가하기</button>
    </form>
  );
}
