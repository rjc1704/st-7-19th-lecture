"use client";

import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  return (
    <button
      className="border border-red-500 hover:bg-slate-300"
      onClick={() => router.push("/")}
    >
      홈으로 이동
    </button>
  );
}
