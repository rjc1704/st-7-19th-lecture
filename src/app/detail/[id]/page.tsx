import HomeButton from "@/components/HomeButton";

export default async function Detail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("Detail 컴포넌트 렌더링");
  const { todoData: todo } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/todo/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  ).then((res) => res.json());

  return (
    <div>
      <HomeButton />
      <p>제목: {todo.title}</p>
      <p>내용: {todo.contents}</p>
      <p>작성일자: {new Date(todo.createdAt).toDateString()}</p>
    </div>
  );
}
