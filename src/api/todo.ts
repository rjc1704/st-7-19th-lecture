"use server";

import { Todo } from "@/types/todo.type";

export const getTodo = async (id: Todo["id"]): Promise<Todo> => {
  const res = await fetch(`${process.env.JSON_SERVER_URL}/todos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: Todo = await res.json();
  return data;
};

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`${process.env.JSON_SERVER_URL}/todos`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (newTodo: Todo): Promise<void> => {
  await fetch(`${process.env.JSON_SERVER_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
};
