'use client';

import TodoLayout from '@/components/oraganisms/TodoLayout';
import SearchTodo from '@/components/oraganisms/SearchTodo';
import TodoList from '@/components/oraganisms/TodoList';
import { useTodoContext } from '@/context/TodoContext';
import { useTopTemplate } from './useTopTemplate';

const TopTemplate: React.FC = () => {
  const { originTodoList, fetchTodoList } = useTodoContext();
  const [{ searchKeyword, showTodoList }, { handleSetSeachKeyword }] =
    useTopTemplate({
      originTodoList,
      fetchTodoList,
    });

  return (
    <>
      <TodoLayout title="Top">
        <SearchTodo
          searchKeyword={searchKeyword}
          handleSetSeachKeyword={handleSetSeachKeyword}
        />
        <TodoList todoList={showTodoList} />
      </TodoLayout>
    </>
  );
};

export default TopTemplate;
