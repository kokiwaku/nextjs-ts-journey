'use client';

import Todo from '@/components/molecules/Todo';
import { useSelector } from '@/store';
import { useEffect, useState } from 'react';
import { Todo as TodoType } from '@/types/todo';
import { getTodoList } from '@/app/apis/todoApi';

const TodoList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState<TodoType[] | []>([]);
  const [todoList, setTodoList] = useState<TodoType[] | []>([]);
  const { searchTodoValue } = useSelector((state) => state.todo);

  const fetchTodoList = async () => {
    // todo を取得
    const response = await getTodoList();
    const todoList = response.data?.todoList ?? [];
    setTodoList(todoList);

    const filtered = filterTodoList(todoList, searchTodoValue);
    setFilteredList(filtered);
    setLoading(false);
  };

  // TodoListをfilter
  const filterTodoList = (todoList: TodoType[], value: string): TodoType[] => {
    const result =
      value === ''
        ? todoList
        : todoList.filter((todo) =>
            todo.content.toLowerCase().includes(value.toLowerCase())
          );

    return result;
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
      {filteredList.length === 0 ? (
        <p>No Content.</p>
      ) : (
        <ul>
          {filteredList.map((todo) => {
            return (
              <Todo key={todo.id} todo={todo} fetchTodoList={fetchTodoList} />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TodoList;
