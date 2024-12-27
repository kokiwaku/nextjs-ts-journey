import TodoList from "@/components/top/Todolist";
import SearchTodo from "@/components/top/SearchTodo";
import Header from "@/components/common/Header";

export default function home() {
  return (
    <>
      <Header title="Top"/>
      <SearchTodo />
      <TodoList />
    </>
  );
}
