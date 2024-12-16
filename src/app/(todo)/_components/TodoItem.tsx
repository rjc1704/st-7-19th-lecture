import { Todo } from "@/types/todo.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import catImg from "@/assets/imgs/냐옹.jpg";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const router = useRouter();
  return (
    <li key={todo.id} className="border border-black p-3 mb-3">
      <h3>{todo.title}</h3>
      <Image
        // src={catImg}
        src={`${todo.imgPath}?random=${Math.random()}`}
        alt="투두 이미지"
        width={50}
        height={50}
        style={{ width: 50, height: 50, objectFit: "cover" }}
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
