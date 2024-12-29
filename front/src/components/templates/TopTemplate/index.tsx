'use client';

import { FC } from 'react';
import BaseLayout from '@/components/oraganisms/BaseLayout';
import SearchTodo from '@/components/top/SearchTodo';
import TodoList from '@/components/top/Todolist';

const TopTemplate: FC = () => {
  return (
    <>
      <BaseLayout title="Top">
        <SearchTodo />
        <TodoList />
      </BaseLayout>
    </>
  );
};

export default TopTemplate;
