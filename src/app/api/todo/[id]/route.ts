// app/items/[slug]/route.ts
export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } },
) {
  const baseUrl = process.env.JSON_SERVER_URL;
  const todoData = await fetch(`${baseUrl}/todos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return Response.json({ todoData });
}
