import { Todo } from "@/types/todo";


/**
 * TODO hooksの使い方整理
 * context api & hooks -> reduxでの状態管理に移行に伴い、大半のロジックもstoreに移行した
 */
const useTodo = () => {
  const filterTodoList = (todoList: Todo[], value: string): Todo[] => {
    const result =
      value === ""
        ? todoList
        : todoList.filter((todo) =>
            todo.content.toLowerCase().includes(value.toLowerCase())
          );

    return result;
  };

  const handle = {
    filterTodoList,
  };

  return handle;
};

export default useTodo;
