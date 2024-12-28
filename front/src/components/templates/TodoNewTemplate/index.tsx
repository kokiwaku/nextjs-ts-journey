"use client";

import { useState } from 'react';
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Header from "@/components/common/Header";
import { FRONT_API_ENDPOINT } from "@/constants/server";

const TodoNewTemplage: NextPage = () => {
  debugger;
  const [todoContent, setTodoContent] = useState("")
  const router = useRouter();

  const handleAddTodo = async () => {
    // TODO add
    const response = await fetch(`${FRONT_API_ENDPOINT}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: todoContent })
    });
    // redirect to Home
    router.push("/");
  };

  return (
    <>
      <Header title="Add Todo" />
      <div>
        <h2>Add Todo</h2>
        <input
          type="text"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
      </div>
      <div className="m-1">
        <button className="addTodoBtn" onClick={handleAddTodo}>
          Submit
        </button>
      </div>
    </>
  );
}

export default TodoNewTemplage;