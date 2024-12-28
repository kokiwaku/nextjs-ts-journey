"use client";

import { FC } from "react";
import Header from "@/components/common/Header";
import SearchTodo from "@/components/top/SearchTodo";
import TodoList from "@/components/top/Todolist";

const TopTemplate: FC = () => {
  return (
    <>
      <Header title="Top"/>
      <SearchTodo />
      <TodoList />
    </>
  );
}

export default TopTemplate;