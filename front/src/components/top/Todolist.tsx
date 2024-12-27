"use client";
// TODO サーバーサイドでレンダリングしたい
import useTodo from "../../hooks/UseTodo";
import { FRONT_API_ENDPOINT } from "@/constants/server";
import Todo from "./Todo";
import { useSelector } from "@/store";
import { useEffect, useState } from "react";
import { Todo as TodoType} from "@/types/todo";

const TodoList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { filterTodoList } = useTodo();
  const [ filteredList, setFilteredList ] = useState<TodoType[]>([]);
  const [ todoList, setTodoList ] = useState<TodoType[]>([]);
  const { searchTodoValue } = useSelector((state) => state.todo);

  const fetchTodoList = async () => {
    // todo を取得
    const response = await fetch(`${FRONT_API_ENDPOINT}/todo`);
    const todoList = await response.json();
    setTodoList(todoList);

    // 取得したtodoをfilter
    const filtered = filterTodoList(todoList, searchTodoValue);
    setFilteredList(filtered);
    setLoading(false);
  };
  // 初回だけ
  useEffect(() => {
    fetchTodoList();
  }, []);
  useEffect(() => {
    const filtered = filterTodoList(todoList, searchTodoValue);
    setFilteredList(filtered);
  }, [searchTodoValue]);

  if (loading) {
    return (
      <>
        <h2>Todo List</h2>
        <h3>Now Loading...</h3>
      </>
    );
  }

  return (
    <>
      <h2>Todo List</h2>
      {
        filteredList.length === 0 ? (
          <p>No Content.</p>
        ) : (
          <ul>
              {
                filteredList.map((todo) => {
                  return <Todo key={todo.id} todo={todo} fetchTodoList={fetchTodoList} />;
                })
              }
          </ul>
        )
      }
    </>
  );
};

export default TodoList;
