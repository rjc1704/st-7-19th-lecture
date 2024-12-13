import { Metadata } from "next";
import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";

export const metadata: Metadata = {
  title: "투두홈",
};

export default function Home() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}
