import { Todo } from "@/types/todo.type";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const router = useRouter();
  return (
    <li key={todo.id} className="border border-black p-3 mb-3">
      <h3>{todo.title}</h3>
      <Image
        src={`${todo.imgPath}?random=${Math.random()}`}
        alt="투두 이미지"
        width={50}
        height={50}
      />
      <div className="flex justify-between">
        <button onClick={() => router.push(`/detail/${todo.id}`)}>
          내용보기
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
