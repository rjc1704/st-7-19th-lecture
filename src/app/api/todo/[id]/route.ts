import { getTodo } from "@/api/todo";

// app/items/[slug]/route.ts
export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } },
) {
  const todoData = await getTodo(id);

  return Response.json({ todoData });
}
