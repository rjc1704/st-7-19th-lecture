import { getTodo } from "@/api/todo";
import HomeButton from "@/components/HomeButton";

type Props = {
  params: { id: string };
};

export default async function Detail({ params: { id } }: Props) {
  console.log("Detail 컴포넌트 렌더링");
  const todo = await getTodo(id);

  return (
    <div>
      <HomeButton />
      <p>제목: {todo.title}</p>
      <p>내용: {todo.contents}</p>
      <p>작성일자: {new Date(todo.createdAt).toDateString()}</p>
    </div>
  );
}
