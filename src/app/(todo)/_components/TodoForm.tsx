"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { AxiosError } from "axios";
import { Todo } from "@/types/todo.type";
import { addTodo } from "@/api/todo";

export default function TodoForm() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const queryClient = useQueryClient();
  const addMutation = useMutation<unknown, AxiosError, Todo>({
    mutationFn: async (newTodo) => {
      // (1) 서버 액션
      await addTodo(newTodo);

      // (2) route handler
      // await fetch("api/todo", {
      //   method: "POST",
      //   body: JSON.stringify(newTodo),
      // });
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
