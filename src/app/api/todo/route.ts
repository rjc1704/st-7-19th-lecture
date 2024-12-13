import { getTodos } from "@/api/todo";

export async function GET(request: Request) {
  const todos = await getTodos();

  return Response.json({ todos });
}

export async function POST(request: Request) {
  // request body 추출
  const newTodo = await request.json();
  const resultedTodo = await fetch(`${process.env.JSON_SERVER_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  return Response.json({ todo: resultedTodo });
}
