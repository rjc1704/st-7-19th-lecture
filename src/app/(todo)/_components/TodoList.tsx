"use client";

import { useQuery } from "@tanstack/react-query";

import { Todo } from "@/types/todo.type";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const {
    data: todos,
    isPending,
    error,
  } = useQuery<Todo[], Error, Todo[], [string]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

      const { todos } = await fetch(`${BASEURL}/api/todo`).then((res) =>
        res.json(),
      );
      return todos;
    },
  });

  if (isPending) {
    return (
      <div className="text-3xl">
        <p>로딩중...</p>
      </div>
    );
  }

  if (error) {
    console.error(error);
    return <div className="text-3xl">에러가 발생했습니다: {error.message}</div>;
  }

  return (
    <>
      <ul className="list-none w-[250px] bg-slate-200">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
}
